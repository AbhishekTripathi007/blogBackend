const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.json({
        "name":"Abhishek"
    })
})

app.listen((8000), () => {
    console.log("Server is running on 8000")
})