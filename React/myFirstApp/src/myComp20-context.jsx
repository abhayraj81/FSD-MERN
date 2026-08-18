// 1. Create Context
// 2. Provide Context (with Values)
// 3. Use Context (Consume Context)



import { createContext, useContext, useEffect, useState } from "react";

// 1. Create a Context
const MyContext = createContext()

function Comp20(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    const userName = "Abhay Raj";
    const userAge = 23;
   

    return(
        <>  
            <h1 style={myCss} align="center"> Component 19 </h1>  

            {/* 2. Provide a Context with Value           */}
            <MyContext.Provider value={{userName , userAge}}>
                <CompA/>
            </MyContext.Provider>      
                    
        </>
    );
}
function CompA(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

   

    return(
        <>  
            <h1 style={myCss} align="center"> Component A </h1>            
             <CompB />      
        </>
    );
}
function CompB(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

   

    return(
        <>  
            <h1 style={myCss} align="center"> Component B </h1>            
             <CompC />      
                     
        </>
    );
}
function CompC(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

   
    // const {userName,userAge} = useContext(MyContext)
    const r = useContext(MyContext)

    return(
        <>  
            <h1 style={myCss} align="center"> Component C </h1>            
             <h4 align="center"> {r.userName} {r.userAge} </h4>       
        </>
    );
}


export default Comp20;
