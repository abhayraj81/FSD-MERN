import { useState } from "react";


function Comp16(){
    
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    };

    const [productsData, setProductData] = useState([])


    function loadProducts()
    {
        setTimeout(()=>
        {
            setProductData([
                {proID: 1012 , proName: "iMac" ,    proPrice: 899,  proQty:5},
                {proID: 1112 , proName: "Macbook" , proPrice: 1199, proQty:2},
                {proID: 3012 , proName: "iPad" ,    proPrice: 699,  proQty:10},
                {proID: 2012 , proName: "Earpods" , proPrice: 599,  proQty:25},
                {proID: 1412 , proName: "Charger" , proPrice: 199,  proQty:50},
            ])
        },3000)
    }

    return(
        <>  

            <h1 style={myCss} align="center"> Component 16 </h1>            
            <button onClick={loadProducts}> Click Me !</button> <br/>
            <div className="container">
                {productsData.length > 0 && (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Product Id</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsData.map((product) => (
                                <tr>
                                    <td>{product.proID}</td>
                                    <td>{product.proName}</td>
                                    <td>{product.proPrice}</td>
                                    <td>{product.proQty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

            </div>
            
        </>
    );
}
export default Comp16;
