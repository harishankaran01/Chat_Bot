const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    console.log(req.url);
    res.send({'hello':'buddy'});
})



const port=process.env.PORT || 1817
app.listen(port);