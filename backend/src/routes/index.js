import createPost from '../controllers/create-post';
import readPosts from '../controllers/read-posts';
import editPost from '../controllers/edit-post';
import updatePost from '../controllers/update-post';
import deletePost from '../controllers/delete-post';
import express from 'express';
const router = express.Router();


// CREATE Post
router.route('/create-post').post(createPost);

// READ Posts
router.route('/').get(readPosts);

// Get Post
router.route('/edit-post/:id').get(editPost);

// Update Post
router.route('/update-post/:id').put(updatePost);

// Delete Post
router.route('/delete-post/:id').delete(deletePost);

export default router;
