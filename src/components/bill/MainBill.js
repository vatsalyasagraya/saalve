import React from 'react'
import Bill from './Bill';
function MainBill({cartItems}) {
    function createBill(datas){
        return(
            <div style={{display:"grid",justifyItems:"center" }}>
                <Bill name={datas.name} image={datas.image} price={datas.price} quantity={datas.quantity}/>
                <hr style={{background:"#4DA943" ,width:"80vw",height:"1.5px", marginTop:"3rem" , borderRadius:"10px"}}/>
             </div>
            );
      }
  return (
    <div style={{display:"grid",gap:"1rem",margin:"2rem"}}>
      {cartItems.map(createBill)}
    </div>
  )
}

export default MainBill
