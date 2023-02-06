// Todos component that renders TodoItems
import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import {TodosContext} from "../store/todos-context";

const Todos: React.FC = (props) => {
    // use context to get data
    const todosCtx = useContext(TodosContext);

    return (
        // display Todos by mapping context data and mapping new array with keys and IDs
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}/>
            ))}
        </ul>
    )
}

export default Todos;