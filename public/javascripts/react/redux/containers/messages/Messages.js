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
            currentMessagesPart: 1
        };
        this.showMessages = this.showMessages.bind(this);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.tab == nextProps.currentTab){
            if(this.props.prependLoader != nextProps.prependLoader) return true;
            if(!isEqual(nextProps.activeRoom, this.props.activeRoom)) return true;
            if(!isEqual(nextProps.privateRoom, this.props.privateRoom)) return true;
            if(!isEqual(nextProps.showMessageLoader, this.props.showMessageLoader)) return true;
            if(this.props.chatMessages && nextProps.chatMessages && !isEqual(this.props.chatMessages.messages, nextProps.chatMessages.messages)) return true;
            if(nextProps.chatMessages != this.props.chatMessages) return true;
            if(nextProps.privateRoom) return true;
            return false;
        }
        return false;
    }

    componentDidMount(){
        var {socketIO, showPrependLoader, prependLoader} = this.props,
          self = this;

        socketIO.on("resetMessageSettings", ()=>{
           this.setState({
               currentMessagesPart: 1
           });
        });

        var scroller = ReactDOM.findDOMNode(this.scrollElement);
        scroller.firstChild.addEventListener("scroll", (event)=>{
            var {activeRoom, chatMessages} = self.props;
            if(event.target.scrollTop == 0){
              var updatedMessagePart = self.state.currentMessagesPart + 1;
              if(activeRoom && chatMessages && chatMessages.messages.length != chatMessages.messagesNumber){
                socketIO.emit("prependMessagesRequest", {
                  messagesPart: updatedMessagePart,
                  roomID: activeRoom.roomID
                });

                if(!prependLoader) showPrependLoader(true);
                self.setState({
                    currentMessagesPart: updatedMessagePart
                });
              }
            }
        });
    }

    showMessages(){
        var {tab, activeRoom, chatMessages, profileuser, privateRoom, privateMessages} = this.props;
        if(activeRoom && chatMessages && tab == 0){
            return chatMessages.messages.map((item)=>{
                return <Message key={ item._id } message={item} show={true} profileUserID={profileuser._id} />;
            });
        }
        else if(activeRoom && privateRoom && tab == 1){
            var activeRoom = find(privateMessages, (o)=>{ return o.privateRoomID == privateRoom.privateRoomID });
            if(activeRoom){
                if(activeRoom.messages.length){
                    return activeRoom.messages.map((item)=>{
                        return <Message key={ item._id } private={true} message={item} profileUserID={profileuser._id} />
                    });
                }
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
            customListClass = (!this.props.activeRoom || (tab == 1 && !this.props.privateRoom)) ? 'showHomepageInfo' : '',
            overflowBlock = (!this.props.activeRoom && !this.props.chatMessages) ? true : false;

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
      & > div:first-child{
        margin-bottom: -16px !important;
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