const express = require('express') ; 
require('./db/mongoose') ; 

   // C:\Users\ahmed\mongodb\bin/mongod.exe --dbpath=C:\Users\ahmed\mongodb-data 

const userRouter = require('./routers/user'); 
const taskRouter = require('./routers/task')

const app = new express() ; 
const port = process.env.PORT  ; 

app.use(express.json())
app.use(userRouter) ; 
app.use(taskRouter) ; 

app.listen(port , () =>{
    console.log('App is running on Port: ' , port)
}); 




