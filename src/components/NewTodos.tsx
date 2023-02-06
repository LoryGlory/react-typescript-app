// New Todo form component with useRef hooks
import React, {useRef, useContext} from "react";
import classes from './NewTodo.module.css';
import todosContext, {TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {
    // use context to get data
    const todosCtx = useContext(TodosContext);

    // adding HTML interface as type to input field with default value null
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    // handler for new todo form, using addTodo function to add to context
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // adding ! to because there will never be a non-null value
        const enteredText = todoTextInputRef.current!.value;

        // basic input field validity
        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        // add todo to context
        todosCtx.addTodo(enteredText);
    };

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'></label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;