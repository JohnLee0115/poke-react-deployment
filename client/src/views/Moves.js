import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "nes.css/css/nes.min.css";
import './Feature.css'

const Moves = () => {
    const [moveList, setMoveList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    let mlist = [];

    useEffect(() => { 
        (async () => {
            for(let i = 1; i < 900; i++) {
                await axios.get('https://pokeapi.co/api/v2/move/' + i)
                .then(response => {
                    let temp = response.data.id;
                    if (i === 899) {
                        setLoaded(true);
                    }
                    if(i === temp) {
                        if(response.data.power != null && response.data.power != 0) {
                            mlist.push(response.data);
                            setMoveList(mlist);
                        }
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
        <div className='bg3 flex'>
            <div className='cont2'>
                <h2 className='white'>Usable Moves List</h2>
                <div className='flex'>
                    <div className="">
                        <table className="white tab">
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>  TYPE</th>
                                    <th>  CATEGORY</th>
                                    <th>  POWER</th>
                                    <th>  ACCURACY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loaded && moveList.map((move, i) => {
                                    return <tr key={i}>
                                                <td>{move.name.toUpperCase()}</td>
                                                <td>{move.type.name.toUpperCase()}</td>
                                                <td>{move.damage_class.name.toUpperCase()}</td>
                                                <td>{move.power}</td>
                                                <td>{move.accuracy}</td>
                                </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moves