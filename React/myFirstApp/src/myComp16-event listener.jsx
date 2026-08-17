import { useState } from "react";


function Comp16(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };
    const productDetails = [
        {proID: 1012 , proName: "iMac" ,    proPrice: 899,  proQty:5},
        {proID: 1112 , proName: "Macbook" , proPrice: 1199, proQty:2},
        {proID: 3012 , proName: "iPad" ,    proPrice: 699,  proQty:10},
        {proID: 2012 , proName: "Earpods" , proPrice: 599,  proQty:25},
        {proID: 1412 , proName: "Charger" , proPrice: 199,  proQty:50},
    ];

    return(
        <>  

            <h1 style={myCss} align="center"> Component 16 </h1>            
            {/* <button onClick=> Click Me !</button> <br/> */}
            
        </>
    );
}
export default Comp16;
