import mongoose from 'mongoose';

const GroupSchema = new mongoose.Schema({
    
    gname:{
        type: String
    } ,
    members: {
        type: Array
    },
    info: {
        type: String
    },
    message: {
        type: String
    }},
    {
        timestamps: true
    }
);

const group = mongoose.model('Group', GroupSchema);

export default group;