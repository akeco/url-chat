import React, {Component} from 'react';
import styled from 'styled-components';


class InfoContainer extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Wrapper>
                <H4>Welcome to Forum</H4>
                <P>This is a space where you can meet and talk with people who are viewing the same website as you.</P>
                <P>Start by typing or copying in a website address (URL) into the 'Insert URL' box.</P>
                <P>If someone has already created a chat room for that website, and they are in the chat room, you can join the discussion. Enjoy!</P>
                <P>If you are the first person to create the chat room, others will be able to see that it has been created and can join. Note that rooms disappear after 5 minutes with no users.</P>
            </Wrapper>
        );
    }
}


const Wrapper = styled.div`
        padding: 0 40px;
        background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 29%, rgba(255,255,255,0.64) 63%, rgba(255,255,255,0) 100%); 
        background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); 
        background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 29%,rgba(255,255,255,0.64) 63%,rgba(255,255,255,0) 100%); 
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 );
        @media (min-width: 1000px){
            padding-right: 200px;
        }
`;

const H4 = styled.h4`
    color: #00695C;
    font-weight: 400;
    margin-top: 5px;
    font-size: 22px;
    margin-bottom: 20px;
`;

const P = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #00796B;
    line-height: 21px;
`;


export default InfoContainer;