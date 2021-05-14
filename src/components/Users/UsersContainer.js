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