const express = require('express')
const bodyParser = require('body-parser')
const routes = express()

const {users, items, orders} = require('../models')

//GET '/users'
routes.get('/users',(req, res)=>{ 
    users.fetchUsers(req, res)
})

//GET '/user/:id'
routes.get('/users/:id',(req,res)=>{ 
    users.fetchUser(req, res)
})

//POST '/register' (registration)
routes.post('/register',bodyParser.json(), 
    (req,res)=>{
        users.register(req,res)
    }
)

//PUT or PATCH '/user/:id'
routes.patch('/users/:id',bodyParser.json(), 
    (req,res)=>{
    users.updateUser(req,res)
})

//POST '/user (login)
routes.post('/login',bodyParser.json(), 
    (req,res)=>{
    users.login(req,res)
    }
)

//DELETE '/user/:id'
routes.delete('/users/:id',(req,res)=>{  
    users.deleteUser(req,res)
})

/*Items Routes*/

//GET '/items'
routes.get('/items', (req,res)=>{ 
    items.fetchCourses(req,res)  
})

//GET '/item/:id'
routes.get('/item/:id',(req,res)=>{
    items.fetchCourse(req,res)  
})

//POST '/items'
routes.post('/products',bodyParser.json(),
    (req,res)=>{
    items.createCourse(req,res) 
    }
)

//PUT '/item/:id'
routes.put('/item/:id', bodyParser.json(), 
    (req,res)=>{
    items.updateCourse(req,res) 
})

//DELETE '/item/:id'
routes.delete('/item/:id',(req,res)=>{  
    items.deleteCourse(req,res) 
})

module.exports = {
    express,
    routes
}