let arr = [1,2,3,4,5]

const r = arr.filter((ele)=>{
    if(ele%2 == 0)
        return true
})

console.log(r);


const productDetails = [
    {proId:1012 , proName:"iMac" , proprice:899},
    {proId:1122 , proName:"MacBook" , proprice:1199},
    {proId:3012 , proName:"iPad" , proprice:699},
    {proId:2012 , proName:"EarsPods" , proprice:599},
    {proId:1412 , proName:"Charger" , proprice:199}
]
const s = productDetails.filter((ele)=>{
    if(ele.proprice  >=700)
        return true
})
console.table(s);