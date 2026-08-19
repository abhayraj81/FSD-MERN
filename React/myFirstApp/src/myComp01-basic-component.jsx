import { useContext } from "react"
import { GlobalContext } from "./Context/AppContexts"

function Comp1(){

    const {userName, setUserName} = useContext(GlobalContext)

    return(
    <>
        <h1 align="center">Component 1 {userName} </h1>
        <button onClick={()=> setUserName("Anmol")}> Update Name </button>
    </>
    
    )
}



export default Comp1