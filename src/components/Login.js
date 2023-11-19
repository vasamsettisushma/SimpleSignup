import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Login.css'

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
      <div>
      <h2>Login</h2>

      <form  action="POST">
      <div className="form-group">

    
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => { setEmail(e.target.value) }} 
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }} 
          placeholder="Password"
          required
        />
      </div>

      <div className="form-group">
        <input type="submit" onClick={submit} />
      </div>

      </form>
      <div className="form-group">
        <button>
        <Link to="/signup">Signup Page</Link>
        </button>
      </div>
    </div>
    )
}

export default Login