import {connect} from "react-redux";
import {
    follow, unfollow, setUsers, setPagination,
    setCurrentPage, setReady, activateButton, disableButton,
    getUsersThunkCreator, getCurrentPageThunk, followUserThunk,
    unfollowUserThunk
} from "../../Redux/Reducers/UsersReducer";
import React from "react";
import Loader from "../common/Loader";
import Users from "./Users";
import {
    currentPageSelector, disabledButtonsIdSelector, getUsersSelector,
    isReadySelector,
    pageLimitSelector,
    totalCountSelector
} from "../Selectors/UsersSelectors";
import {UsersReducerInitialStateType} from "../../types";

type UsersContainerPropType = UsersReducerInitialStateType & {
    getUsersThunkCreator: (pageLimit: number, currentPage: number) => void
    getCurrentPageThunk: (p: number, pageLimit: number) => void
    followUserThunk: (userId: number) => void
    unfollowUserThunk: (userId: number) => void
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

const mapStateToProps = (state: any) => {
    return {
        users: getUsersSelector(state),
        totalCount: totalCountSelector(state),
        pageLimit: pageLimitSelector(state),
        currentPage: currentPageSelector(state),
        isReady: isReadySelector(state),
        disabledButtonsId: disabledButtonsIdSelector(state)
    }
};


const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setPagination,
    setCurrentPage, setReady, activateButton, disableButton,
    getUsersThunkCreator, getCurrentPageThunk, followUserThunk,
    unfollowUserThunk
})(UsersClassComponent);

export default UsersContainer;