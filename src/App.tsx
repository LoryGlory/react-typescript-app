import Todos from "./components/Todos";
import NewTodo from "./components/NewTodos";
import TodosContextProvider from "./store/todos-context";

function App() {
    return (
        <TodosContextProvider>
            <NewTodo/>
            <Todos/>
        </TodosContextProvider>
    )
}

export default App;
