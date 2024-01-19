console.log("Hola Mundo desde Node.JS");

const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("Hola")
})

app.listen(8080, () =>{
    console.log("Servidor funcionando")
})