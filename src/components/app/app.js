import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './app.css';

import CreatePost from '../create-post/create-post';
import EditPost from '../edit-post/edit-post';
import PostsTable from '../posts-table/posts-table';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <div className="h1">Blogger App</div>
                <Link to={'/posts'} className="btn btn-success">
                  Posts
                </Link>
              </div>
              <Switch>
                <Route exact path="/" component={CreatePost} />
                <Route path="/create-post" component={CreatePost} />
                <Route path="/edit-post/:id" component={EditPost} />
                <Route path="/posts" component={PostsTable} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
