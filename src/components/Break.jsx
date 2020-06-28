import React from 'react'
import Moment from 'moment';

// d="session-length" by default displays a value of 25.

const Break = ({
    breakLength,
    incrementBreakLength,
    decrementBreakLength,
}) => {
    //5 minutes * 60 seconds = 300
 const breakLengthInMinutes = Moment.duration(breakLength, 's').asMinutes();

 console.log(breakLengthInMinutes)
    return(<div>
    <p id="break-label">Break Length</p>
    <p id="break-length">{breakLengthInMinutes}</p>
    <button id="break-decrement" onClick={decrementBreakLength}>-</button>
    <button id="break-increment" onClick={incrementBreakLength}>+</button>
  
   
        </div>
    )
}

export default Break