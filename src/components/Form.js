import React from 'react';
import '../App.css';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (inputText === '') {
            return null;
        }
        setTodos([
            ...todos,
            {
                text: inputText, completed: false, id: Math.random() * 1000
            }
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form className="form">
            <label className="form_label" htmlFor="todo">~ Today I need to ~</label>
            <input className="form_input" value={inputText} type="text" onChange={inputHandler} pattern="[a-zA-Z ]*$" />
            <button type="submit" onClick={submitHandler} className="todo_btn"><i className="fas fa-plus-square"></i></button>
            <span className="select">
                <select onChange={statusHandler} name="todos" className="filter_todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </span>
        </form>
    )
}

export default Form
