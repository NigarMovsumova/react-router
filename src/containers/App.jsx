import React from "react";
import {BrowserRouter,  Route } from "react-router-dom";
import Header from "../components/extra/Header";
import Post from "../components/Post";
import PostNew from '../components/PostNew';
import WelcomeComponent from '../components/extra/WelcomeComponent';
import PostsList from '../components/PostsList'

export default () => {
  return (
    <div>
      <BrowserRouter>
        <div className="ui main container" style={{ marginTop: "60px" }}>
            <Header />
            <Route path='/' exact component={WelcomeComponent}/>
            <Route path='/new' exact  component={PostNew}/>
            <Route path="/posts" exact component={PostsList} />
            <Route path="/posts/:id" component={Post} />
        </div>
      </BrowserRouter>
    </div>
  );
};
