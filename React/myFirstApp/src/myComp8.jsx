function Logout(){
    return(
        <>
            <h1 align="center">
                Logged Out Successfully
            </h1>
        </>
    );
}

function Login(){
    return(
        <>
            <h1 align="center">
                User Login Succesfully
            </h1>
        </>
    );
}

function Comp8(){

    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    }
    let isLoggedIn = false    
        let arr = ["Abhay","Anshika","Anmol"]
    return(
        <>  
            <h1 style={myCss} align="center">Component 8</h1>
            
            {arr.map((ele)=><p>{ele}</p>)}

            {
            isLoggedIn ? <h2>Welcom User</h2> : <h2>Please Login</h2>
            }
            
            {
            isLoggedIn ? <button>Logout</button> : <button>Login</button>
            }            
        </>
    )
}
export default Comp8
