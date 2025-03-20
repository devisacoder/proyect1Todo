import { ButtonRemoveTodo } from "../buttonRemoveTodo/buttonRemoveTodo"
import { CompleteTodo } from "../completeTodo/completeTodo"
import './todoList.css'
import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext.jsx"
import { InProgress } from "../inProgress/inProgress.jsx"

export const TodoList = () => {
    const { todosFiltrados } = useContext(TodoContext)

    return(
        <section className="containerTodoList">
            <ul className="containerListTask">
                {todosFiltrados.map((todo) => (
                    <li className="containerLi" key={todo.id}> 
                        {todo.title}
                        <div>
                            <button className="buttonCompleteTodo">
                                <CompleteTodo todo={todo}/>
                            </button>
                            <button className="buttonRemoveTodo">
                                <ButtonRemoveTodo todo={todo}/>
                            </button>
                            <button className="buttonInProgress">
                                <InProgress todo={todo}/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}
