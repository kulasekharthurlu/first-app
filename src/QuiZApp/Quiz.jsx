import React, { useState } from 'react';
import QuizQuations from './QuizQuations.json';
import Disply from './Disply';

const Quiz = () => {

    let tempMarks = []
    const [marks, setMarks] = useState([]);
    const changeHandler = (value, index) => {
        tempMarks = marks;
        tempMarks[index] = value;
        setMarks([...tempMarks]);
    }
    return (
        <div>
            {QuizQuations.map((question, index) => {
                return (
                    <Disply question={question} index={index} changeHandler={changeHandler} />
                )
            })}
            <button onClick={() => alert(marks.reduce((a, b) => a + b, 0) + "/10")}>EndQuiz</button>
        </div>
    )
}
export default Quiz
