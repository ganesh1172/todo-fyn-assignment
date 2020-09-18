import React from 'react';
import Todo from '../components/Todo';
import '../App.css';

const TodoList = ({ todos, setTodos, filtered }) => {
    return (
        <div className="todo_container">
            <ul className="todo_list">
                {filtered.map(todo => (
                    <Todo key={todo.id} text={todo.text}
                        todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
