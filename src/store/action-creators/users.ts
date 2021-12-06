import {
    FetchUsersAction,
    FetchUsersErrorAction,
    FetchUsersLoadingAction,
    User,
    UsersAction,
    UsersActionTypes
} from "../../types/UsersTypes";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch(fetchUsersLoadingAction(true))
            const users = await axios('https://jsonplaceholder.typicode.com/users')
            dispatch(fetchUsersAction(users.data))
        }catch (e){
            dispatch(fetchUsersErrorAction('Users were not found'))
        }
    }
}

const fetchUsersLoadingAction = (payload:boolean):FetchUsersLoadingAction => {
    return {type: UsersActionTypes.FETCH_USERS_LOADING, payload}
}
const fetchUsersAction = (payload:User[]):FetchUsersAction => {
    return {type: UsersActionTypes.FETCH_USERS, payload}
}
const fetchUsersErrorAction = (payload:string):FetchUsersErrorAction => {
    return {type: UsersActionTypes.FETCH_USERS_ERROR, payload}
}
