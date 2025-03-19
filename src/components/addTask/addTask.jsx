import { useState } from "react"
import "./addTask.css"
import { useTodo } from "../../hooks/useHooks"

export const AddTask = ({ onlyButton, onlyForm, open, setOpen }) => {
  const [task, setTask] = useState("")
  const { addTodo } = useTodo()

  const handleClick = () => {
    setOpen(prev => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!task.trim()) return

    const newTodo = {
      title: task,
      state: false,
    }

    console.log("Tarea agregada:", task)
    addTodo(newTodo)
    setTask("")
    setOpen(false)
  }
  

  if (onlyButton) {
    return (
      <img
        className="img-addTask"
        src="src/assets/addTodo.svg"
        alt="icono para aniadir tareas"
        onClick={handleClick}
      />
    )
  }

  if (onlyForm && open) {
    return (
      <form onSubmit={handleSubmit} className="containerForm">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    )
  }

  return null
}
