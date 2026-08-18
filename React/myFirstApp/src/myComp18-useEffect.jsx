import { useEffect, useState } from "react";


function Comp18(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(()=>{
        console.log("Use Effects...");
    },[count2]); //adding dependency array so the us effect will not re-render

    return(
        <>  
            <h1 style={myCss} align="center"> Component 18 </h1>            
            <div 
                style={{
                    border:"2px solid red",
                    padding:"20px",
                    marginBottom:"30px"}}>
                <h3>Count-1 : {count1} </h3>
            <button onClick={()=> setCount1(count1 + 1)}> Button 1 </button>
            </div>
            <div 
                style={{
                    border:"2px solid red",
                    padding:"20px",
                    marginBottom:"30px"}}>
                <h3>Count-2 : {count2} </h3>
            <button onClick={()=> setCount2(count2 + 1)}> Button 1 </button>
            </div>            
        </>
    );
}
export default Comp18;
