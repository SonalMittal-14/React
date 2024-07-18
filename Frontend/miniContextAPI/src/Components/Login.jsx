import React, {useState,useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault() // ye isliye hota hai hai jab by default jab hum value submit karte h toh value url ke through kahi n kahi chali jati h toh use prevent karnai ke lia use kiya hai 

        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder='username' />

        {"    "}

        <input type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login