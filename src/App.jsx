import './App.css'
import { Search } from './components/search/Search'
import { Title } from './components/title/title'
import { TodoList } from './components/todoList/todoList'

function App() {

  return (
    <>
      <div className='containerPage'>
        <Title/>
        <Search/>
        <TodoList/>
      </div>
    </>
  )
}

export default App
