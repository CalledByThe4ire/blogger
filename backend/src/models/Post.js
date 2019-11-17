import mongoose from '../connections';
const { Schema, model } = mongoose;
const PostSchema = new Schema({
  title: {
    type: String
  },
  categories: {
    type: String
  },
  content: {
    type: String
  }
});
export const Post = model('Post', PostSchema);
