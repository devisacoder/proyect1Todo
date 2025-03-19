import { ButtonRemoveTodo } from "../buttonRemoveTodo/buttonRemoveTodo"
import { CompleteTodo } from "../completeTodo/completeTodo"
import './todoList.css'
import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext.jsx"

export const TodoList = () => {
    const { todosFiltrados } = useContext(TodoContext)

    return(
        <section className="containerTodoList">
            <ul className="containerListTask">
                {todosFiltrados.map((todo) => (
                    <li className="containerLi" key={todo.id}> 
                        <button className="buttonCompleteTodo">
                            <CompleteTodo/>
                        </button>
                        <span className="todo-text">{todo.title}</span>
                        <button className="buttonRemoveTodo">
                            <ButtonRemoveTodo todo={todo.id}/>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}
