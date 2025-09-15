import { Router } from 'express';
import { createUser, listUsers, getUserById, deleteUser } from '../controllers/userController';


const router = Router();


router.post('/', createUser);
router.get('/', listUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);


export default router;