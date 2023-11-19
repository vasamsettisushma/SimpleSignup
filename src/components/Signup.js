import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './Login.css'

function Signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
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

      <div className="login">
        <h2>Signup</h2>

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
          <Link to="/">Login Page</Link>
          </button>
        </div>
      </div>
        
    )
}

export default Signup