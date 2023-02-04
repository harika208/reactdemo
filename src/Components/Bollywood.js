import React from 'react'

import { data } from "../Mockdata"
import { useNavigate} from "react-router-dom"

function Bollywood() {
  const navigate = useNavigate();
 
const handleNavigation = (id, item) =>{
        navigate(`/bollywood${id}`,{state: {item}});
    }
  
  return (
    <>
    <div>Bollywood
      {/* <button onClick={technology}>gototechnology</button>
      <button onClick={()=>{
        navigate(-1)
      }}>go back</button> // this will go back to its previous page */}

      
    </div>

<div>
<h3>Cat Listing</h3>
{data.slice(1,2).map((item,index)=>{
    return(
        <div key ={item.id}>
            <h4>{index+1}</h4>
          <p>item's id:{item.id}</p>
          <img onClick={()=> handleNavigation(item.id, item)} 
          src={item.urlToImage} 
          alt={"catpicture"} width={500} height={600}/>
          <a href={item.url}>clickme</a>
          <p>{item.title}</p>
          <p>{item.content}</p>
          
          
</div>
    )
})}


    </div></>
  )
}

export default Bollywood;