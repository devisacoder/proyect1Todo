import { ButtonRemoveTodo } from "../buttonRemoveTodo/buttonRemoveTodo"
import { CompleteTodo } from "../completeTodo/completeTodo"
import './todoList.css'

export const TodoList = () => {

    return(
        <section className="containerTodoList">
            <ul className="containerListTask">
                <li className="containerLi"> 
                    <button className="buttonCompleteTodo">
                        <CompleteTodo/>
                    </button>
                    <span className="todo-text">Lavar loza</span>
                    <button className="buttonRemoveTodo">
                        <ButtonRemoveTodo/>
                    </button>
                </li>
                <li className="containerLi"> 
                    <button className="buttonCompleteTodo">
                        <CompleteTodo/>
                    </button>
                    <span className="todo-text">Lavar loza</span>
                    <button className="buttonRemoveTodo">
                        <ButtonRemoveTodo/>
                    </button>
                </li>
                <li className="containerLi"> 
                    <button className="buttonCompleteTodo">
                        <CompleteTodo/>
                    </button>
                    <span className="todo-text">Lavar loza</span>
                    <button className="buttonRemoveTodo">
                        <ButtonRemoveTodo/>
                    </button>
                </li>
                <li className="containerLi"> 
                    <button className="buttonCompleteTodo">
                        <CompleteTodo/>
                    </button>
                    <span className="todo-text">Lavar loza</span>
                    <button className="buttonRemoveTodo">
                        <ButtonRemoveTodo/>
                    </button>
                </li>
                <li className="containerLi"> 
                    <button className="buttonCompleteTodo">
                        <CompleteTodo/>
                    </button>
                    <span className="todo-text">Lavar loza</span>
                    <button className="buttonRemoveTodo">
                        <ButtonRemoveTodo/>
                    </button>
                </li>
            </ul>
        </section>
    )
}