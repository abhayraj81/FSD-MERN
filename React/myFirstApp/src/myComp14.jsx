import {Routes, Route, Link} from 'react-router-dom'
import Comp1 from './myComp01-basic-component';
import Comp2 from './myComp02-component-with-text';
import Comp11 from './myComp11-cards';
import ShowDetails from './myComp13';

function Comp14(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    return(
        <>  
        <h1 style={myCss} align="center">Component 14</h1>
        <Link to="/home"> Home </Link>
        <Link to="/details/1001"> Product </Link>
        <Link to="/products"> View All products </Link>

        <Routes>
            <Route path = '/' element = {<Comp1/>} />
            <Route path = '/home' element = {<Comp2/>} />

            <Route path = '/products' element = {<Comp11/>} />
            <Route path = '/details/:id' element = {<ShowDetails />} />
        </Routes>                      
            
        </>
    );
}
export default Comp14;
