const express = require("express");
const server = express(); 
const path = require("path"); 

server.use("/static", express.static("/public"));

server.get ('/', (req,res) => {
res.send('index')
})

server.get ('/babbage', (req,res) => {
res.sendFile(path.join(__dirname, '/babbage.html'))
})

server.get ('/berners-lee', (req,res) => {
res.sendFile(path.join(__dirname,'/bernerslee.html'))
})

server.get ('/clarke', (req,res) => {
res.sendFile(path.join(__dirname,'/clarke.html'))
})

server.get ('/hamilton', (req,res) => {
res.sendFile(path.join(__dirname,'/hamilton.html'))
})

server.get ('/hopper', (req,res) => {
res.sendFile(path.join(__dirname,'/hopper.html'))
})

server.get ('/lovelace', (req,res) => {
res.sendFile(path.join(__dirname,'/lovelace.html'))
})

server.get ('/turing', (req,res) => {
res.sendFile(path.join(__dirname,'/turing.html'))
})

server.listen (3030, ()=>{
console.log('Server En Marche')
})


