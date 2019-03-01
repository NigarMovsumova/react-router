import React from 'react';

class WelcomeComponent extends React.Component {


    render() {
        return (
            <div id='my-container'>
                <h1>Welcome to our app</h1>
                <h2>Tasks</h2>
                <p>
                    <h3>
                        1. Create a separate page with a form to add new post (URL: /posts/new).
                        <br/>
                        - Form should contain title, text and submit button.
                        <br/>
                        - Once the post is added - navigate to the posts list page.
                        (Please first of all read and understand routing).
                    </h3>
                </p>
                <p>
                    <h3>
                        2. Add validation to that form.
                        <br/>
                        - Title must not be empty and minimum length is 3 symbols.
                        <br/>
                        - Text must not be empty and minimum length is 140 symbols.
                        <br/>
                        - Submit button must be disabled while form is submitting.
                        <br/>
                        - Once the form is subbmitted - clear the form, clear errors, and enable submit button.
                    </h3>
                </p>
                <p>
                    <h3>
                        3. Create a new page to view post details (URL: /posts/post_id>)
                        <br/>
                        - User can navigate to this page by clicking to the row in posts table
                        <br/>
                        - Display post title & text
                        <br/>
                        - Add button "Go to posts list" to navigate to '/posts' page
                    </h3>
                </p>
            </div>
        )
    }


}

export default WelcomeComponent;