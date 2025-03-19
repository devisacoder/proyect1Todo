import { ButtonRemoveTodo } from "../buttonRemoveTodo/buttonRemoveTodo"
import { CompleteTodo } from "../completeTodo/completeTodo"
import './todoList.css'
import { useTodo } from "../../hooks/useHooks"  

export const TodoList = () => {
    const { todos } = useTodo()

    return(
        <section className="containerTodoList">
            <ul className="containerListTask">
                {todos.map((todo) => (
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
