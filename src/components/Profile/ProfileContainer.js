import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPostActionCreator,
    updatePostActionCreator,
    getProfileThunk
} from "../../Redux/Reducers/ProfileReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.userId || 2
        this.props.getProfileThunk(id)
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    posts: state.profile.posts,
    newPostMessage: state.profile.newPostMessage,
    profileData: state.profile.profileData
})

const ProfileContainerWithRouter = withRouter(ProfileContainer)

const ConnectedProfileContainer = connect(mapStateToProps, {
    updatePostActionCreator,
    addPostActionCreator, getProfileThunk
})(ProfileContainerWithRouter)

export default ConnectedProfileContainer