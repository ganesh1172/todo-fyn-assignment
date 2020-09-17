import React from 'react'

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
        <div>
            <li>{text}</li>
            <button onClick={completeHandler}>check</button>
            <button onClick={deleteHandler}>trash</button>
        </div>
    )
}

export default Todo;
