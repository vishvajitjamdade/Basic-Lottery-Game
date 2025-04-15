import { useState } from 'react'

import './App.css'
import Lottery from './Lottery'
import {sum} from './helperFun'

function App() {
  // const [count, setCount] = useState(0)

  let winnigCon = (ticket) => {
      return sum(ticket) === 15;
  };

  return (
    <>
      <Lottery n={3} winnigCon={winnigCon}/>
      {/* <Ticket ticket={[0,1,2]}/> */}
    </>
  )
}

export default App
