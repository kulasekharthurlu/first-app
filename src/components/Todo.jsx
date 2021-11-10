// @flow strict
import React, { useState } from 'react'

import * as react from 'react';

import TodoList from './TodoList';


function Todo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const changehandler = e => {
        setTask(e.target.value)
    }
    const submitHandler = e => {

        e.preventDefault();
        const newTodos = [...todos, task];
        setTodos(newTodos)
        setTask("");

    }
    const deleteHandler = (indexValue) => {
        const newTodos = todos.filter((todo, index) => index !== indexValue);
        setTodos(newTodos);
    }
    return (
        <div>
            <center>
                <div className='card'>
                    <div className='card-body' >
                        <h5 className="card-title">Todo management Application</h5>
                        <form onSubmit={submitHandler}>
                            <input type="text" name="task" value={task} onChange={changehandler} /> &nbsp;&nbsp;
                            <input type="submit" value=" add" name=" Add" />
                        </form>
                        <TodoList todolist={todos} deleteHandler={deleteHandler} />
                    </div>
                </div>
            </center>
        </div>
    );
};

export default Todo;