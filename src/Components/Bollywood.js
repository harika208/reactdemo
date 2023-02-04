import React from 'react'
import {useNavigate} from "react-router-dom"

function Bollywood() {
  const navigate = useNavigate();
  
  function technology(){
       navigate("/Technology")
  }
  return (
    
    <div>Bollywood
      <button onClick={technology}>gototechnology</button>
      <button onClick={()=>{
        navigate(-1)
      }}>go back</button> // this will go back to its previous page

      
    </div>
  )
}

export default Bollywood;