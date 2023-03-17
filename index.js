const express=require('express');
const mainRoute=require('./routers/mainroute');
const cors=require('cors');

const app=express();
app.use(express.json())
app.use(cors())
app.use('/',mainRoute);

app.listen(3500,()=>{
   
    console.log("Server is Running at 3500");
})