const mongoose =require("mongoose");
const mongoURI="mongodb+srv://nikhilraghuwanshi04:eIoA2UHLZpXc8VeM@cluster0.vzg7w.mongodb.net/";

const connectToMongo=async()=>{
    try{
        mongoose.connect(mongoURI);
        console.log("connected to mongodb");
    } catch {
        console.log(error);
    }
};
module.exports=connectToMongo;