const express = require("express");
const compression = require("compression");


const app = express();
app.use(compression({
    level:6,
    threshold: 10 * 1000,
    filter: (req,res)=>{
        if(req.headers['x-no-compression']){
            return false
        }
        return compression(req,res); 
    },
}))

app.get('/', (_,res)=>{
    const payload= "Faster app which uses less bandwidth too"
    res.send(payload.repeat(10000))
})

app.listen(3003, ()=> console.log("Server running on port 3003"))