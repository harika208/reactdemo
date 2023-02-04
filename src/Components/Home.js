import React from "react"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
       <li> <Link to={"./home"}>Homething</Link> </li>
       <li> <Link to={'./bollywood'}>bollywood</Link>  </li>
        </ul>
    </div>
  )
}

export default Home;
