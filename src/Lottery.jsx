import { useState } from "react";
import "./Lottery.css"
import { genTicket, sum } from "./helperFun";
import Ticket from "./Ticket";

export default function Lottery({n, winnigCon}){
    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = winnigCon(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <div className="Ticket">
                <p>Ticket</p>
                <Ticket ticket={ticket}/>
            </div>
            <h3>{isWinning && "Conratulations, you won!"}</h3>
            <br />
            <button onClick={buyTicket}>generate ticket</button>
        </div>
    )
}