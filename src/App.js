import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [sweet,setsweet] = useState([
      { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zXbc_x28F_BHbnjSQ403H-NhIVYvLeuIJg&usqp=CAU", name:"Crêpes Nutella", price:"8DT" },
      { img:"https://partagestesrecettes.fr/wp-content/uploads/2019/02/Capture-d%E2%80%99%C3%A9cran-2019-02-28-%C3%A0-11.06.29.png", name:"Crêpes Salé", price:"7DT" },
      { img:"https://liliebakery.fr/wp-content/uploads/2021/03/Recette-donuts-Lilie-Bakery-500x375.jpg", name:"Donuts", price:"8DT" },
      { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRiQWbv_qPCfp5sb40kPFHcWObhwYyZpYrg&usqp=CAU", name:"CheeseCake", price:"9DT" }
  ])

  const [show, setshow] = useState(false)
  return (
    <div>
      
      <button className='btn' onClick={()=>setshow(!show)}>Click Here to Show Shopping Card</button>
      {show? <div className='container'>
    <h1 style={{color:'red'}}>Sweets&Snacks Shop</h1>
    
    {sweet.map((el)=><div className='photo'>
      <img src={el.img} />
      <h1> {el.name} </h1>
      <h1> {el.price} </h1>
    </div>
    )}

     </div>:null }
     
     
     
     </div>
) ;
}

export default App;
