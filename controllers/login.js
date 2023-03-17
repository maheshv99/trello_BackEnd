const client=require('../connection')

const login=async (req,res)=>{
    try {
        await client.connect();
        console.log("database is connected successfuly");
        const database=client.db('pmt')
       const collection=database.collection('signup');
       console.log(req.body);
    const responce=collection.findOne(req.body);
    // const resp=collection.find({Email:'mahi@gamil.com'})
    const resp1=await responce;
    client.close();
    console.log("Responec after db => ",resp1);
    console.log(resp1);
        res.send({message:"succesfully Registred",username:resp1.Name})
    } catch (error) {
        console.log(error);
        res.send({message:"Not Registred"})

    }
}

module.exports.getLoginData=login;