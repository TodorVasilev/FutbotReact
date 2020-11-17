export interface User {
    username: string,
    password: string,
    isConfirmed?: boolean,
    createdDate: Date,
    eaAccounts?: Array<EaAccount>
}

export interface EaAccount {
    username: string,
    password: string
}

export interface LoginResponse {
    isSuccessful: boolean,
    token: LoginToken,
}

export interface LoginToken {
    expires_in: Date,
    access_token: string,
    isConfirmed: boolean,
    username: string
}

//export type {
//    User,
//    EaAccount,
//    LoginResponse,
//    LoginToken
//};