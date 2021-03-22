import React, {useCallback, useState} from 'react'
import {MainContainerComp} from "../styles";
import LoadingBar from './LoadingBar';
import Header from "./Header";
import DayTime from "./DayTime";
import Footer from "./Footer";

const MainVeiw: React.FC = () => {
   const [state, setState] = useState<number>(1)
   const [reservation, setReservation] = useState<boolean>(false)
   const [clickedBtn, setClickedBtn] = useState<EventTarget | null>(null)
   const [canReservation, setCanReservation] = useState<boolean>(true)
   //진료가능여부 판별하는 변수입니다
   //true -> 가능 , false -> 불가능


   const handleState = useCallback((state: number): void => {
      setState(state)
   }, [])

   const changeClickedBtn = useCallback((target: EventTarget) => {
      setClickedBtn(target)
   }, [])

   const changeReservationState = useCallback((state: boolean) => {
      setReservation(state)
   }, [])

   return (
      <MainContainerComp>
         <LoadingBar state={state} reservation={reservation}/>
         <Header/>
         <DayTime
            handleState={handleState}
            reservation={reservation}
            setReservation={changeReservationState}
            changeClickedBtn={changeClickedBtn}
            clickedBtn={clickedBtn}
            canReservation={canReservation}
         />
         <Footer
            state={state}
            handleState={handleState}
            setReservation={changeReservationState}
            reservation={reservation}
         />
      </MainContainerComp>
   )
}
export default MainVeiw