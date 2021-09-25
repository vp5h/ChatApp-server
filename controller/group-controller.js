import Group  from "../modal/Groups.js"


export const newGroup = async (request, response) => {
    let creatorId = request.body.creatorId;
    let memberIds = request.body.memberIds;
    let members = memberIds.split(',')
    let Gname = request.body.name
    const newGroup = new Group({
        gname: Gname,
        members: [creatorId,...members],
        info: request.body.info
    });

    try {
        const savedGroup = await newGroup.save();
        response.status(200).json(savedGroup);
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getGroups = async (request, response) => {
    try {
        const group = await Group.find({ members: { $in: [ request.body.sender] }});
        response.status(200).json(group);
    } catch (error) {
        response.status(500).json(error);
    }

}