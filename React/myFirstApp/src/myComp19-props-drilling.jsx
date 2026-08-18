import { useEffect, useState } from "react";

// props drilling
function Comp19(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    const userName = "Abhay Raj";
   

    return(
        <>  
            <h1 style={myCss} align="center"> Component 19 </h1>            
            <CompA userName = {userName}/>      
                     
        </>
    );
}
function CompA({userName}){
    
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
             <CompB userName = {userName}/>      
        </>
    );
}
function CompB({userName}){
    
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
             <CompC userName = {userName}/>      
                     
        </>
    );
}
function CompC({userName}){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

   

    return(
        <>  
            <h1 style={myCss} align="center"> Component C </h1>            
             <h3 align="center">{userName}</h3>       
        </>
    );
}


export default Comp19;
