import { Post } from '../models/Post';

export default async (req, res, next) => {
  const {
    params: { id }
  } = req;
  const { body } = req;
  await Post.findByIdAndUpdate(
    id,
    {
      $set: body
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log('Post updated successfully !');
      }
    }
  );
};
