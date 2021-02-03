import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import * as EaAccounts from "./EaAccounts";
import * as PlayersToBuy from "./activePlayers";
import * as Roles from "./roles";
import * as Users from "./users";

export interface ApplicationState {
  eaAccounts: EaAccounts.EaAccountsState | undefined;
  playersToBuy: PlayersToBuy.PlayersToBuyState | undefined;
  roles: Roles.RolesState | undefined;
  users: Users.UsersState | undefined;
}

export const reducers = {
  eaAccounts: EaAccounts.reducer,
  playersToBuy: PlayersToBuy.reducer,
  roles: Roles.reducer,
  users: Users.reducer,
};

export type AppThunk<ReturnType, ActionType> = ThunkAction<
  ReturnType,
  ApplicationState,
  null,
  Action<ActionType>
>;
