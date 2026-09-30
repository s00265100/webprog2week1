import { Router } from 'express'; 

import { CarController } from '../Controllers/cars'; 

import {validate} from '../middleware/validate.middleware';
import {createcarzSchema}  from '../models/cars';

 

const router = Router(); 

const carController = new CarController(); 

router.post('/', validate(createcarzSchema), carController.createCar);

router.get('/', carController.getCars); 

 

router.get('/:id', carController.getCarById); 

router.post('/', carController.createCar); 

router.put('/:id', carController.updateCar); 

router.delete('/:id', carController.deleteCar); 

 

export default router; 