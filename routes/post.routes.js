import express from 'express';
import { getPosts, agregarPost } from '../src/controllers/posts.controller.js';
const router = express.Router();

router.get('/posts', getPosts)
router.post('/posts', agregarPost)

export default router