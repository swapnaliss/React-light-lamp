import React, { useState } from 'react';
import '../App.css';


export default function Light(props) {
    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);

    const Light1 = () => {
        setBtn1(!btn1)

        if (!btn1) {
            document.querySelector(".bulb1").style.backgroundColor = "orange"
        } else {
            document.querySelector(".bulb1").style.backgroundColor = "grey"
        }

    }

    const Light2 = () => {
        setBtn2(!btn2)

        if (!btn2) {
            document.querySelector(".bulb2").style.backgroundColor = "orange"
        } else {
            document.querySelector(".bulb2").style.backgroundColor = "grey"
        }

    }

    return (
        <div className='container'> 
            <div className='div1'>
                <div className='bulb1'> </div>
                <div>
                    <button className='btn' onClick={Light1}>{btn1 ? 'OFF' : "ON"}</button>
                </div>
            </div>

            <div className='div1'>
                <div className='bulb2'> </div>
                <div>
                    <button className='btn' onClick={Light2}>{btn2 ? 'OFF' : "ON"}</button>
                </div>
            </div>
        </div>
    );
}

