import {PostsAction, PostsActionTypes, PostsState} from "../../types/PostsTypes";

const initState: PostsState = {
    posts: [],
    userId: 0,
    isLoading: false,
    error: null
}

export const PostsReducer = (state = initState, action: PostsAction): PostsState => {
    switch (action.type){
        case PostsActionTypes.FETCH_POSTS_LOADING:
            return {...state, posts: [], isLoading: true, error: null}
        case PostsActionTypes.FETCH_POSTS:
            return {...state, posts: action.payload, isLoading: false, error: null}
        case PostsActionTypes.SET_USER_ID:
            return {...state, userId: action.payload}
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {...state, posts: [], isLoading: false, error: action.payload}
        default:
            return state;
    }
}