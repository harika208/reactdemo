import { useParams } from "react-router-dom";
import {useState, useEffect} from "react"

const CatDetails = () =>{
const params = useParams();
console.log(params);
const [catData,setCatData] = useState({});


    return(
<div>
    Catdetails
</div>
    )
}
export default CatDetails;