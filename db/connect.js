const mongoose = require("mongoose");

// uri="mongodb+srv://ApiForShopApp:ApiForShopApp@apiforshopappcluster1.jmgnc1w.mongodb.net/ApiForShopAppCluster1";


const connectDB = (uri)=>{ 
    console.log("connn");
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};

module.exports = connectDB;
