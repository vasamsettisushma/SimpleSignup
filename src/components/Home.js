import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

            <h1>Heyy {location.state.id} Project is on the way....</h1>

        </div>
    )
}

export default Home