//import all models
const Users = require('./users')
const Courses = require('./items')


//Export all objects
module.exports ={
    users: new Users(), 
    items: new Courses()
}