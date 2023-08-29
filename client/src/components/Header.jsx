import React from 'react'
import'./header.css'
import "nes.css/css/nes.min.css";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    return (
        <div >
            <div>
            <div className='flex header'>
                <div className='left'><img src="https://cdn.discordapp.com/attachments/763614696229044234/1142648693611315210/ezgif-3-cc7ec6edc1.png" alt="" /></div>
                <div className='pokefont flex'>
                    <p className='white'>POKE PROJECT</p>
                </div>
                <div className='right'><img src="https://cdn.discordapp.com/attachments/763614696229044234/1142648693347057664/ezgif-3-b7375225ff.png" alt="" /></div>
                <div className='flexgit'>
                    <div className='git'>
                        <a href='https://www.linkedin.com/in/john-lee-6b2b31275/'><i className="nes-icon linkedin is-medium"></i></a>
                        <a href='https://github.com/JohnLee0115'><i className="nes-icon github is-medium"></i></a>
                        <p className='name'>  John</p>
                    </div>
                </div>
                <div className='flexgit2'>
                    <div className='git'>
                        <a href='https://www.linkedin.com/in/jin-koh-a7687424a/'><i className="nes-icon linkedin is-medium"></i></a>
                        <a href='https://github.com/jkohh12'><i className="nes-icon github is-medium"></i></a>
                        <p className='name'>  Jin</p>
                    </div>
                </div>
            </div>
            </div>

            <div className='flex taskbar1'>
                <div className='taskbar links'>
                    <Link to={'/'}>Features</Link>
                    <Link to={'/pokemon'}>Usable Pokemon</Link>
                    <Link to={'/moves'}>Usable Moves</Link>
                    <Link to={'https://www.mediafire.com/file/n0q28hvws175zeh/PokemonBattleSimulator.zip/file'}><button>Download!</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Header