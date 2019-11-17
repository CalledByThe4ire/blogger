import { Post } from '../models/Post';

export default async (req, res, next) => {
  // eslint-disable-next-line array-callback-return
  await Post.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};
