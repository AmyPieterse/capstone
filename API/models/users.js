//Users table
const database = require ('../config')
const {hash, hashSync, compare} = require('bcrypt')
const {createToken} = require('../middleware/authenicate')
class Users{  
    fetchUsers(req,res){
        const query =
        `SELECT userID, firstName, lastName, username, userDOB, emailAdd, userPass, profileURL FROM users;`
        database.query(query,(err,results)=>{
            if(err){
                return res.status(500).json(
                    {
                        status:res.statusCode,
                        error: "Error fetching users"
                    }
                )
            }
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    fetchUser(req,res){
        const query =`
        SELECT userID, firstName, lastName, username, userDOB, emailAdd, userPass, profileURL
        FROM users
        WHERE userID = ${req.params.id};
        `
        database.query(query,(err,result)=>{
            if(err){
                return res.status(500).json({
                    status: res.statusCode,
                    message: 'Error fetching user'
                })
            }
            if(result.length===0){
                return res.status(404).json({
                    status:res.statusCode,
                    message: 'User not found'
                })
            }
            res.json({
                status:res.statusCode,
                result: result[0]
            })
        })
    }
    login(req,res){
        const {emailAdd, userPass} = req.body
        // query
        const query = `
        SELECT userID, firstName, lastName, username, userDOB, emailAdd, userPass, profileURL
        FROM users
        WHERE emailAdd = '${emailAdd}';
        `
        database.query(query,[userPass], async (err, result)=>{
            console.log(result,userPass);
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else {
                await compare(userPass,
                    result[0].userPass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        let token =
                        createToken({
                            emailAdd,
                            userPass
                        })
                        if(cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                        }
                    })
                }
        })
    }
    async register(req,res){
        const data =req.body
        data.userPass = await hash(data.userPass,15)
        
        //payload
        const user ={
            emailAdd : data.emailAdd,
            userPass : data.userPass
        }
        const query =`
        INSERT INTO users
        SET ?;
        `
        database.query(query,[data],(err)=>{
            if (err) throw err
            let token = createToken(user)
            res.json({
                token,
                status:res.statusCode,
                msg:"You are now registered."
            })
        })
    }
    updateUser(req,res){
        const data = req.body
        if(data.userPass){
            data.userPass = hashSync(data.userPass,15)
        }
        const query =`
        UPDATE users
        SET ?
        WHERE userID = ${req.params.id};
        `
        database.query(query,[req.body],(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been updated "
            })
        })
    }
    deleteUser(req,res){
        const query =`
        DELETE FROM users
        WHERE userID = ${req.params.id};
        `
        database.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been deleted."
            })
        })
    }
}
module.exports = Users