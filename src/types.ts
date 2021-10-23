import {PhotosType} from "./Redux/Reducers/ProfileReducer"



// ~~~~~~~~~~~~~~~~~~~~Users Reducer types~~~~~~~~~~~~~~~~~~~~~~

export type UserType = {
    id: number
    name: string
    status?: string
    photos: PhotosType
    followed: boolean
}
export type UsersReducerInitialStateType = {
    users: Array<UserType>
    totalCount: number
    pageLimit: number
    currentPage: number
    isReady: boolean
    disabledButtonsId: Array<number>
}