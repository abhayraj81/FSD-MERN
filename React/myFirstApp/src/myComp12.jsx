import {Routes, Route} from 'react-router-dom'
import Comp1 from './myComp01-basic-component';
import Comp2 from './myComp02-component-with-text';
import ShowDetails from './myComp13';



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
function Comp12(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    return(
        <>  
        <Routes>
            <Route path = '/' element = {<Comp1/>} />
            <Route path = '/home' element = {<Comp2/>} />
            <Route path = '/details/:id' element = {<ShowDetails/>} />
        </Routes>
            <h1 style={myCss} align="center">Component 12</h1>
            <ChildComponent age = {34} name = {"Virat"} >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In, similique!
                    <button>Button</button>
                </p>
            </ChildComponent> 
            
        </>
    );
}
export default Comp12
