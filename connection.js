const mongoclient=require("mongodb").MongoClient;
const url="mongodb+srv://mahesh:TCPzsJRtO6OQ5HD9@cluster0.obfk2as.mongodb.net/?retryWrites=true&w=majority";
   
const client=new mongoclient(url);

module.exports=client;





