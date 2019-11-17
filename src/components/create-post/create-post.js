import React, { Component } from 'react';
import axios from 'axios';

import './create-post.css';

export default class CreatePost extends Component {
  state = {
    title: '',
    categories: '',
    content: ''
  };

  handleChangePostName = ({ target: { value } }) => {
    this.setState({ title: value });
  };

  handleChangePostCategories = ({ target: { value } }) => {
    this.setState({ categories: value });
  };

  handleChangePostContent = ({ target: { value } }) => {
    this.setState({ content: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { title, categories, content } = this.state;
    const regexp = /^\d{2}.\d{2}.\d{4}/;

    if (!title.match(regexp)) {
      this.setState({
        title: '',
        categories: '',
        content: ''
      });
    } else {
      const post = {
        title,
        categories,
        content
      };

      const { data } = await axios.post(
        'http://localhost:8000/posts/create-post',
        post
      );
      console.log(data);

      this.setState({
        title: '',
        categories: '',
        content: ''
      });
    }
  };

  render() {
    const { title, categories, content } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Title"
            value={title}
            onChange={this.handleChangePostName}
          />
          <small className="form-text text-muted">
            Title should start with the date in the format dd.mm.yyyy
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <input
            type="text"
            className="form-control"
            id="categories"
            placeholder="Enter Categories"
            value={categories}
            onChange={this.handleChangePostCategories}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="3"
            value={content}
            onChange={this.handleChangePostContent}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    );
  }
}
