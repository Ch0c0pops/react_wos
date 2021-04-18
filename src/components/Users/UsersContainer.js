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


class UsersClassComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageLimit, this.props.currentPage)
    }

    currentPageHandler(p) {
        this.props.getCurrentPageThunk(p, this.props.pageLimit)
    }

    followUser(userId) {
        this.props.followUserThunk(userId)
    }

    unfollowUser(userId) {
        this.props.unfollowUserThunk(userId)
    }

    render() {

        return this.props.isReady === true ? <Users totalCount={this.props.totalCount}
                                                    pageLimit={this.props.pageLimit}
                                                    currentPage={this.props.currentPage}
                                                    disabledButtonsId={this.props.disabledButtonsId}
                                                    currentPageHandler={this.currentPageHandler.bind(this)}
                                                    followUser={this.followUser.bind(this)}
                                                    unfollowUser={this.unfollowUser.bind(this)}
                                                    users={this.props.users}/> : <Loader/>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageLimit: state.usersPage.pageLimit,
        currentPage: state.usersPage.currentPage,
        isReady: state.usersPage.isReady,
        disabledButtonsId: state.usersPage.disabledButtonsId
    }
};


const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setPagination,
    setCurrentPage, setReady, activateButton, disableButton,
    getUsersThunkCreator, getCurrentPageThunk, followUserThunk,
    unfollowUserThunk
})(UsersClassComponent);

export default UsersContainer;