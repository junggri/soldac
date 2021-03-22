import React from "react"
import reset from 'react-style-reset/string';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
  box-sizing: border-box;
  }
  html,body{
   background: #E5E5E5;
  }
`;

export default GlobalStyles


export const MainContainerComp = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  width:375px;
  height: 670px;
  background: white;
`

export const LoadingBarComp = styled.section<{ state: number, reservation: boolean }>`
  height: 3px;
  background: ${props => !props.reservation ? "linear-gradient( to right, #509FE0, #A4D4FA)" : "white"};
  width:${props => (props.state * 125) + "px"};
  transition:0.3s all ease;
`

export const HeaderComp = styled.section`
  padding:0 30px;
  margin-top:56px;
  img{
    width:32px;
    height:32px;
  }
  & .header-box{
    display: flex;
    align-items: flex-end;

    h1{
      margin-top:20px;
      font-size:24px;
      font-weight: bolder;
    }
    h2{
      font-size:0.8rem;
      padding-left:12px;
      color:rgba(0,0,0,0.4);
    }
  }  
`

export const DayTimeComp = styled.section`
  //border:1px solid black;
  padding:0 30px;
  margin-top:40px;
  & .time__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:20px;
    span{
      font-size:0.7rem;
      font-weight: 300;
      text-decoration: underline;
      cursor:pointer;
    }
  }
    h2{
      font-size:14px;
      font-weight: 300;
    }
  & .today{
    margin-top:12px;
    font-size:0.9rem;
    word-spacing: 1.4px;
    font-weight: 500;
  }
  & .reservation-box{
    padding:16px 7px;
    border-radius: 4px;
    border:1px solid rgba(0,0,0,0.2)
  }
  & .time-container{
    margin-top:20px;
  }
  & .time__item-container{
    margin-top:12px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 9px;
    height: 90px;
    div{
      cursor:pointer;
      border-radius: 3px;
      border:1px solid rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      padding:10px 7px;
      font-size:0.9rem;
      &:hover{
        border:1px solid #50A0E0;
      }
      span{
        margin-top:2px;
        display: inline-block;
      }
    }
  & .cant-reservation-slo{
   position: absolute;
   border:none;
   padding:0;
   color:rgba(0,0,0,0.4);
   &:hover{
    border:none;
   }
  }
  }
  
`

export const FooterComp = styled.footer`
  padding:0 30px;
  margin-top:20px;
  h2{
    font-weight: 300;
    font-size: 14px;
  }
  & .textarea-box{
    position: relative;
    margin-top:12px;
  }
  textarea{
    outline-style: none;
    border:none;
    width:100%;
    height: 120px;
    resize: none;
    padding:10px;
    background: #EDEEF0;
    border-radius: 6px;
    font-weight: lighter;
    font-size:1.125rem;
    &::placeholder{
      color:rgba(0,0,0,0.3);
      font-size: 0.8rem;
    }
  }
  & .show-text-lengthBox{
    position: absolute;
    bottom:10%;
    right:3%;
    font-size:0.8rem;
    color:rgba(0,0,0,0.2);
  }
  button{
    position: absolute;
    width:315px;
    display: none;
    height: 45px;
    border-radius: 4px;
    outline-style: none;
    border:none;
    background:linear-gradient( to right, #A2D3FB, #509FE0 );
    color:white;
    cursor:pointer;
    bottom:20px;
  }
`