import { Dispatch } from "redux";
import { ActionTypes, IAction } from "../reducers/userReducer";

export const loginUser = (username: string) => {
    return async (dispatch: Dispatch<IAction>) => {
        dispatch({
            type: ActionTypes.LOGIN_USER
        })

        try {
            dispatch({
                type: ActionTypes.LOGIN_USER_SUCCESS,
                payload: username
            })
        }
        catch {
            console.log('error');
        }
    }
}