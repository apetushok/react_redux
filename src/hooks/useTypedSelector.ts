import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootReducer} from "../store/reducers";

type rootReducerType = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector