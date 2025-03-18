import { useState } from 'react'
import { AddTask } from '../addTask/addTask'
import './Search.css'

export const Search = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className='search-wrapper'>
      <div className='container-search-group'>
        <div className='input-and-form'>
          <div className='container-search'>
            <input 
              type="text" 
              placeholder="Buscar"
              className='input-search'
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
