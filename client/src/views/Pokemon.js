import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "nes.css/css/nes.min.css";
import './Feature.css'

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    let plist =[];

    useEffect(() => { 
        (async () => {
            for(let i = 1; i < 650; i++) {
                await axios.get('https://pokeapi.co/api/v2/pokemon/' + i)
                .then(response => {
                    console.log(response.data.id);
                    let temp = response.data.id;
                    if(i === temp) {
                        plist.push(response.data);
                        setPokemonList(plist);
                    }
                    if (i === 649) {
                        setLoaded(true);
                    }
                    })
                .catch(err => console.error(err));
            }
        } )
        ();

        return () => {

        };
    }, []);

    return (
        <div className='flex bg'>
            <div className='flex3 cont'>
                <div className="poketable">
                    <div className='flex4'>
                        <h1>USABLE POKEMON</h1>
                    </div>
                    <table className="">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>SPRITE</th>
                                <th>NAME</th>
                                <th>TYPE</th>
                                <th>TOTAL</th>
                                <th>HP</th>
                                <th>ATK</th>
                                <th>DEF</th>
                                <th>SP. ATK</th>
                                <th>SP. DEF</th>
                                <th>SPEED</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loaded && pokemonList.map((pokemon, i) => {
                                return <tr key={i}>
                                            <td>{pokemon.id}</td>
                                            <td><img src={pokemon.sprites.front_default} alt='pokerman'/></td>
                                            <td>{pokemon.name.toUpperCase()}</td>
                                            <td>{(pokemon.types[1] != null) ? pokemon.types[0].type.name.toUpperCase() + ", " + pokemon.types[1].type.name.toUpperCase() : pokemon.types[0].type.name.toUpperCase()}</td>
                                            <td>{pokemon.stats[0].base_stat + pokemon.stats[1].base_stat + pokemon.stats[2].base_stat + pokemon.stats[3].base_stat + pokemon.stats[4].base_stat + pokemon.stats[5].base_stat}</td>
                                            <td>{pokemon.stats[0].base_stat}</td>
                                            <td>{pokemon.stats[1].base_stat}</td>
                                            <td>{pokemon.stats[2].base_stat}</td>
                                            <td>{pokemon.stats[3].base_stat}</td>
                                            <td>{pokemon.stats[4].base_stat}</td>
                                            <td>{pokemon.stats[5].base_stat}</td>
                            </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pokemon