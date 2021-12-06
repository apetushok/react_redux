import {UsersAction, UsersActionTypes, UsersState} from "../../types/UsersTypes";

const initState: UsersState = {
    users: [],
    isLoading: false,
    error: null
}

export const UsersReducer = (state = initState, action: UsersAction): UsersState => {
    switch (action.type){
        case UsersActionTypes.FETCH_USERS_LOADING:
            return {...state, users: [], isLoading: true, error: null}
        case UsersActionTypes.FETCH_USERS:
            return {...state, users: action.payload, isLoading: false, error: null}
        case UsersActionTypes.FETCH_USERS_ERROR:
            return {...state, users: [], isLoading: false, error: action.payload}
        default:
            return state;
    }
}