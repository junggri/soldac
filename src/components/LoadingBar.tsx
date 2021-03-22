import React, {ReactNode} from 'react'
import {LoadingBarComp} from "../styles";

interface ILoadingBar {
   children?: ReactNode
   state: number
   reservation: boolean
}

const LoadingBar: React.FC<ILoadingBar> = ({state, reservation}) => {

   return (
      <LoadingBarComp state={state} reservation={reservation}/>
   )
}
export default React.memo(LoadingBar)