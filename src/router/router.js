import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/LoginPage/LoginPage';
import Signup from '../pages/SignupPage/SignupPage';
import AddPost from '../pages/AddPostPage/AddPostPage';
import PostFeed from '../pages/PostFeedPage/PostFeedPage';
import PostDetails from '../pages/PostDetailsPage/PostDetailPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = ({rightButton, setRightButton}) => {
    return (
        <Switch styled="display=flex">
            <Route exact path="/login">
                <Login rightButton={rightButton} setRightButton={setRightButton}/>
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
            <Route exact path="/addpost">
                <AddPost />
            </Route>
            <Route exact path="/">
                <PostFeed />
            </Route>
            <Route exact path="/details/:id">
                <PostDetails />
            </Route>
            <Route >
                <ErrorPage />
            </Route>
        </Switch>
    )
}
export default Router;