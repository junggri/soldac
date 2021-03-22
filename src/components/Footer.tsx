import React, {useEffect, useRef, useState} from 'react'
import {FooterComp} from "../styles";

interface IFooter {
   state: number
   handleState: (state: number) => void
   setReservation: (state: boolean) => void
   reservation: boolean
}

const Footer: React.FC<IFooter> = ({state, handleState, setReservation, reservation}) => {
   const inputRef = useRef<HTMLTextAreaElement>(null)
   const btnRef = useRef<HTMLButtonElement>(null)
   const [value, setValue] = useState<string>("")

   useEffect(() => {
      if (state > 1 && inputRef.current && btnRef.current) {
         btnRef.current.style.display = "block"
      }
   }, [state])

   const onChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (inputRef.current) {
         inputRef.current.style.background = "white"
         inputRef.current.style.border = "1px solid rgba(0,0,0,0.2)"
      }
      setValue(e.target.value)
      handleState(3)
   }

   const onClickBtn = () => {
      if (btnRef.current) btnRef.current.textContent = "확인"
      handleState(3)
      setReservation(true)
   }

   return (
      <FooterComp>
         <h2>추가 사항(옵션)</h2>
         <div className="textarea-box">
         <textarea placeholder="평소 앓고 있던 질병, 또는 초방전 솔닥 닥터가 알아야 할 내용이 있다면 여기에 적어주세요."
                   value={value}
                   onChange={onChangeValue}
                   ref={inputRef}
                   readOnly={state < 2 || reservation}
                   maxLength={120}
         />
            {state === 3 && !reservation &&
            <div className="show-text-lengthBox">
               {value.length} / 120 byte
            </div>
            }
         </div>
         <button ref={btnRef} onClick={onClickBtn}>예약</button>
      </FooterComp>
   )
}
export default React.memo(Footer)