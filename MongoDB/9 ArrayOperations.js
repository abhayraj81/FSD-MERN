// Array Operations

db.createCollection("trainer")

db.trainer.insertOne({
        id: 1,
        name : "John",
        skills: ["C", "JavaScript", "Node.js"],
        marks: [75, 80, 90],
        students: [
          {
            name: "Ali",
            age: 20
          },
          {
            name: "Sara",
            age: 21
          }
        ]
      })

// 1. find

db.trainer.find({
    skills:"JavaScript"
})

// Return record if any one or more value matched
db.trainer.find({
    skills:{
        $in:["JavaScript","Python"]
    }
})

// Return record if all values are present
db.trainer.find({
    skills:{
        $all:["JavaScript","Python"]
    }
})

// Return record of given size
db.trainer.find({
    skills:{
        $size:3
    }
})

// Find by Array index
db.trainer.find({
    "skills.0":"C"
})

// embedded document
db.trainer.find({
    "students.name":"Ali"
})

// Find Using $elemMatch 
db.trainer.find({
    students:{
        $elemMatch:{
            age:{
                $gte:20
            }
        }
    }
})

// 2. Update

// Add Single Value
db.trainer.updateOne(
    {name:'John'},
    {
        $push:{
            skills:"AI-ML"
        }
    })

// Add Multiple Value
db.trainer.updateOne(
    {name:'John'},
    {
        $push:{    
            skills:
            {
                $each:["Express","React"]
            }
        }
    })

// Add Multiple Value
// $addToSet checks the array if value is not present then it adds (whereas push can add duplicate value)
db.trainer.updateOne(
    {name:'John'},
    {
        $addToSet:{
            skills:
            {
                $each:["Express","React"]
            }
        }
    })

// insert element at specified position
db.trainer.updateOne(
    {name:'John'},
    {
        $push:{
            skills:
            {
                $each:["Python"],
                $position:1
            }
        }
    })

// add values and keep only the first 3 element
db.trainer.updateOne(
    {name:'John'},
    {
        $push:{
            skills:
            {
                $each:["TypeScript"],
                $position:2,
                $slice:3
            }
        }
    })

// sort
db.trainer.updateOne(
    {name:'John'},
    {
        $push:{
            skills:
            {
                $each:["TypeScript"],
                $position:2,
                $slice:3,
                $sort:1
            }
        }
    })

// update by index
db.trainer.updateOne(
    {name:'John'},
    {
        $set:        
            {
               "skills.1":"JavaScript"
            }
        }
    )

// find skill JavaScript and change it to TypeScript
db.trainer.updateOne(
    {
    skills:"JavaScript"
    },
    {
        $set:{"skills.1":"TypeScript"}
    }
)

// Update First Matching Element
db.trainer.updateOne(
    {
    skills:"JavaScript"
    },
    {
        $set:{"skills.$":"TypeScript"}
    }
)

// Update Embedded Object
db.trainer.updateOne(
    {
    "students.name":"Ali"
    },
    {
        $set:
        {
            "students.$.age":22
        }
    }
)

// Remove one Element
db.trainer.updateOne(
    {
    name:"John"
    },
    {
        $pull:
        {
            skills:"Node.js"
        }
    }
)

//
db.trainer.updateOne(
    {
    name:"John"
    },
    {
        $pull:
        {
            skills:{
                $in:["JavaScript","Python"]
            }
        }
    }
)

// remove embedded documents
db.trainer.updateOne(
    {
    name:"John"
    },
    {
        $pull:
        {
            students:{
                age:{
                    $gt:21
                }
            }
        }
    }
)

// remove from rear element
db.trainer.updateOne(
    {},
    {
        $pop:{
            skills:1
        }
    }
)

// remove from front element
db.trainer.updateOne(
    {},
    {
        $pop:{
            skills:-1
        }
    }
)