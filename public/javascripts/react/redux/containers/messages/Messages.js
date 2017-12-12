import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {List} from 'material-ui/List';
import {teal300, teal600} from 'material-ui/styles/colors';
import Message from './Message';
import CircularProgress from 'material-ui/CircularProgress';
import { Loader } from 'semantic-ui-react'
import InfoContainer from '../../../components/homepage/InfoContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { find, isEqual } from 'lodash';
import styled from 'styled-components';
import {showPrependLoader} from "../../actions/index"
import '../../../../../stylesheets/less/messages.less';


class Messages extends Component{
    constructor(props){
        super(props);
        this.state = {
            windowFocus: true,
            currentMessagesPart: 1,
            currentPrivateMessagesPart: 1
        };
        this.showMessages = this.showMessages.bind(this);
        this.infiniteScrollPublic = this.infiniteScrollPublic.bind(this);
        this.infiniteScrollPrivate = this.infiniteScrollPrivate.bind(this);
        this.resetMessageSettingsState = this.resetMessageSettingsState.bind(this);
        this.resetPrivateMessageSettings = this.resetPrivateMessageSettings.bind(this);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.tab == nextProps.currentTab){
            if(this.props.prependLoader != nextProps.prependLoader) return true;
            if(!isEqual(nextProps.activeRoom, this.props.activeRoom)) return true;
            if(this.props.tab == 1 && !isEqual(nextProps.privateRoom, this.props.privateRoom)) return true;
            if(!isEqual(nextProps.showMessageLoader, this.props.showMessageLoader)) return true;
            if(this.props.tab == 0 && this.props.chatMessages && nextProps.chatMessages && !isEqual(this.props.chatMessages.messages, nextProps.chatMessages.messages)) return true;
            if(this.props.tab == 0 && nextProps.chatMessages != this.props.chatMessages) return true;
            if(this.props.tab == 1 && nextProps.privateRoom) return true;
            return false;
        }
        return false;
    }

    componentDidMount(){
        this.props.socketIO.on("resetMessageSettings", this.resetMessageSettingsState);
        this.props.socketIO.on("resetPrivateMessageSettings", this.resetPrivateMessageSettings);
        if(this.props.tab == 0){
            var scroller = ReactDOM.findDOMNode(this.scrollElement);
            scroller.firstChild.addEventListener("scroll", this.infiniteScrollPublic);
        }
        else if(this.props.tab == 1){
            var scroller = ReactDOM.findDOMNode(this.scrollElement);
            scroller.firstChild.addEventListener("scroll", this.infiniteScrollPrivate);
        }
    }

    componentWillUnmount(){
        var scroller = ReactDOM.findDOMNode(this.scrollElement);
        scroller.firstChild.removeEventListener("scroll", this.infiniteScrollPublic);
        this.props.socketIO.removeListener("resetMessageSettings", this.resetMessageSettingsState);
    }

    resetMessageSettingsState(){
        this.setState({
            currentMessagesPart: 1,
            currentPrivateMessagesPart: 1
        });
    }

    resetPrivateMessageSettings(){
        this.setState({
            currentPrivateMessagesPart: 1
        });
    }

    infiniteScrollPublic(event){
        var {activeRoom, chatMessages, socketIO, showPrependLoader, prependLoader} = this.props;
        if(event.target.scrollTop == 0){
            var updatedMessagePart = this.state.currentMessagesPart + 1;
            if(activeRoom && chatMessages && chatMessages.messages.length != chatMessages.messagesNumber){
                socketIO.emit("prependMessagesRequest", {
                    messagesPart: updatedMessagePart,
                    roomID: activeRoom.roomID
                });

                if(!prependLoader) {
                    showPrependLoader(true);
                    this.setState({
                        currentMessagesPart: updatedMessagePart
                    });
                }
            }
        }
    }

    infiniteScrollPrivate(event){
        var {activeRoom, privateRoom, privateMessages, socketIO, showPrependLoader, prependLoader} = this.props;
        if(event.target.scrollTop == 0){
            var updatedMessagePart = this.state.currentPrivateMessagesPart + 1;
            if(activeRoom && privateRoom && privateMessages && privateMessages.messages && privateMessages.messages.length != privateMessages.messagesNumber){
                socketIO.emit("prependPrivateMessagesRequest", {
                    messagesPart: updatedMessagePart,
                    roomID: privateRoom.privateRoomID
                });

                if(!prependLoader) {
                    showPrependLoader(true);
                    this.setState({
                        currentPrivateMessagesPart: updatedMessagePart
                    });
                }
            }
        }
    }

    showMessages(){
        var {tab, activeRoom, chatMessages, profileuser, privateRoom, privateMessages} = this.props;
        if(activeRoom && chatMessages && tab == 0){
            return chatMessages.messages.map((item)=>{
                return <Message key={ item._id } message={item} show={true} profileUserID={profileuser._id} />;
            });
        }
        else if(activeRoom && privateRoom && tab == 1){
            if(privateMessages && privateMessages.messages && privateMessages.messages.length){
                return privateMessages.messages.map((item)=>{
                    return <Message key={ item._id } private={true} message={item} profileUserID={profileuser._id} />
                });
            }
        }
        else if(activeRoom && !chatMessages && tab == 0 && !this.props.showMessageLoader){
            return (
                <EmptyDivMessage>
                    Write first messaege in {activeRoom.name} room<br/>
                    Ask question or just share your thoughts
                </EmptyDivMessage>
            )
        }
        else if(!this.props.showMessageLoader){
            return <InfoContainer />;
        }
    }


    render(){
        var {tab, showMessageLoader, prependLoader} = this.props,
            homepageClass = (!this.props.activeRoom || (tab == 1 && !this.props.privateRoom)) ? `showHomepageInfo messagesListWrapper` : `messagesListWrapper privateMessageWrapper`,
            customListClass = (!this.props.activeRoom || (tab == 1 && !this.props.privateRoom)) ? 'showHomepageInfo' : '';

        return(
            <div style={style.outerDivBlock}>
                {
                    (showMessageLoader) && <CircularProgress color={teal300} style={ style.loader } size={60} thickness={7} />
                }
                <Loader active={prependLoader} style={{top: 20}} />
                <MessagesListWrapper
                    ref={(input) => { this.scrollElement = input }}
                    className={homepageClass}
                    style={style.messagesListWrapper}
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}
                >
                    <CustomList className={customListClass}>
                        {this.showMessages()}
                    </CustomList>
                </MessagesListWrapper>
            </div>
        );
    }
}


const MessagesListWrapper = styled(Scrollbars)`
      @media screen and (-webkit-min-device-pixel-ratio:0), @media screen and(-webkit-min-device-pixel-ratio:0){
        & > div:first-child{
            margin-bottom: -16px !important;
        }       
    }
      & > div:last-child{
            z-index: 999;
      }
         
      &.showHomepageInfo{
            background-image: url('../../../../../images/homepage-illustration.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;
            @media (min-width: 1000px){
                background-size: cover;
            }
            @media (max-height: 515px){
                background-size: cover !important; 
            }
      }
`;


const CustomList = styled(List)`
    &.showHomepageInfo{
        margin-top: 0px;
        height: 100%;
        padding-top: 25px !important;
        padding-bottom: 150px;
        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,0.64) 63%, rgba(255,255,255,0) 100%); 
        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); 
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );
    }
`;

const EmptyDivMessage = styled.div`
        position: absolute;
        color: ${teal600};
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
        justify-content: center;
        align-self: center;
        top: 45%;
        cursor: default;
`;


var style = {
    loader: {
      marginTop: -23
    },
    outerDivBlock:{
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    messagesList: {
        lineHeight: '13px',
        padding: '5px 5px 8px'
    },
    messagesListWrapper: {
        //overflowY: 'scroll',
        overflowX: 'hidden',
        flexGrow: 1,
        paddingTop: 15
    },
    messageItem: {
        fontSize: 13,
        display: 'inline-block',
        borderRadius: 5,
        marginBottom: 10,
        borderTopLeftRadius: 0,
        backgroundColor: 'peru'
    },
    messageItemRight:{
        fontSize: 13,
        display: 'inline-block',
        borderRadius: 5,
        marginBottom: 10,
        borderTopRightRadius: 0,
        backgroundColor: 'white',
        color: 'rgba(0,0,0,0.8)'
    },
    loader: {
        alignSelf: 'center',
        position: 'absolute',
        top: '45%'
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showPrependLoader
    }, dispatch);
}

function mapStateToProps(state) {
    return ({
        activeRoom: state.activeRoom,
        socketIO: state.socketobject,
        profileuser: state.profileuser,
        chatMessages: state.chatmessages,
        privateMessages: state.privateMessages,
        privateRoom: state.privateRoom,
        prependLoader: state.prependLoader
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);