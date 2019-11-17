import { Post } from '../models/Post';

export default async (req, res, next) => {
  const {
    params: { id }
  } = req;
  await Post.findById(id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};
