import { useState } from "react";


function Comp15(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    let [count, setCount] = useState(0);
    console.log(count);

    function btnClick(){
        // count =  + 1
        // console.log(count)
        setCount(count + 1);
    }

    return(
        <>  

            <h1 style={myCss} align="center"> Component 15 </h1>            
            <button onClick={btnClick}> Click Me !</button> <br/>
            count : {count}
        </>
    );
}
export default Comp15;
