import {Link} from 'react-router-dom'

function Mycard( {product} )
{
    return(<>
        <div className="card">
            <div className="card-header">{product.proName}</div>
            <img src ={"./shiba-inu-1.jpg"} />
            <div className="card-body">
                <p className="alert alert-warning">
                    Product Id : {product.proID} <br/>
                    Product Price : {product.proPrice} <br/>
                    Product Quantity : {product.proQty} <br/>
                </p>
            </div>
            
            <div className="card-footer">
                <Link to={`/details/${product.proID}`} className="btn btn-info btn-block">
                    View Details
                </Link>
            </div>

        </div>
    </>)
}

function Comp11(){
    let myCss = {
        backgroundColor:"navy",
        color:"skyblue",
        textAlign:"center",
        lineHeight:"100px",
        boxShadow:"0 5px 8px grey"
    }
    const productDetails = [
        {proID: 1012 , proName: "iMac" ,    proPrice: 899,  proQty:5},
        {proID: 1112 , proName: "Macbook" , proPrice: 1199, proQty:2},
        {proID: 3012 , proName: "iPad" ,    proPrice: 699,  proQty:10},
        {proID: 2012 , proName: "Earpods" , proPrice: 599,  proQty:25},
        {proID: 1412 , proName: "Charger" , proPrice: 199,  proQty:50},
    ];

    return (
        <>  
            <h1 style={myCss} align="center">Component 11</h1>
            
            <div className="container">
                {productDetails.length > 0 && (                
                <div className="row">
                    {productDetails.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Mycard product={product}/>
                        </div>
                    ))}
                </div>
                )}
            </div>                        
        </>
    );
}
export default Comp11
