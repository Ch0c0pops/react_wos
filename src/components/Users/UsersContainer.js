import {connect} from "react-redux";
import {
    follow, unfollow, setUsers, setPagination,
    setCurrentPage, setReady
} from "../../Redux/Reducers/UsersReducer";
import React from "react";
import Loader from "../common/Loader";
import Users from "./Users";
import {usersAPI} from "../../API/usersAPI";


class UsersClassComponent extends React.Component {

    componentDidMount() {
        usersAPI.getUsers(this.props.pageLimit, this.props.currentPage)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPagination(response.data.totalCount)
                this.props.setReady(true)
            })
    }

    currentPageHandler(p) {
        this.props.setReady(false)
        this.props.setCurrentPage(p)
        usersAPI.getCurrentPage(this.props.pageLimit, p)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPagination(response.data.totalCount)
                this.props.setReady(true)
            })
    }

    followUser(userId) {

        usersAPI.follow(userId)

            .then(
                data => {
                    if (data.resultCode === 0) {
                        this.props.follow(userId)
                    }
                }
            )
    }

    unfollowUser(userId) {

        usersAPI.unfollow(userId)
            .then(
                data => {
                    if (data.resultCode === 0) {
                        this.props.unfollow(userId)
                    }
                }
            )
    }

    render() {

        return this.props.isReady === true ? <Users totalCount={this.props.totalCount}
                                                    pageLimit={this.props.pageLimit}
                                                    currentPage={this.props.currentPage}
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
        isReady: state.usersPage.isReady
    }
};


const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setUsers, setPagination,
    setCurrentPage, setReady
})(UsersClassComponent);

export default UsersContainer;