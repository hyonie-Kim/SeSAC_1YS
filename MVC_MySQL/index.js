const express = require("express");
const app = express();
const port = 8003;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router = require("./routes");

// localhost:8003/visitor
app.use('/visitor', router);

app.get('*', (req, res)=>{
    res.send('error')
})


app.listen(port, ()=>{
    console.log("👾server open:",port)
})