import React from 'react'
import Moment from 'moment';

// d="session-length" by default displays a value of 25.

const Session = ({
    sessionLength,
    incrementSessionLength,
    decrementSessionLength,
}) => {
    //5 minutes * 60 seconds = 300
 const sessionLengthInMinutes = Moment.duration(sessionLength, 's').asMinutes();

    return(<div>
            <p id="session-label">Session Length</p>
    <p id="session-length">{sessionLengthInMinutes}</p>
    <button id="session-decrement" onClick={decrementSessionLength}>-</button>
    <button id="session-increment" onClick={incrementSessionLength}>+</button>
  
   
        </div>
    )
}

export default Session