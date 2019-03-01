import jsonPlaceHolder from "../apis/jsonPlaceHolder";

const setPostLoadingState = loadingState => {
    return {
        type: 'POSTS_LOADING',
        payload: loadingState
    };
};
export const fetchPost = (id) => async dispatch => {
    dispatch(setPostLoadingState(true));
    const result = await jsonPlaceHolder.get(`/posts/${id}`);
    dispatch({
        type: 'POST_FETCHED',
        payload: result.data
    });

    dispatch(setPostLoadingState(false));
};
let loaded= false;
export const fetchPosts = () => async dispatch => {
    if (!loaded) {
        dispatch(setPostLoadingState(true));
        const result = await jsonPlaceHolder.get("/posts");
        dispatch({
            type: 'POSTS_FETCHED',
            payload: result.data
        });
        dispatch(setPostLoadingState(false));
        loaded=true;
    }
    else {
        dispatch({
            type:'SAVED_POSTS',
        })
    }
};
export const createPost = (title, body) => async dispatch => {
        dispatch(setPostLoadingState(true));
        const createdPost = {id: 105, userId: 1, body: body, title: title}
        const response = await jsonPlaceHolder.post('/posts', createdPost);
        dispatch({
            type: 'CREATE_POST',
            payload: response.data
        });
        dispatch(setPostLoadingState(false));
}



