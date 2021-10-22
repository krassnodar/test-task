export enum ActionTypes {
    LOGIN_USER = 'LOGIN_USER',
    LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
}

interface IState  {
    username: string;
    loading: boolean;
}

interface ILoginUserAction {
    type: ActionTypes.LOGIN_USER;
}

interface ILoginUserActionSuccess {
    type: ActionTypes.LOGIN_USER_SUCCESS;
    payload: string;
}

export type IAction = ILoginUserAction | ILoginUserActionSuccess

const initialState: IState = {
    username: '',
    loading: false
}

export const userReducer = (state = initialState, action:IAction):IState => {
    switch(action.type) {
        case 'LOGIN_USER':
            return {...state, loading: true}
        case 'LOGIN_USER_SUCCESS':
            return {username: action.payload, loading: false}
        default:
            return state;
        }
}