import { data } from "../Mockdata"
import {Link, useNavigate} from "react-router-dom"

const Catlist = () =>{
    console.log("Data", data)

    const navigate = useNavigate();

    const handleNavigation = (id, item) =>{
        navigate(`/cat-list${id}`,{state: {item}});
    }

    return(
        <div>
    <h3>Cat Listing</h3>
    {data.slice(1,2).map((item,index)=>{
        return(
            <div key ={item.id}>
                <h4>{index+1}</h4>
              <p>item's id:{item.id}</p>
              <img onClick={()=> handleNavigation(item.id, item)} 
              src={item.url} 
              alt={"catpicture"} width={500} height={600}/>
              <p>{item.title}</p>
              <p>{item.content}</p>
              
              
</div>
        )
    })}

    
        </div>
    )
}
export default Catlist;