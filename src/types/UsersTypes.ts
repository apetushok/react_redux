
export interface UsersState {
    users: User[]
    isLoading: boolean
    error: null | string
}

export interface User {
    id: number,
    name: string
}

export interface FetchUsersAction {
    type: string,
    payload: User[]
}
export interface FetchUsersLoadingAction {
    type: string,
    payload: any
}
export interface FetchUsersErrorAction {
    type: string,
    payload: string
}

export type UsersAction = FetchUsersAction | FetchUsersLoadingAction | FetchUsersErrorAction

export enum UsersActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_LOADING = 'FETCH_USERS_LOADING',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}