export default (state = { loading: true, data: [] }, action) => {
  switch (action.type) {
    case 'POSTS_FETCHED':
      return { ...state, data: action.payload };
    case 'POSTS_LOADING':
      return { ...state, loading: action.payload };
    case 'POST_FETCHED': {
      return { ...state, data: [...state.data, action.payload] };
    }
    case 'CREATE_POST':{
      return {...state,  data:[action.payload,...state.data]}
    }
    default:
      return state;
  }
};