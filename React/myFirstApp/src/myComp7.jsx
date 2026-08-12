function Logout(){
    return(
        <>
            <h1 align="center">
                
            </h1>
        </>
    );
}

function Login(){
    return(
        <>
            <h1 align="center">
                
            </h1>
        </>
    );
}

function Comp7(){

    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    }

    let isLoggedIn = false  
    
    return(
        <>  
            <h1 style={myCss} align="center">Component 7</h1>
            {
            isLoggedIn ? <h2>Welcom User</h2> : <h2>Please Login</h2>
            }
            
            {
            isLoggedIn ? <button>Logout</button> : <button>Login</button>
            }
            

        </>
    )
}

export default Comp7
