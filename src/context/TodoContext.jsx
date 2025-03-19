import { 
  createContext, 
  useEffect, 
  useState 
} from "react"

const API = "http://alb-1-1267904391.us-east-1.elb.amazonaws.com/task"

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [busqueda, setBusqueda ] = useState('')

  const todosFiltrados = todos.filter(todo => 
    todo.title.toLowerCase().includes(busqueda.toLowerCase())
  )

  const fetchTodos = async () => {
    try {
      const res = await fetch(API)
      const data = await res.json()
      setTodos(data)
    } catch (error) {
      console.error("Error al obtener tareas:", error)
    }
  }

  const addTodo = async (newTodo) => {
    try {
      await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      })
      await fetchTodos()
    } catch (error) {
      console.error("Error al agregar tarea:", error)
    }
  }

  const deleteTodo = async (id) => {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" })
      await fetchTodos()
    } catch (error) {
      console.error("Error al eliminar tarea:", error)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <TodoContext.Provider value={{ 
      todos,
      addTodo,
      deleteTodo,
      busqueda,
      setBusqueda,
      todosFiltrados
    }}>
      {children}
    </TodoContext.Provider>
  )
}
