//import express module 
var express=require('express')

var app=express()
var port=1000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get('/About',(req,res)=>{
    res.send("<h2>About page</h2>")
})

app.listen(port,()=>{
    console.log('server running')
})