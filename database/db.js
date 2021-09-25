import mongoose from 'mongoose';

const Connection = async (username, password) => {

   
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.afrmx.mongodb.net:27017,cluster0-shard-00-01.afrmx.mongodb.net:27017,cluster0-shard-00-02.afrmx.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-d9ig4h-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
 
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error);
    }

};

export default Connection;