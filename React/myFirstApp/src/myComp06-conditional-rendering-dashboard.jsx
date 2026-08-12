function AdminDashboard(){
    return(
        <>
            <h1 align="center">
                Admin Dashboard
            </h1>
        </>
    );
}

function ManagerDashboard(){
    return(
        <>
            <h1 align="center">
                Manager Dashboard
            </h1>
        </>
    );
}

function UserDashboard(){
    return(
        <>
            <h1 align="center">
                User Dashboard
            </h1>
        </>
    );
}

function Comp6(){

    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    }

    let user = "User"
    let dashboard
    if(user == "Admin")
        dashboard = <AdminDashboard/>;
    else if(user == "Manager")
        dashboard = <ManagerDashboard/>;
    else if (user == "User")
        dashboard == <UserDashboard/>;

    return(
        <>  
            <h1 style={myCss} align="center">Component 6</h1>
            <p>
                {dashboard}
            </p>
        </>
    )
}

export default Comp6
