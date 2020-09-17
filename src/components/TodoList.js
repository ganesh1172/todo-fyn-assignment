import React from 'react';
import Todo from '../components/Todo';

const TodoList = ({ todos }) => {
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} text={todo.text} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
