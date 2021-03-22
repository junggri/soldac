import React, {ReactNode, useEffect, useRef, useState} from "react"
import {DayTimeComp} from "../styles"

interface IToday {
   day: string
   month: string
   year: string
}

interface IDayTime {
   handleState: (state: number) => void
   children?: ReactNode
   reservation: boolean
   changeClickedBtn: (target: EventTarget) => void
   clickedBtn: EventTarget | null
   setReservation: (state: boolean) => void
   canReservation: boolean
}

const DayTime: React.FC<IDayTime> = ({handleState, reservation, changeClickedBtn, clickedBtn, setReservation, canReservation}) => {
   const [today, setToday] = useState<IToday | null>(null)
   const time = useRef<string[]>(['16:30', "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", ">"])


   useEffect(() => {
      const day = new Date()
      setToday({
         ...today,
         day: String(day.getDate()),
         month: String(day.getMonth() < 9 ? `0${day.getMonth() + 1}` : day.getMonth() + 1),
         year: String(day.getFullYear())
      })
   }, [])


   const onChangeState = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.currentTarget.textContent !== ">") {
         changeClickedBtn(e.currentTarget)
         e.currentTarget.style.background = "#50A0E0"
         e.currentTarget.style.color = "white"
      } else if (e.currentTarget.textContent === ">") return

      if (clickedBtn) {
         (clickedBtn as HTMLDivElement).style.background = "white";
         (clickedBtn as HTMLDivElement).style.color = "black";
      }
      handleState(2)
   }

   const onChangeReservationState = () => {
      setReservation(false)
   }


   const makeStyle = (e: string) => {
      return {
         background: clickedBtn && e === (clickedBtn as HTMLDivElement).textContent ? "#50A0E0" : "white",
         color: clickedBtn && e === (clickedBtn as HTMLDivElement).textContent ? "white" : "black",
      }
   }

   return (
      <DayTimeComp>
         <div className="time__header">
            <h2>{!reservation ? "날짜" : "진료 예약 및 시간"}</h2>
            {reservation && <span onClick={onChangeReservationState}>수정하기</span>}
         </div>
         {today &&
         <div className="today">
            {!reservation
               ? <span>{today.month} / {today.day} / {today.year}</span>
               : <div className="reservation-box">{today.year}년 {today.month}월 {today.day}일, {(clickedBtn as HTMLDivElement).textContent}</div>}
         </div>}
         <div className="time__header">
            <h2>시간</h2>
            {reservation && <span onClick={onChangeReservationState}>수정하기</span>}
         </div>
         {!reservation &&
         <div className="time__item-container">
            {canReservation ? time.current.map(e => (
               <div onClick={onChangeState} key={e} style={makeStyle(e)}>
                  <span>{e}</span>
               </div>
            )) : <div className="cant-reservation-slo">*진료 가능한 시간이 없습니다.</div>}
         </div>
         }
      </DayTimeComp>
   )
}
export default React.memo(DayTime)