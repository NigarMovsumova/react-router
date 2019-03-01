1. Create a separate page with a form to add new post (URL: /posts/new).
   - Form should contain title+, text+ and submit+ button.
   - Once the post is added - navigate to the posts list page.
   (Please first of all read and understand routing).

2. Add validation to that form.
   - Title must not be empty and minimum length is 3 symbols.
   - Text must not be empty and minimum length is 140 symbols.
   - Submit button must be disabled while form is submitting.
   - Once the form is subbmitted - clear the form, clear errors, and enable submit button.

3. Create a new page to view post details (URL: /posts/<post_id>)
   - User can navigate to this page by clicking to the row in posts table
   - Display post title & text
   - Add button "Go to posts list" to navigate to '/posts' page
