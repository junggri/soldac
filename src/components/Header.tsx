import React from 'react'
import {HeaderComp} from "../styles";


const Header: React.FC = () => {
   return (
      <HeaderComp>
         <img src="/images/logo.png" alt="솔닥로고"/>
         <div className="header-box">
            <h1>진료 예약하기</h1>
            <h2>(진료 날짜 예약)</h2>
         </div>
      </HeaderComp>
   )
}
export default Header