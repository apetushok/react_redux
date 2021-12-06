import {combineReducers} from "redux";
import {UsersReducer} from "./UsersReducer";
import {PostsReducer} from "./PostsReducer";


export const rootReducer = combineReducers({
    usersState: UsersReducer,
    postsState: PostsReducer
})