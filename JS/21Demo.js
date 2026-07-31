const productDetails = [
    {proId:1012 , proName:"iMac" , proprice:899},
    {proId:1122 , proName:"MacBook" , proprice:1199},
    {proId:3012 , proName:"iPad" , proprice:699},
    {proId:2012 , proName:"EarsPods" , proprice:599},
    {proId:1412 , proName:"Charger" , proprice:199}
]
let sum = 0 
productDetails.forEach((product) => {
    sum = sum +product.proprice
});
console.log("Total Sum : " + sum);

const r = productDetails.filter((ele)=>{
    if(ele.proprice == 700 || ele.proprice >=700)
        return true
})
console.log(r);
console.table(r);