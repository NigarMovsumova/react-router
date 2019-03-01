import React from "react";
import {Link} from "react-router-dom";

export default () => {
    return (
        <div className="ui inverted menu fixed">

            <Link to="/" className="active item">
                Home
            </Link>

            <Link to="/posts" className="active item">
                Posts List
            </Link>
            <Link to='/new' className='active item'>
                New Post
            </Link>

        </div>
    );
};
