import './Search.css'

export const Search = () => {
    
    return (
        <div className='search-wrapper'>
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
        </div>
    )
}