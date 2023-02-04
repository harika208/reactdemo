
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Bollywood from "../Components/Bollywood"
import Technology from "../Components/Technology"
import Catlist from "../Components/Catlist"
import CatDetails from "../Components/CatDetails"

 const RouterComponent = () => {
  return (
    <BrowserRouter>
     <Routes>
         <Route path="/" element ={<Home/>}/>
         <Route path="/bollywood" element ={<Bollywood/>}/>
         <Route path="/technology" element ={<Technology/>}/>
         <Route path="/cat-list" element ={<Catlist/>}/>
         <Route path="/bollywood/:catId" element ={<CatDetails/>}/>

     </Routes>
    </BrowserRouter>
 
  )
}

export default RouterComponent;