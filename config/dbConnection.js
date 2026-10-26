const mongoose = require('mongoose');


let dbConnection = () => {
    return mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.qedw48h.mongodb.net/`).then(() => {
        console.log("Database Connected");

    }).catch((err) => {
        console.log('errro', err);

    })
}

module.exports=dbConnection