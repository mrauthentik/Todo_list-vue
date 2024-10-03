// const express = require('express')
// const cors = require('cors')
// const app = express()

// var database;
// app.get('/', (req,res)=>{
//   res.send("Welcome to Home page 👮‍♂️")
//   console.log('response sent to index page 🏹')
// })
// app.get('/api/todoapp/GetNotes', (req,res)=>{
//   res.send('Todo application starts here 🚗🚗')
//   console.log('TodoApp ready to gooo 🚀🚀🚀\n yess')
// })

// app.listen(3000, ()=>{
//     console.log(' Server Started succesfully, Server is Running on http//localhost:3000')
// })


const cors = require('cors')
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.sendFile(__dirname, (err)=>{
    err.stack
    console.error('some bugs just occur' + err.stack)
  })
  console.log('Text has been sent to home page and its running fine')
})
app.get('/api/getlist/todo', (req,res)=>{
  res.sendFile(__dirname('touch'),__filename('index.html'))
})
app.listen(4000,()=>{
  console.log('Server is running on port 4000')
})