import { Action, Reducer } from 'redux';
import { AppThunk, } from '.';
import { LoginResponse, User } from '../interfaces/Models';
import { toast } from "react-toastify";
import { login } from "../services/db/usersDbService";

export interface UserState {
    isLoginSuccessful: boolean,
    user: User;
}

const emptyUser: User = {
    username: "",
    password: "",
    createdDate: new Date()
}

export interface AddUserAction { type: 'ADD_USER', user: User }
export interface LoginUserRequestedAction { type: 'LOGIN_USER_REQUESTED' }
export interface LoginUserSucceededAction { type: "LOGIN_USER_SUCCEEDED", user: User }
export interface LoginUserFailedAction { type: "LOGIN_USER_FAILED" };
export interface LogoutUserAction { type: 'LOGOUT_USER', user: User }

export type KnownAction = AddUserAction | LoginUserRequestedAction | LoginUserSucceededAction | LoginUserFailedAction | LogoutUserAction;

const loginRequested = () => ({ type: 'LOGIN_USER_REQUESTED' } as LoginUserRequestedAction);
const loginSucceeded = (user: User) => ({ type: 'LOGIN_USER_SUCCEEDED', user } as LoginUserSucceededAction);
const loginFailed = () => ({ type: 'LOGIN_USER_FAILED' } as LoginUserFailedAction);
const logoutSuccess = () => ({ type: 'LOGOUT_USER' } as LogoutUserAction)

export const actionCreators = {
    login: (user: User): AppThunk<Promise<boolean>, KnownAction> => {
        return async (dispatch): Promise<boolean> => {
            if (user) {
                return login(user).then((loginResponse: LoginResponse): boolean => {
                    if (loginResponse.isSuccessful) {
                        toast.success("You've logged in successfully!");
                        dispatch<any>(loginSucceeded(user))
                    }
                    else {
                        toast.error("Login failed! Check your credentials!");
                        dispatch<any>(loginFailed());
                    }
                    return loginResponse.isSuccessful;
                });
            } else return false;
        };
    }
};

export const reducer: Reducer<UserState> = (state: UserState | undefined, incomingAction: Action): UserState => {
    if (state === undefined) {
        return {
            isLoginSuccessful: false,
            user: emptyUser
        };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'LOGIN_USER_REQUESTED':
            return state;
        case 'LOGIN_USER_SUCCEEDED':
            return { ...state, user: action.user, isLoginSuccessful: true };
        case "LOGIN_USER_FAILED":
            return { ...state, isLoginSuccessful: false };
        case 'LOGOUT_USER':
            return { user: emptyUser, isLoginSuccessful: false };
        default:
            return state;
    }
};
