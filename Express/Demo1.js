
require('dotenv').config()
console.log(process.env);
console.log(process.env.HOST);
console.log(process.env.PORT);
console.log(process.env.MONGO_URI);

let id = process.env.MONGO_UID || 'root'
console.log(id);