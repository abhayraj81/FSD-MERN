// 1. indexOf

let str = "A quick brown fox jumps over the lazy dog"
console.log(str.indexOf("fox"));
console.log(str.indexOf("cat"));  // -1 for no output
console.log(str.indexOf('o'));


// 2. lastindexof
console.log(str.lastIndexOf("o"));

// 3. inculdes  (returns boolean value)
console.log(str.includes("dog"));

// 4. startwith()
console.log(str.startsWith("A"));

// 5. endswith()
console.log(str.endsWith("dog"));

// 6. trim()
console.log(str.trim("fox"));

// 7. split()
let r = str.split(" ")
console.log(r);

let s = str.split("fox") // dilimiter at fox remove fox
console.log(s);

