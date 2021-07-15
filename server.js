let express =require('express')
let app = express();
let port = process.env.PORT || 5000

app.get("/",(req,res,next)=>{
    res.json({ msg: ["Tony","Lisa","Michael","Ginger","Food"] })
    console.log(res)
})

app.post("/add?user", (req,res,next)=>{
    console.log(req)
})

app.listen(port, ()=>{
    console.log("server is running ")
})