import React from 'react'

const Todo = ({ text }) => {
    return (
        <div>
            <li>{text}</li>
            <button>check</button>
            <button>trash</button>
        </div>
    )
}

export default Todo;
