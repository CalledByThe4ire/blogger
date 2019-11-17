import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './posts-table-row.css';

export default class PostsTableRow extends Component {
  deletePost = async () => {
    const {
      data: { _id }
    } = this.props;
    const { update } = this.props;
    try {
      await axios.delete(`http://localhost:8000/posts/delete-post/${_id}`);
      update();
      console.log('Post successfully deleted!');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      data: { title, categories, content, _id }
    } = this.props;
    return (
      <tr>
        <td className="align-middle">{title}</td>
        <td className="align-middle">{categories}</td>
        <td className="align-middle">{content}</td>
        <td className="d-flex justify-content-center flex-wrap align-items-center">
          <Link
            className="badge badge-primary mt-2 mb-2 mr-2"
            to={`/edit-post/${_id}`}
          >
            Edit Post
          </Link>
          <button
            type="button"
            className="badge badge-danger mt-2 mb-2"
            onClick={this.deletePost}
          >
            Delete Post
          </button>
        </td>
      </tr>
    );
  }
}
