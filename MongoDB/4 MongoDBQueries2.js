//Update Data
//db.collection_name.updateOne( 
//                              { : XX }, 
//                              {$set :{target_field : updated_value} } 
//                             )
//db.collection_name.updateMany( { }, { } )
//db.collection_name.updateMany( { }, { }, { }............. )

//using upsert{}
//db.collection_name.updateMany( { },
//                               {$set :{target_field : updated_value} }
//                               {upsert : true }
//                               )


db.Employees.updateMany(
    {Name : 'Abhay Raj' },
    {$set : {age : 23, hobbies : "playing"}}
    {upsert : true}
)
 
// Rename

db.Employees.updateMany(
    { name : 'Abhay Raj'},
    {$rename :{"age":"empAge"}}
)

// Unset{}

db.Employees.updateMany(
    { name : 'Abhay Raj'},
    {$unset :{"AGE":""}}
)

// delete{}

db.Employees.deleteMany(
    { Name : 'Abhay Raj'}
    
)

// Search by Word

db.Employees.find(
{about : /Fitness trainer/}
)

//**use i for case insensitive/
db.Employees.find(
{about : /Music/i} 
)

//use ^j for name *start with j similarly for other letter
db.Employees.find(
{name : /^j/i}   
)

//use $n for name *end with n similarly for other letter
db.Employees.find(
{name : /n$/i}   
)

// select the Employees where 3rd character from starting in name is v.
db.Employees.find(
{name : /^.{2}v/i}
)

// select the Employees where 4th character from end in name is l.
db.Employees.find(
{name : /l.{3}$/i}
)

// limit() - shows first 2 records
db.Employees.find().limit(2)

// skip() - skip fisrt 3 records
db.Employees.find().skip(3)

// sort() - sort on the basis of column

db.Employees.find().sort({name:1})
db.Employees.find().sort({name: -1})

//sort() - sort name fisrt then sort age
db.Employees.find().sort({name:1,age:-1})


// Date() - String
// new Date() - Date Object
// new ISODate - Date Object


db.DateCollection.insertMany([

        {
            aboutDate  : "Date Using 'Date()",
            insertedAt : Date()
        },
        {
            aboutDate  : "Date Using 'Date()",
            insertedAt : new Date()
        },
        {
            aboutDate  : "Date Using 'Date()",
            insertedAt : new ISODate()
        }
])

db.DateCollection.find({},
   {
    RecordInsertedAt:
    {
        $dateToString:
        {
            date:"$insertedAt",
            format:"%d-%B-%Y"
        }
    }
})

//Field Alias: RecordInsertedAt
db.DateCollection.find({insertedAt:{$type:'date'}},
   {
    RecordInsertedAt:
    {
        $dateToString:
        {
            date:"$insertedAt",
            format:"%d-%B-%Y %H:%M:%S",
            timezone:"Asia/Mumbai"
        }
    }
})