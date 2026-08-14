function ChildComponent({children,name,age})
{
    // console.log(props);
    return(<>
        <h3 align="center">Child Component</h3>
        {name}
        {children}
    </>
    )
}
function Comp10(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    return(
        <>  
            <h1 style={myCss} align="center">Component 10</h1>
            <ChildComponent age = {34} name = {"Virat"} >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique!
                    <button>Button</button>
                </p>
            </ChildComponent>
            
                        
        </>
    );
}
export default Comp10
