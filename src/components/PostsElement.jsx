import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class PostsElement extends Component {
    render() {
        const {id, userId,  title, body} = this.props.post;
        return (
            <div className="ui card">
                <div className="content">
                    <div className="header">
                        User Id={userId}
                        <br/>
                        Post Id={id}
                        <br/>
                        <Link to={`/posts/${id}`}>{title} </Link>
                    </div>
                    <div className="description">
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {posts: state.posts};
};
export default connect(
    mapStateToProps,
    {}
)(PostsElement);
