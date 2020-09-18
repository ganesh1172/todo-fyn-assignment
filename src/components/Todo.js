import React from 'react';
import '../App.css';

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo_item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete_btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash_btn" onClick={deleteHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo;
