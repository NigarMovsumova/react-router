import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../actions";

import Loader from "./extra/Loading";

class Post extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        if (!this.props.post) return <Loader/>;
        const {id, userId, title, body} = this.props.post;
        return (
            <div>
                <div className="ui segment">
                    <h1>{title}</h1>
                    <p>{body}</p>
                    <p>User Id:{userId}</p>
                    <p>Post Id:{id}</p>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
    const postId = props.match.params.id;
    return {
        post: state.posts.data.find(post => post.id == postId),
        postLoading: state.posts.loading,
    };
};


export default connect(
    mapStateToProps,
    {fetchPost})(Post)
