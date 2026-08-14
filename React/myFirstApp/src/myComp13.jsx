import { useParams } from 'react-router-dom';

function ShowDetails(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    const {id} = useParams();
    

    return(
        <>  

            <h1 style={myCss} align="center">Products Details</h1>
            {/*{params.id}*/}
            {id}
            
        </>
    );
}
export default ShowDetails;
