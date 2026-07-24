/* ----- Dataset for Aggregation -----*/

[
    { 
        _id:1,
        firstName: "John",
        lastName: "King",
        gender:'male',
        email: "john.king@abc.com",
        salary: 5000,
        department: { 
                    "name":"HR" 
                }
    },
    { 
        _id:2,
        firstName: "Sachin",
        lastName: "Tendulkar",
        gender:'male',
        email: "sachin.t@abc.com",
        salary: 8000,
        department: { 
                    "name":"Finance" 
                }
    },
    { 
        _id:3,
        firstName: "Virat",
        lastName: "kohli",
        gender:'male',
        email: "kohli@abc.com",
        salary: 7500,
        department: { 
                    "name":"Marketing" 
                }
    },
    { 
        _id:4,
        firstName: "Rohini",
        lastName: "Sharma",
        gender:'female',
        email: "roh@abc.com",
        salary: 5000, 
        department: { 
                    "name":"HR" 
                }

    },
    { 
        _id:5,
        firstName: "Kapil",
        lastName: "Dev",
        gender:'male',
        email: "kapil.d@abc.com",
        salary: 4500,
        department: { 
                    "name":"Finance" 
                }

    },
    { 
        _id:6,
        firstName: "Amit",
        lastName: "B",
        gender:'male',
        email: "amit.b@abc.com",
        salary: 7000,
        department: { 
                    "name":"Marketing" 
                }
    }
]



//syntax :  db.collection.aggreagate([{$match},{$group},{$sort}])

db.Users.aggregate(
    [
     {
        $match:{gender:'female'}
     },
     {
        $project:{firstName:1, email:1 , salary:1}
     }
    ]
)

db.Users.aggregate(
    [
     {
        $match:{$and:
            [
                {salary:{$gte:5000}},
                {salary:{$lte:7000}}
            ]
        }
     },
     {
        $project:{firstName:1, email:1 , salary:1}
     }
    ]
)

______________________________________________________________________________________________

// grouping

// group by gender
db.Users.aggregate([
    {
        $group:{_id:'$gender'}
    }
])
// group by department.id
db.Users.aggregate([
    {
        $group:{_id:"$department.name"}
    }
])

db.Users.aggregate([
    {
        $group:{
                _id:"$department.name",
                TotalEmployees:{$sum:1}
            }
    }
])

db.Users.aggregate([
    {
        $group:{
                _id:"$department.name",
                TotalEmployees:{$sum:1},
                AverageSalary:{$avg:"$salary"},
                MinimumSalary:{$min:"$salary"},
                MaximumSalary:{$max:"$salary"}
            }
    }
])

_____________________________________________________________________________________________

// sorting

db.Users.aggregate([
    {
        $group:{
                _id:"$department.name",
                TotalEmployees:{$sum:1},
                TotalSalary:{$sum:"$salary"},
                AverageSalary:{$avg:"$salary"},
                MinimumSalary:{$min:"$salary"},
                MaximumSalary:{$max:"$salary"}
            }
    },
    {
        $sort:{TotalSalary:-1}
    }
])

db.Users.aggregate([
    {
        $group:{
                _id:"$department.name",
                TotalEmployees:{$sum:1},
                TotalSalary:{$sum:"$salary"},
                AverageSalary:{$avg:"$salary"},
                MinimumSalary:{$min:"$salary"},
                MaximumSalary:{$max:"$salary"}
            }
    },
    {
        $sort:{TotalSalary:-1,AverageSalary:-1}
    }
])

db.Users.aggregate([
    {
        $group:{
                _id:"$department.name",
                TotalEmployees:{$sum:1},
                TotalSalary:{$sum:"$salary"},
                AverageSalary:{$avg:"$salary"},
                MinimumSalary:{$min:"$salary"},
                MaximumSalary:{$max:"$salary"}
            }
    },
    {
        $sort:{TotalSalary:-1,AverageSalary:-1}
    },
    {
        $limit:2
    },
    {
        $skip:1
    }
])

db.Users.aggregate([
    {
        $group:{
                _id:"$department.name",
                TotalEmployees:{$sum:1},
                TotalSalary:{$sum:"$salary"},
                AverageSalary:{$avg:"$salary"},
                MinimumSalary:{$min:"$salary"},
                MaximumSalary:{$max:"$salary"}
            }
    },
    {
        $sort:{TotalSalary:-1,AverageSalary:-1}
    },
    {
        $limit:2
    },
    {
        $skip:1
    },
  {
    $project:{TotalEmployees:1, AverageSalary:1, TotalSalary:1}
  }
])
______________________________________________________________________________________
// sampling

db.Users.aggregate([
    {
        $sample:{size:3}
    }
])

______________________________________________________________________________________
// sort by count

db.Users.aggregate([
    {
        $sortByCount:'$department.name'
    }
])


// it groups documents by the specified field or expression.
// Counts how many times each value occurs
// Sorts the result in descending order based on the count

