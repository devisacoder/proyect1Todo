import { useContext, useState } from 'react'
import { AddTask } from '../addTask/addTask'
import './Search.css'
import { TodoContext } from '../../context/TodoContext'

export const Search = () => {
  const [open, setOpen] = useState(false)
  const { busqueda, setBusqueda } = useContext(TodoContext)

  return (
    <section className='search-wrapper'>
      <div className='container-search-group'>
        <div className='input-and-form'>
          <div className='container-search'>
            <input 
              type="text" 
              placeholder="Buscar"
              className='input-search'
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <button aria-label='boton para buscar productos' className='button-input'>
              <img className='img-search' src="src/assets/search.svg" alt="" />
            </button>
          </div>
          {open && (
            <AddTask onlyForm open={open} setOpen={setOpen} />
          )}
        </div>
        <AddTask onlyButton open={open} setOpen={setOpen} />
      </div>
    </section>
  )
}
