import { Post } from '../models/Post';

export default async (req, res, next) => {
  const {
    params: { id }
  } = req;
  await Post.findByIdAndRemove(id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
};
