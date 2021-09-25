import GMessage from "../modal/GMessage.js";
import Group from '../modal/Groups.js';


export const newGMessage = async (request, response) => {
    const newGMessage = new GMessage(request.body);
    // console.log(request.body, newGMessage)
    try {
        await newGMessage.save();
        await Group.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        response.status(200).json("Message has been sent successfully");
    } catch (error) {
        response.status(500).json(error);
    }

}


export const getGMessage = async (request, response) => {
    try {
        const gmessages = await GMessage.find({ groupId: request.params.id });
        response.status(200).json(gmessages);
    } catch (error) {
        response.status(500).json(error);
    }

}