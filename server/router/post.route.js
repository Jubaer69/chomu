import express from 'express';
import { allposts, createpost, deletepost, view } from '../controllers/post.control.js';

const router = express.Router();

router.post('/createpost', createpost)
router.post('/deletepost', deletepost)
router.get('/getallposts', allposts)
router.post('/viewpost', view)

export default router