import { Request, Response } from 'express';
import { User, Iuser } from '../models/User';


export const createUser = async (req: Request, res: Response): Promise<Response> => {
try {
const body = req.body as Partial<Iuser>;
const u = new User(body);
const saved = await u.save();
return res.status(201).json(saved);
} catch (err: any) {
return res.status(400).json({ error: err.message });
}
};


export const listUsers = async (_req: Request, res: Response): Promise<Response> => {
try {
const users = await User.find().sort({ createdAt: -1 });
return res.json(users);
} catch (err: any) {
return res.status(500).json({ error: err.message });
}
};


export const getUserById = async (req: Request, res: Response): Promise<Response> => {
try {
const { id } = req.params;
const user = await User.findById(id);
if (!user) return res.status(404).json({ error: 'User not found' });
return res.json(user);
} catch (err: any) {
return res.status(500).json({ error: err.message });
}
};


export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
try {
const { id } = req.params;
await User.findByIdAndDelete(id);
return res.status(204).send();
} catch (err: any) {
return res.status(500).json({ error: err.message });
}
};