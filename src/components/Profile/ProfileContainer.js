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
import withAuthRedirectHOC from "../../HOC/withAuthRedirectHOC";


class ProfileContainer extends React.Component {


    getProfileData() {
        let id = this.props.match.params.userId || this.props.authUserId
        this.props.getProfileThunk(id)
        this.props.getUserStatusThunk(id)
    }

    componentDidMount() {
        this.getProfileData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.getProfileData()
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    posts: state.profile.posts,
    profileData: state.profile.profileData,
    userStatus: state.profile.userStatus,
    authUserId: state.auth.id
})


export default compose(withAuthRedirectHOC, connect(mapStateToProps, {
    updatePostActionCreator, addPostActionCreator,
    getProfileThunk, setUserStatusThunk, getUserStatusThunk
}), withRouter)(ProfileContainer)