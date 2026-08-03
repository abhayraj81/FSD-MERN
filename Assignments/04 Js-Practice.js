const students = [
    {
    id: 101,
    name: "Amit Sharma",
    age: 22,
    gender: "Male",
    course: "MCA",
    marks: 78,
    city: "Delhi",
    skills: ["Java", "Python", "SQL"]
    },
    {
    id: 102,
    name: "Priya Singh",
    age: 21,
    gender: "Female",
    course: "BCA",
    marks: 92,
    city: "Lucknow",
    skills: ["HTML", "CSS", "JavaScript"]
    },
    {
    id: 103,
    name: "Rahul Verma",
    age: 23,
    gender: "Male",
    course: "MCA",
    marks: 65,
    city: "Noida",
    skills: ["C", "C++", "Java"]
    },
    {
    id: 104,
    name: "Neha Gupta",
    age: 20,
    gender: "Female",
    course: "B.Tech",
    marks: 88,
    city: "Kanpur",
    skills: ["React", "Node.js", "MongoDB"]
    },
    {
    id: 105,
    name: "Arjun Yadav",
    age: 22,
    gender: "Male",
    course: "MCA",
    marks: 55,
    city: "Delhi",
    skills: ["Python", "Django"]
    },
    {
    id: 106,
    name: "Simran Kaur",
    age: 21,
    gender: "Female",
    course: "BCA",
    marks: 81,
    city: "Agra",
    skills: ["JavaScript", "React"]
    },
    {
    id: 107,
    name: "Rohan Mishra",
    age: 24,
    gender: "Male",
    course: "MBA",
    marks: 73,
    city: "Patna",
    skills: ["Excel", "Power BI"]
    },
    {
    id: 108,
    name: "Anjali Roy",
    age: 22,
    gender: "Female",
    course: "MCA",
    marks: 95,
    city: "Kolkata",
    skills: ["Java", "Spring Boot"]
    },
    {
    id: 109,
    name: "Vikas Kumar",
    age: 20,
    gender: "Male",
    course: "B.Tech",
    marks: 69,
    city: "Jaipur",
    skills: ["C", "Python"]
    },
    {
    id: 110,
    name: "Sneha Ali",
    age: 23,
    gender: "Female",
    course: "MBA",
    marks: 84,
    city: "Mumbai",
    skills: ["Marketing", "Communication"]
    }
    ];




// 1. Write a program to display all student objects
students.forEach((stu)=>{
    console.log(stu)
})

// 2. Find the first student whose marks are greater than 80.
let s = students.find((stu)=>{
    if(stu.marks > 80)
        return true    
})
console.log(s)

// 3. Display students whose names start with "A"
let nameWithA = students.filter((stu)=>{
    if(stu.name.startsWith("A"))
        return true    
})
console.log(nameWithA)

// 4. Find the total marks of all students
let sum = 0 
students.forEach((stu) => {
    sum = sum + stu.marks
});
console.log("Total Marks : " + sum);

// 5. Display students whose course contains "CA".
let CA = students.filter((stu)=>{
    if(stu.course.includes("CA"))
        return true    
})
console.log(CA)

// 6. Display students having marks less than 60.
let _60 = students.filter((stu)=>{
    if(stu.marks < 60)
        return true    
})
console.log(_60)

// 7. Count the total characters in every student's name.
let tChar = students.map((stu) => {
    return{ ...stu, Lenght: stu.name.length}
});
console.log(tChar);

// 8. Find the index of the first student scoring above 80.
let index = students.find((stu)=>{
    if(stu.marks > 80)
        return true    
})
console.log("Index of first Student Scores more than 80 : " +students.indexOf(index))

// 9. Write a program to count the total number of words in a paragraph.


// 10. Replace spaces with hyphens in every name.


// 11. Display the names of students whose marks are multiples of 3, sorted in descending order.
let marks3X = students
  .filter(student => student.marks % 3 === 0)
  .sort((a, b) => b.marks - a.marks)
  .map(student => student.name);
console.log(marks3X);

// 12. Write a program to find the index of the first MCA student
let indexMCA = students.find((stu)=>{
    if(stu.course === "MCA")
        return true    
})
console.log("Index of first MCA Student : " +students.indexOf(indexMCA))

// 13. Write a program to display the total number of students in each city using reduce().


// 14. Write a program to display the highest-scoring student using sort() and find().
let highestMarks = students.find(s)

// 15. Write a program to display the lowest-scoring student using sort() and find().

// 16. Write a program to display the names of students after adding 5 bonus marks using map().
// 17.
// Write a program to display students whose city contains the letter "a" using filter() and includes()
// 18.
// Display only unique cities.
// 19.
// Count the total marks obtained by MCA students.
// 20.
// Display all students after increasing their marks by 10%