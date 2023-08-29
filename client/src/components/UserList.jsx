import React from 'react'
import "nes.css/css/nes.min.css";

const UserList = (props) => {
    return (
        <div className=''>
            <table className='' >
                <tr>
                    <th><h3>Ratings</h3></th>
                    <th><h3>Comments</h3></th>
                </tr>
            {props.users.map( (user, i) => {
            return <tr>
                        <td>{user.rating}</td>
                        <td key={i} >{user.comment}</td>
                    </tr>
            } )}
            </table>
        </div>
    )
}

export default UserList