import { useState } from 'react'
import { first151Pokemon, getFullPokedexNumber } from '../utils'

export default function SideNav(props){
    const { selectedPokemon, setSelectedPokemon } = props

    const [ searchValue, setSearchValue] = useState('')

    const filteredPokemon = first151Pokemon.filter((ele , eleIndex) => {
        if (toString(getFullPokedexNumber(eleIndex)).includes(searchValue)) { return true }
        if ( ele.toLowerCase().includes(searchValue.toLowerCase())) { return true }

        return false
    })

    return(
    <nav>
        <div className={'header'}>
            <h1 className='text-gradient'>PokéDex</h1>
        </div>
        <input value={searchValue} onChange={(e) => {
            setSearchValue(e.target.value)
        }}/>
        {filteredPokemon.map((pokemon, pokemonIndex)=>{
            return (
                <button onClick={() => {
                    setSelectedPokemon(pokemonIndex)
                }} 
                key={pokemon} className={'nav-card '+(pokemonIndex === selectedPokemon ? 'nav-card-selected ': ' ')}>
                    <p>{getFullPokedexNumber(first151Pokemon.indexOf(pokemon))}</p>
                    <p>{pokemon}</p>
                </button>
            )
        })}
    </nav>
    )
}