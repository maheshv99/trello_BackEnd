const client=require('../connection')

const signup=async (req,res)=>{
    try {
        await client.connect();
        console.log("database is connected successfuly");
        const database=client.db('pmt')
       const collection=database.collection('signup');
    const responce=collection.insertOne(req.body);
    // const resp=collection.find({Email:'mahi@gamil.com'})
    const resp1=await resp.toArray();
    client.close();
    console.log("Responec after db => ",resp1.length);
        res.send({message:"succesfully Registred"})
    } catch (error) {
        res.send({message:"Not Registred"})
    }
}

module.exports.getSignupData=signup;


// Email: 'mahi@gamil.com',
//   Name: 'Mahesh',
//   State: 'fg',
//   Password: 'rtgyhuji',
//   Cpassword: '4rftghb