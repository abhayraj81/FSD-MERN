let arr = [100,200,300]

// arr.reduce((accumulator,initial)=>{},0)
// reduce return single one value answer


// let r =arr.reduce((sum,ele)=> sum+ele ,0)
// console.log(r);

const productDetails = [
    {proID: 1012 , proName: "iMac" , proPrice: 899      ,proQty:5},
    {proID: 1112 , proName: "Macbook" , proPrice: 1199  ,proQty:2},
    {proID: 3012 , proName: "iPad" , proPrice: 699      ,proQty:10},
    {proID: 2012 , proName: "Earpods" , proPrice: 599   ,proQty:25},
    {proID: 1412 , proName: "Charger" , proPrice: 199   ,proQty:50},
]


let final_amt = productDetails.reduce((totalPrice,prod)=>
    totalPrice = totalPrice + (prod.proPrice)*(prod.proQty),
    0
)
console.log(final_amt);