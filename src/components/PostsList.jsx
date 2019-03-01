import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPosts} from "../actions";
import Loading from "./extra/Loading";
import PostListItem from "./PostsElement";

class PostsList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts.loading) return <Loading/>;
        return (
            <div>
                <h1>Posts List</h1>
                <div className="ui four cards" style={{align: "center"}}>
                    {this.props.posts.data.map(post => (
                        <PostListItem key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

export default connect(
    mapStateToProps,
    {fetchPosts}
)(PostsList);
