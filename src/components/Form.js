import React from 'react'

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText, completed: false, id: Math.random() * 1000
            }
        ]);
        setInputText("");
    }
    return (
        <form>
            <input value={inputText} type="text" onChange={inputHandler} />
            <button type="submit" onClick={submitHandler}>Add</button>{' '}
            <select name="todos">
                <option value="all">All</option>
                <option value="Completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </form>
    )
}

export default Form
