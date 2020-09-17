import React from 'react';
import Todo from '../components/Todo';

const TodoList = ({ todos, setTodos, filtered }) => {
    return (
        <div>
            <ul>
                {filtered.map(todo => (
                    <Todo key={todo.id} text={todo.text}
                        todo={todo} todos={todos} setTodos={setTodos} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
