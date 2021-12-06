
export interface PostsState {
    posts: Post[]
    userId: number
    isLoading: boolean
    error: null | string
}

export interface Post {
    id: number,
    userId: number,
    title: string
}

export interface FetchPostsAction {
    type: string,
    payload: Post[]
}
export interface FetchPostsLoadingAction {
    type: string,
    payload: any
}
export interface FetchPostsErrorAction {
    type: string,
    payload: string
}
export interface SetUserIdAction {
    type: string,
    payload: number
}

export type PostsAction = FetchPostsAction | FetchPostsLoadingAction | FetchPostsErrorAction

export enum PostsActionTypes {
    FETCH_POSTS = 'FETCH_POSTS',
    SET_USER_ID = 'SET_USER_ID',
    FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'
}