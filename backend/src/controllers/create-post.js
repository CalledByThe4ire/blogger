import { Post } from '../models/Post';

export default async (req, res, next) => {
  const { body } = req;
  await Post.create(body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
};
