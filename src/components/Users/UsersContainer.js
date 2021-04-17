import {connect} from "react-redux";
import {
    follow, unfollow, setUsers, setPagination,
    setCurrentPage, setReady
} from "../../Redux/Reducers/UsersReducer";
import React from "react";
import * as axios from "axios";
import Loader from "../common/Loader";
import Users from "./Users";


class UsersClassComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLimit}&page=${this.props.currentPage}`, {withCredentials:true})
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPagination(response.data.totalCount)
                this.props.setReady(true)
            })
    }

    currentPageHandler(p) {
        this.props.setReady(false)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLimit}&page=${p}`, {withCredentials:true})
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPagination(response.data.totalCount)
                this.props.setReady(true)
            })
    }

    followUser(userId) {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {'API-key': '2cf1f3d1-1662-44de-865d-16e2be373296'}
        }).then(
            response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(userId)
                }
            }
        )
    }

    unfollowUser(userId) {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {'API-key': '2cf1f3d1-1662-44de-865d-16e2be373296'}
        }).then(
            response => {
                if (response.data.resultCode === 0) {
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