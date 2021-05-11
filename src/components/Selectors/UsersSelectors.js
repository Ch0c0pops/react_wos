import {createSelector} from "reselect";

export const usersSelector = state => state.usersPage.users
export const totalCountSelector = state => state.usersPage.totalCount
export const pageLimitSelector = state => state.usersPage.pageLimit
export const currentPageSelector = state => state.usersPage.currentPage
export const isReadySelector = state => state.usersPage.isReady
export const disabledButtonsIdSelector = state => state.usersPage.disabledButtonsId


export const getUsersSelector = createSelector(usersSelector, (users)=> users.filter(u=> true))