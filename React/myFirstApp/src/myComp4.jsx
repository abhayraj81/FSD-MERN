function Comp4(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    }

    return(
        <>
            <h1 style={myCss} align="center">Component 4</h1>
            <p style={{backgroundColor:"red",
                       color:"white",
                       textAlign:"center",
                       fontSize:"x-large",
                       padding:"20px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nulla?
            </p>
            <p className="alert alert-danger">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, nobis.
            </p>
        </>
    )
}

export default Comp4