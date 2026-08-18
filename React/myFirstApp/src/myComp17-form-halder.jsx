import { useState } from "react";


function Comp17(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    const[formData, setFormData] = useState({})

    function inputHandler(event){
        setFormData({...formData,[event.target.name]:event.target.value});
        // console.log(formData);
    }

    function formHandler(event){
        event.preventDefault();
        console.log(formData);
        // API Calling..
    }

    return(
        <>  
            <h1 style={myCss} align="center"> Component 17 </h1>            
            <form onSubmit={(event) => formHandler(event)}>
                <table className="table table-bordered w-50 mx-auto">
                    <tbody>
                        <tr>
                            <td>User Name</td>
                            <td>
                                <input type="text" 
                                name="unm"
                                onChange={(event) => inputHandler (event)} />
                            </td>                        
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>
                            <input type="password" 
                            name="pwd"
                            onChange={(event) => inputHandler (event)} />
                            </td>
                        </tr>
                        <tr>
                            <td>E-mail</td>
                            <td>
                                <input type="email" 
                                name="mail"
                                onChange={(event) => inputHandler (event)} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2} align="center">
                                <button align="center">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table> 
            </form>           
        </>
    );
}
export default Comp17;
