import { Router } from 'express'; 

import { CarController } from '../Controllers/cars'; 

import {validate} from '../middleware/validate.middleware';
import {createcarzSchema}  from '../models/cars';

 

const router = Router(); 

const carController = new CarController(); 

router.post('/', validate(createcarzSchema), carController.createCar);

//If I receive GET /cars, use getCars
router.get('/', carController.getCars); 

 

router.get('/:id', carController.getCarById); 
//if someone sends post /car run create car

router.post('/', carController.createCar); 

router.put('/:id', carController.updateCar); 

router.delete('/:id', carController.deleteCar); 

 

export default router; 