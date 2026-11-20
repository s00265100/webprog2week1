
import { Router } from 'express';

import { CarController } from '../Controllers/cars';

import { validate } from '../middleware/validate.middleware';

import {
    createcarzSchema,
    updateCarZSchema,
    carParamsSchema
} from '../models/cars';

const router = Router();

const carController = new CarController();

// Get all carrs
router.get('/', carController.getCars);

// Get a car by ID
router.get('/:id', validate(carParamsSchema), carController.getCarById);

// Create a car
router.post('/', validate(createcarzSchema), carController.createCar);

// Update a car
router.put('/:id', validate(carParamsSchema), validate(updateCarZSchema), carController.updateCar);

// Delete a car
router.delete('/:id', validate(carParamsSchema), carController.deleteCar);

export default router;
