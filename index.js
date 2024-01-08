require('dotenv').config()
const express = require('express')

const app = express()
const port = 4444

app.get('/', (req, res) => {
  res.send('Hello ')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})