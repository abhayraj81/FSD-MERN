function Comp3(){
    let name = "Abhay\n";
    let surname = "Raj";
    let arrFruits = ["Apple","Banana","Orange"];
    let userData = {uid:1001, unm:"Virat"};

    let a = [];
    arrFruits.forEach((ele)=>{
        a.push(<li>{ele}</li>)
    });

    return(
        <>
            <h1 align="center">Component 3</h1>
            <p>
                <ul>{a}</ul>
                {name}
                {surname}
                {arrFruits}
                {arrFruits[1]}
                {userData.uid}
            </p>
        </>
    )
}

export default Comp3