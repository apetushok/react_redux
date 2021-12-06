import {Dispatch} from "redux";
import axios from "axios";
import {
    FetchPostsAction,
    FetchPostsErrorAction,
    FetchPostsLoadingAction, Post,
    PostsAction,
    PostsActionTypes, SetUserIdAction
} from "../../types/PostsTypes";

export const fetchPosts = (userId:number = 0) => {
    return async (dispatch: Dispatch<PostsAction>) => {
        try {
            dispatch(fetchPostsLoadingAction(true))
            let params = {}
            if(userId){
                params = {userId}
            }
            const posts = await axios('https://jsonplaceholder.typicode.com/posts',{
                params: params
            })
            dispatch(fetchPostsAction(posts.data))
        }catch (e){
            dispatch(fetchPostsErrorAction('Posts were not found'))
        }
    }
}

const fetchPostsLoadingAction = (payload:boolean):FetchPostsLoadingAction => {
    return {type: PostsActionTypes.FETCH_POSTS_LOADING, payload}
}
const fetchPostsAction = (payload:Post[]):FetchPostsAction => {
    return {type: PostsActionTypes.FETCH_POSTS, payload}
}
const fetchPostsErrorAction = (payload:string):FetchPostsErrorAction => {
    return {type: PostsActionTypes.FETCH_POSTS_ERROR, payload}
}

export const setUserId = (userId:number) => {
    return (dispatch: Dispatch<SetUserIdAction>) => {
        dispatch(setUserIdAction(userId))
    }
}
const setUserIdAction = (payload:number):SetUserIdAction => {
    return {type: PostsActionTypes.SET_USER_ID, payload}
}
