import React from 'react'

const Disply = ({ question, index, changeHandler }) => {

    const handler = e => {
        let temp = question.answer === e.target.value ? 1 : 0;
        changeHandler(temp, index);
    }

    return (
        <div>
            <h4>{question.title}</h4>
            <div onChange={handler}>
                <input type="radio" value="A" name={index} /> {question.option[0]} &nbsp;
                <input type="radio" value="B" name={index} /> {question.option[1]} &nbsp;
                <input type="radio" value="C" name={index} /> {question.option[2]} &nbsp;
                <input type="radio" value="D" name={index} /> {question.option[3]} &nbsp;
            </div>
        </div>
    )
}

export default Disply
