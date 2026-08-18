import { useContext } from "react"
import { GlobalContext } from "./Context/AppContexts"

function Comp1(){

    const r = useContext(GlobalContext)

    return(
    <>
        <h1 align="center">Component 1</h1>
        <h4 align="center"> {r.userName} {r.userAge} </h4>
    </>
    
    )
}



export default Comp1