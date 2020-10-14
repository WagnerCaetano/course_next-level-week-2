import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './mapper/convertHourToMinutes';
import ClassesController from './controllers/ClassesControler';
import ConnectionController from './controllers/ConnectionsController';

const routes = express.Router();

const classesControllers = new ClassesController();
const connectionControllers = new ConnectionController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connetions', connectionControllers.create);

export default routes;
