import React, { Component } from 'react';
import axios from 'axios';

import PostsTableRow from '../posts-table-row/posts-table-row';
import './posts-table.css';

export default class PostsTable extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get('http://localhost:8000/posts/');
      this.setState({
        posts: data
      });
    } catch (error) {
      console.error(error);
    }
  }

  DataTable() {
    const { posts } = this.state;
    return posts.map((post, index) => {
      return (
        <PostsTableRow
          key={index}
          data={post}
          update={this.componentDidMount.bind(this)}
        />
      );
    });
  }

  render() {
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Categories</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{this.DataTable()}</tbody>
      </table>
    );
  }
}
