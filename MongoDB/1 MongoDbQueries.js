// show databases
// show dbs 
// use ARK

//db.createCollection(collection_name)
db.createCollection("Employee")

db.Employee.insert({
                    empName: 'Abhay',
                    empAge: 45,
                    empEmail: 'abhay.ark12@gmail.com' })
db.Employee.insertOne({
                    empName: 'Anshika',
                    empAge: 25,
                    empEmail: 'anshiknp@gmail.com' })
db.Employee.insertOne({
                    empName: 'Raj',
                    empAge: 25,
                    empSalary: 45000,
                    empEmail: 'rajubhai@gmail.com' })

//show select allrecords
db.Employee.find()

//To insert many entries uses Array and document collection inside
//db.Employee.insertMany([{},{},{},..............])

db.Employee.insertMany([
                    { 
                    empName: 'Yuvi',
                    empAge: 45,
                    empEmail: 'yuvi12@gmail.com',
                    empSalary: 56000.76
                    },
                    {empName: 'Andmol',
                    empAge: 23,
                    empEmail: 'andupandu@gmail.com',
                    empSalary: 28000,
                    empSkills:["C","C++","Phython"]
                    },
                    {empName: 'Rana Singh',
                    empAge: 28,
                    empSalary: 85000,
                    empEmail: 'ranadev@gmail.com',
                    empSkills:["C","React","Rust"],
                    empAddress:{
                        HouseNo : 17,
                        City: 'Kanpur',
                        Pincode: '208013'
                    }
                    },
                    {empName: 'Shanky Dutta',
                    empAge: 29,
                    empSalary: 98000,
                    empEmail: 'shankyd@gmail.com',
                    empSkills:["Java","Ruby","Vite"],
                    empAddress:{
                        HouseNo : 25,
                        City: 'Allahbhad',
                        Pincode: '208016'
                    }
                    }
                    ])

// Select Data 
// db.Employee.find()
// {field: 1 } to include known as projectio inclusion
db.Employee.find({},{empName:1,empSalary:1})

// {field: 0 } to exclude known as projection exclusion
db.Employee.find({},{empSalary:0,empAge:0})

// only _id can be exclude expilicitly while writing inculsion
db.Employee.find({},{empName:1,empSalary:1,_id:0})

//Operators
// =  $eq
// >  $gt
// >= $gte
// <  $lt
// <= $lte
// != $ne

db.Employee.find({empSalary:5000})
db.Employee.find({empSalary:{$gte:5000}})
db.Employee.find({empSalary:{$lte:5000}})

//Operators
// $in Operator
db.Employee.find({empName: Andmol})
db.Employee.find({empName:{$eq: "Andmol"}})
db.Employee.find({empName:{$in:["Raj","Andmol","Anshika","Yuvi"] }})

// $and operator
//db.Employee.find({$and:[
//                          {},
//                          {},
//                          ]
//                      })
db.Employee.find({$and:[
                         {empName:"Raj"},
                         {empAge:{$gte:20}},
                         {empEmail:{$eq:'rajubhai@gmail.com'}} 
                         ]
                     })

// $for operator
//db.Employee.find({$or:[
//                          {},
//                          {},
//                          ]
//                      })
db.Employee.find({$or:[
                         {empName:"Raj"},
                         {empAge:{$gte:40}},
                         {empEmail:{$eq:'abhya.ak12@gmail.com'}} 
                         ]
                     })

// $not operator
//db.Employee.find({$and:[
//                          {key: value},
//                          {key: {$not: value}},
//                          ]
//                      })
db.Employee.find({$and:[
                         {empName:"Raj"},
                         {empAge:{$not:{$lte: 40}}},
                         ]
                     })
// $exists operators
db.Employee.find({$and:[
                         {empSalary:{$exists: true}},
                         {empSalary:{$gte: 50000}},
                         {empSalary:{$lte: 60000}},
                         ]
                     })
// $type operators 
db.Employee.find({$and:[
                         {empSalary:{$exists: true}},
                         {empSalary:{$type:1}},
                         {empSalary:{$gte: 50000}},
                         {empSalary:{$lte: 60000}},
                         ]
                     })

db.Employee.find({$and:[
                         {empSalary:{$exists: true}},
                         {empSalary:{$type:"double"}},
                         {empSalary:{$gte: 50000}},
                         {empSalary:{$lte: 60000}},
                         ]
                     })

db.Employee.find({$and:[
                         {empSalary:{$exists: true}},
                         {empSalary:{$type:"int"}},
                         {empSalary:{$gte: 50000}},
                         {empSalary:{$lte: 60000}},
                         ]
                     })                    


                     

