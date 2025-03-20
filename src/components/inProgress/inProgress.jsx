import { useContext } from "react"
import { TodoContext } from "../../context/TodoContext"
import "./inProgress.css"

export const InProgress = ({ todo }) => {
    const { updateTodoStatus } = useContext(TodoContext)

    const isCompleted = todo.state === "COMPLETADA"
    const isInProgress = todo.state === "EN_PROCESO"

    const handleClick = () => {
        if (isCompleted) return

        const newState = isInProgress ? "PENDIENTE" : "EN_PROCESO"
        updateTodoStatus(todo.id, newState)
    }

    const iconSrc = isInProgress
        ? "src/assets/inProgress.svg"
        : "src/assets/backToPending.svg"

    const iconAlt = isInProgress
        ? "Marcar como en proceso"
        : "Volver a pendiente"

    return (
        <img 
            src={iconSrc}
            alt={iconAlt}
            className={`img-inProgress ${isCompleted ? "disabled" : ""}`}
            onClick={handleClick}
            style={{
                cursor: isCompleted ? "not-allowed" : "pointer",
                opacity: isCompleted ? 0.5 : 1
            }}
        />
    )
}
