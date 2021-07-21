import React, {useState, useEffect} from 'react'
import './confirm.css'
import store from '../redux/store'



const Timer = (props) => {

    // access state from redux store
    let time = store.getState().drink.time


    // declaring initial values to display timer
    const {initialMinute = time} = props;
    
    // usestate to change text make counter reach 0
    const [ready, setReady] = useState(false)

    // set minutes to redux "time" state 
    const [minutes, setMinutes] = useState(initialMinute);

    // effect & interval to countdown minutes
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (minutes > 0) {
                setMinutes(store.getState().drink.time);
            }
            // change text when counter is at 0
            if (minutes === 0) {
                setReady(true)
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });
    




    return(
        
        <div>
        {ready ? <p className="timer">Din kopp har anlänt</p> 
        :
        <p className="timer">{minutes} minuter</p>
        }
        
        </div>
        
    )
}





export default Timer

