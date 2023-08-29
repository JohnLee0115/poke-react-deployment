import React, { useState, useEffect } from 'react'
import './Feature.css'
import "nes.css/css/nes.min.css";
import FeedbackForm from '../components/FeedbackForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserList from '../components/UserList';


const Feature = () => {
    const [errors, setErrors] = useState([]);
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    const createUser = user => {
        axios.post('http://localhost:8001/api/users', user)
            .then(res => navigate('/'))
            .catch(err => {
                const errorResponse = err.response.data.errors;

                const errorArr = [];

                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }

    useEffect(() => {
        axios.get('http://localhost:8001/api/users')
            .then(res => {
                setUsers(res.data);
                console.log(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='bg2'>
            <div className='card'>
                <div>
                    <h1 className='title'>Pokemon Battle Simulator</h1>
                    <img className='image1' src='https://cdn.discordapp.com/attachments/763614696229044234/1144021751722946610/image.png' alt='pokemon_card' />
                    <div className='list'>
                        <div className="lists">
                            <ul className="list5">
                                <li>Creators: John Lee, Jin Koh</li>
                                <li>Version: Alpha v0.0.1</li>
                                <li>Updated: August 23, 2023</li>
                                <li className='git'>
                                    <i className="nes-icon github is-medium icon"></i>
                                    <a className='github' href='https://github.com/jkohh12/Poke-ShowDown'><p>Github Repo</p></a>
                                </li>
                                <li><a href='https://www.mediafire.com/file/n0q28hvws175zeh/PokemonBattleSimulator.zip/file'>Download Here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='featuress'>
                        <h2>Description: </h2>
                        <p>Pokemon Battle Simulator, inspired by Pokemon Showdown and original Pokemon Series.</p>
                    </div>
                    <div className='featuress'>
                        <h2>Features: </h2>
                        <div className="lists">
                            <ul className='features'>
                                <li>Random Pokemon Generation. (PokeAPI)</li>
                                <li>Random Moveset Generation. (PokeAPI)</li>
                                <li>Name Generation based off of Pokemon.</li>
                                <li>Fully Functioning Health Bar. (Changes Gradient Depending on Health Value)</li>
                                <li>Fully Animated Sprites for each Pokemon. (WIP)</li>
                                <li>Type Effectiveness and Damage calculations. (SuperEffective, NotEffective, NoEffect)</li>
                                <li>Move Miss/Speed Calculation.</li>
                                <li>Critical Damage Calculation.</li>
                                <li>SpAttack/PhysAttack distinction.</li>
                                <li>Functioning Dialogue Box, similar to dialogue box seen in Pokemon Series</li>
                                <li>Battle Music.</li>
                                <li>Low HP music.</li>
                                <li>Victory Music.</li>
                                <li>Super Effective/Not Effective/Normal Effective hit sound effects.</li>
                                <li>Move Selection with buttons.</li>
                                <li>Move Selection sounds.</li>
                                <li>Move Selection box has color displayed when hovering over move, as well as type displayed on the right.</li>
                                <li>Only Attack moves implemented so far.</li>
                            </ul>
                        </div>
                        <div className='featuress'>
                            <h2>Changelog v0.0.1 </h2>
                            <h3>Known Bugs: </h3>
                            <p>Ditto, Wynaut, and Wobbuffet cause errors due to no attacking moves</p>
                            <h3>Other: </h3>
                            <p>Initial website published</p>
                        </div>
                    </div>
                    <div className='featuress'>
                        <h2>Screenshots: </h2>
                        <div className='flex'>
                            <div className='flex2'>
                                <div><img className='screenshot' src='https://cdn.discordapp.com/attachments/763614696229044234/1144040385493090324/image.png' alt='screenshot 1'></img></div>
                                <div><img className='screenshot' src='https://cdn.discordapp.com/attachments/763614696229044234/1144040529542258688/image.png' alt='screenshot 2'></img></div>
                                <div><img className='screenshot' src='https://cdn.discordapp.com/attachments/763614696229044234/1144040677366300712/image.png' alt='screenshot 3'></img></div>
                                <div><img className='screenshot' src='https://cdn.discordapp.com/attachments/763614696229044234/1144040834371682324/image.png' alt='screenshot 4'></img></div>
                                <div><img className='screenshot' src='https://cdn.discordapp.com/attachments/763614696229044234/1144041182431813692/image.png' alt='screenshot 5'></img></div>
                            </div>
                        </div>
                    </div>
                    <div className='resources2'>
                        <h2>Resources Used</h2>
                        <ul className='list3'>
                            <li><a href="https://github.com/Velorexe/PKUnityInessentials/tree/master">All Pokemon Sprites (Front/Back)</a></li>
                            <li><a href="https://www.deviantart.com/pikachumazzinga/art/BLACK-2-AND-WHITE-2-UPPER-SCREEN-BATTLE-SYSTEM-RIP-381417457">Battle System Menu</a></li>
                            <li><a href=" https://pokeapi.co/">PokeAPI</a></li>
                            <li><a href='https://www.youtube.com/watch?v=_Yr5Taoyalo&t=5s'>Battle Music</a></li>
                            <li><a href=' https://reliccastle.com/resources/965/'>Battle UI</a></li>
                            <li><a href='https://nostalgic-css.github.io/NES.css/'>NESCSS</a></li>
                        </ul>
                    </div>
                    <h2>Comment Section: </h2>
                    <div className='flex'>
                        {loaded && <UserList users={users} />}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='form'>
                        <h2>Give Us Feedback!</h2>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <FeedbackForm onSubmitProp={createUser} initialComment="" initialRating="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature