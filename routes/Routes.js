import express from 'express';


import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { addUser, getUser } from '../controller/user-controller.js';
import { newMessage, getMessage }from '../controller/message-controller.js';
import { newGMessage, getGMessage }from '../controller/Gmessage-controller.js';
import {newGroup, getGroups} from '../controller/group-controller.js'


const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUser);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);



route.post('/group/add', newGroup);
route.post('/group/get', getGroups);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);

route.post('/gmessage/add', newGMessage);
route.get('/gmessage/get/:id', getGMessage);

export default route;