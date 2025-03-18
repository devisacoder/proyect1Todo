import { ButtonRemoveTodo } from "../buttonRemoveTodo/buttonRemoveTodo"
import { CompleteTodo } from "../completeTodo/completeTodo"
import './todoList.css'

export const TodoList = () => {

    return(
        <section className="containerTodoList">
            <h1>Todo List</h1>
            <ul>
                <li className="containerLi"> 
                    <button className="buttonCompleteTodo">
                        <CompleteTodo/>
                    </button>
                    Lavar loza 
                    <button className="buttonRemoveTodo">
                        <ButtonRemoveTodo/>
                    </button>
                </li>
                <li className="containerLi"> 
                    <button className="buttonCompleteTodo">
                        <CompleteTodo/>
                    </button>
                    Lavar loza 
                    <button className="buttonRemoveTodo">
                        <ButtonRemoveTodo/>
                    </button>
                </li>
            </ul>
        </section>
    )
}