const express = require('express') // express  dependencies require kari hai basicall ek object bna lia express  
require('dotenv').config()

const app = express() // express ko use karte hue humnai ek variable bna lia app 
const port = 4000

app.get('/',(req,res) => {
    res.send('Hello, Sona!')
})


app.get('/twitter',(req,res) => {
    res.send('sonal.com')
})


app.get('/login' , (req,res) => {
    res.send('<h1>Login kar lo yar</h1>')
})


// app.get('/youtube',(req,res)=>{
//     res.send('<h1>chai or code</h1> ')
// })



app.listen(process.env.PORT, () => {
    console.log(`Example port listening on port ${port}`);
})