import React from 'react';
import {createPost} from "../actions";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostsList from './PostsList';

class NewPost extends React.Component {
    state = {
        title: '',
        body: '',
        formErrors: {title: '', body: ''},
        formIsValid: false,
        postIsSent: false,
        disableSubmit: false,
    }

    errorAlert(errorMessage) {
        toast.error(errorMessage, {
            position: "top-center",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

    }


    onSubmit = async e => {
        e.preventDefault();
        await this.setState({disableSubmit: true});
        //our request is very fast => button is being disabled/enabled very fast
        //If you want to see the button being disabled during the request,
        // please uncomment these 2 rows:
        //  const response= await jsonplaceholder.get('/photos');
        // console.log(response);
        await this.validateNewPost(this.state.title, this.state.body);
        if (this.state.formErrors.body === '' && this.state.formErrors.title === '') {
            await this.setState({formIsValid: true});
        } else {
            console.log(this.state.formErrors);
            if (this.state.formErrors.title !== '') {
                let titleError = this.state.formErrors.title;
                toast.error(titleError, {
                    position: "top-center",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            }
            if (this.state.formErrors.body !== '') {
                let bodyError= this.state.formErrors.body;

                toast.error(bodyError, {
                    position: "top-center",
                    autoClose: 7000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
            }

            await this.setState({disableSubmit: false});
        }
        if (this.state.formIsValid) {
            this.props.createPost(this.state.title, this.state.body);
            console.log('new post is sent');
            toast.info('New Post is submitted!', {
                position: "top-center",
                autoClose: 7000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            await this.setState({
                title: '',
                body: '',
                formErrors: {title: '', body: ''},
                formIsValid: false,
                postIsSent: false,
                disableSubmit: false
            })
        }
        //we have to clean the errors before each submit
        await this.setState({
            formErrors: {title: '', body: ''}
        });
    }
    async validateNewPost(title, body) {
        let titleErrorMessage= 'The title has to be at least 3 characters';
        let bodyErrorMessage='The body has to be at least 5 characters';
        if (title.length < 3&&body.length<5) {
            await this.setState({formErrors: {title: titleErrorMessage, body:bodyErrorMessage}});
        }

        else if (title.length>=3&& body.length<5){
            await this.setState({formErrors:{body: bodyErrorMessage}})
        }
        else if (title.length<3&&body.length>5){
            await this.setState({formErrors:{title: titleErrorMessage}})
        }
        else if (title.length > 3 && body.length > 5) {
            await this.setState({title: title, body: body})
        }

    }

    async handleTitleChange(e) {
        await this.setState({title: e.target.value});
    }

    async handleBodyChange(e) {
        await this.setState({body: e.target.value});
    }

    render() {
        return (
            <div>
                <div className="ui container">
                    <div>
                        <br/>
                        <h2>Make a new post</h2>
                        <br/>
                        <div className="ui inverted segment">
                            <div className="ui inverted form">
                                <div className="field">
                                    <label>Title</label>
                                    <input
                                        placeholder="Title"
                                        type="text"
                                        value={this.state.title}
                                        onChange={(e) => this.handleTitleChange(e)}/>
                                </div>
                                <div className="field">
                                    <label>Body</label>
                                    <textarea
                                        placeholder="Body"
                                        value={this.state.body}
                                        onChange={(e) => this.handleBodyChange(e)}/>
                                </div>
                            </div>
                            <button disabled={this.state.disableSubmit}
                                    onClick={(e) => this.onSubmit(e)}
                            >
                                Submit
                            </button>
                            <button>
                                <Link to="/posts">
                                    Posts
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={7000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                <br/>

                <PostsList/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        newPost: state.newPost
    };
}
export default connect(mapStateToProps, {createPost})(NewPost);