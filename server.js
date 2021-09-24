const express = require("express");
const server = express(); 
const path = require("path"); 

server.get ('/', (req,res) => {
res.send('index')
})

server.get ('/babbage', (req,res) => {
res.sendFile(path.join(__dirname, '/babbage.html'))
})

server.get ('/berners-lee', (req,res) => {
res.sendFile(path.join(__dirname,'/bernerslee.html')
})

server.get ('/clarke', (req,res) => {
res.send('clarke')
})

server.get ('/hamilton', (req,res) => {
res.send('hamilton')
})

server.get ('/hopper', (req,res) => {
res.send('hopper')
})

server.get ('/lovelace', (req,res) => {
res.send('lovelace')
})

server.get ('/turing', (req,res) => {
res.send('turing')
})

server.listen (3030, ()=>{
console.log('Server onmarcheee')
})


