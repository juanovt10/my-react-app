import React from 'react'

export default function NavBarChildChallenge(props) {
  return (
    <div>
        {
            props.isLoggedIn ? (
                ""
            ) :                 
            <form>
                <label>Usermame: </label>
                <input></input>
                <label>Password: </label>
                <input></input>
                <button onClick={props.handleClick}>{props.isLoggedIn ? 'logout' : 'Submit'}</button>
            </form>
        }
    </div>
  )
}
