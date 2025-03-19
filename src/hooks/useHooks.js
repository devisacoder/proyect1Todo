import { useEffect } from "react"
import { useState } from "react"

export const useTodo = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const getTodo = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            const data = await response.json()
            setTodos(data)
        }
        getTodo()
    }, [])

    const addTodo = async (newTodo) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        });

        const data = await response.json()
        setTodos((prev) => [data, ...prev])
    }

    const deleteTodo = async (id) => {
        await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE"
        })

        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
    return{ todos, addTodo, deleteTodo}
}