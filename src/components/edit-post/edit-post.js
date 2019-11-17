import React, { Component } from 'react';
import axios from 'axios';

import './edit-post.css';

export default class EditPost extends Component {
  state = {
    title: '',
    categories: '',
    content: ''
  };

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    axios
      .get(`http://localhost:8000/posts/edit-post/${id}`)
      .then(res => {
        const {
          data: { title, categories, content }
        } = res;
        this.setState({
          title,
          categories,
          content
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

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
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const post = {
      title,
      categories,
      content
    };

    try {
      const { data } = await axios.put(
        `http://localhost:8000/posts/update-post/${id}`,
        post
      );
      console.log(data);
      console.log('Post successfully updated');
    } catch (error) {
      console.error(error);
    }

    // Redirect to Posts List
    this.props.history.push('/posts');
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
          Update Post
        </button>
      </form>
    );
  }
}
