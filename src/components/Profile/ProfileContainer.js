import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPostActionCreator,
    updatePostActionCreator,
    getProfileThunk, setUserStatusThunk, getUserStatusThunk
} from "../../Redux/Reducers/ProfileReducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.userId || this.props.authUserId
        this.props.getProfileThunk(id)
        this.props.getUserStatusThunk(id)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    posts: state.profile.posts,
    newPostMessage: state.profile.newPostMessage,
    profileData: state.profile.profileData,
    userStatus: state.profile.userStatus,
    authUserId: state.auth.id //|| 6505//!! добавлен id залогиненного пользователя
})

export default compose(connect(mapStateToProps, {updatePostActionCreator, addPostActionCreator,
    getProfileThunk, setUserStatusThunk, getUserStatusThunk}), withRouter)(ProfileContainer)