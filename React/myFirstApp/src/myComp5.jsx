function Comp5(){

    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    }

    function myfun(){
        alert("Helooooooo........")
    }

    function myfun2(name){
        alert("Helooooooo........" + name)
    }

    

    return(
        <>  
            <h1 style={myCss} align="center">Component 5</h1>
            <button onClick={myfun} className="btn btn-warning">
                Click Me !
            </button>
            <button onClick={()=>{myfun2("Abhay Raj")}} className="btn btn-warning">
                Tell me Name 
            </button>
        </>
    )
}

export default Comp5