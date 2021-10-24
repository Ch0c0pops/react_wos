import {connect} from "react-redux"
import {
    follow, unfollow, setUsers, setPagination,
    setCurrentPage, setReady, activateButton, disableButton,
    getUsersThunkCreator, getCurrentPageThunk, followUserThunk,
    unfollowUserThunk
} from "../../Redux/Reducers/UsersReducer"
import React from "react"
import Loader from "../common/Loader"
import Users from "./Users"
import {
    currentPageSelector, disabledButtonsIdSelector, getUsersSelector,
    isReadySelector,
    pageLimitSelector,
    totalCountSelector
} from "../Selectors/UsersSelectors";
import {UsersReducerInitialStateType, UserType} from "../../types"
import {StateType} from "../../Redux/Store"

type UsersContainerPropType = UsersReducerInitialStateType & MapDispatchType & OwnPropsType
type OwnPropsType = {}
type MapStateType = UsersReducerInitialStateType
type MapDispatchType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    setPagination: (totalCount: number) => void
    setCurrentPage: (currentPage: number) => void
    setReady: (isReady: boolean) => void
    activateButton: (userId: number) => void
    disableButton: (userId: number) => void
    getUsersThunkCreator: (pageLimit: number, currentPage: number) => void
    getCurrentPageThunk: (p: number, pageLimit: number) => void
    followUserThunk: (userId: number) => void
    unfollowUserThunk: (userId: number) => void
    //здесь описаны функции из map dispatch to props, сделанного по упрощенному синтаксису. На первый взгляд
    // странно, что такие action creator-ы как follow, unfolow и т.д. в описании ничего не возвращают (void)
    //ведь они возвращают экшн объект, но здесь, в mdtp, мы имеем дело не напрямую с этими функциями, а с невидимым
    //коллбэуком-оберткой вокруг них, создаваемым библиотекой, потому этот коллбэк и возвращает void.
}

class UsersClassComponent extends React.Component<UsersContainerPropType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageLimit, this.props.currentPage)
    }

    currentPageHandler(p: number) {
        this.props.getCurrentPageThunk(p, this.props.pageLimit)
    }

    followUser(userId: number) {
        this.props.followUserThunk(userId)
    }

    unfollowUser(userId: number) {
        this.props.unfollowUserThunk(userId)
    }

    render() {

        return this.props.isReady ? <Users totalCount={this.props.totalCount}
                                           pageLimit={this.props.pageLimit}
                                           currentPage={this.props.currentPage}
                                           disabledButtonsId={this.props.disabledButtonsId}
                                           currentPageHandler={this.currentPageHandler.bind(this)}
                                           followUser={this.followUser.bind(this)}
                                           unfollowUser={this.unfollowUser.bind(this)}
                                           users={this.props.users}/> : <Loader/>
    }

}

const mapStateToProps = (state: StateType): MapStateType => {
    return {
        users: getUsersSelector(state),
        totalCount: totalCountSelector(state),
        pageLimit: pageLimitSelector(state),
        currentPage: currentPageSelector(state),
        isReady: isReadySelector(state),
        disabledButtonsId: disabledButtonsIdSelector(state)
    }
};

//  <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
//  ^ типы, принимаемые функцией connect. Для просмотра ctrl+ click на названии функции
const UsersContainer = connect<MapStateType, MapDispatchType, OwnPropsType, StateType>(mapStateToProps, {
    follow, unfollow, setUsers, setPagination,
    setCurrentPage, setReady, activateButton, disableButton,
    getUsersThunkCreator, getCurrentPageThunk, followUserThunk,
    unfollowUserThunk
})(UsersClassComponent)

export default UsersContainer