export interface User {
    username: string,
    password: string,
    isConfirmed?: boolean,
    createdDate: Date,
    eaAccounts: EaAccount[]
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

export const enum LoginStatus {
    Unknown,
    Logged,
    WaitingForSecurityCode,
    WrongSecurityCode,
    WrongCredentials
}

export enum SellDuration {
    OneHour,
    ThreeHours,
    SixHours,
    TwelveHours,
    OneDay,
    ThreeDays
}

export interface BidPlayerDTO {
    name: string,
    maxPrice: number
}

export interface SellPlayerDTO {
    name: string,
    bidPrice: number,
    binPrice: number,
    duration: SellDuration
}


//export type {
//    User,
//    EaAccount,
//    LoginResponse,
//    LoginToken
//};