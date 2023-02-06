// Todo Item component for each todo
import React from "react";
import classes from "./TodoItem.module.css";

// main function is a functional component; merge object containing todo text and remove todo function to props  ->
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {

    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
}

export default TodoItem;