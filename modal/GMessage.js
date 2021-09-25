import mongoose from 'mongoose';

const GMessageSchema = new mongoose.Schema({
    groupId: {
        type: String
    },
    sender: {
        type: String
    },
    text: {
        type: String
    }
    },
    { 
        timestamps: true
    }    
)

const gmessage = mongoose.model('GMessage', GMessageSchema);

export default gmessage;
