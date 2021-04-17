import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    addPostActionCreator,
    setProfileActionCreator,
    updatePostActionCreator
} from "../../Redux/Reducers/ProfileReducer";
import {profileAPI} from "../../API/profileAPI";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.userId || 2
        profileAPI.getProfile(id).then(
            data => this.props.setProfile(data)
        )
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

const mapDispatchToProps = (dispatch) => {
    return {
        changeHandler: (e) => {
            let data = e.target.value
            dispatch(updatePostActionCreator(data))
        },
        clickHandler: (e) => {
            dispatch(addPostActionCreator(e))
        },
        setProfile: (profile) => {
            dispatch(setProfileActionCreator(profile))
        }
    }
}
const ProfileContainerWithRouter = withRouter(ProfileContainer)

const ConnectedProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerWithRouter)

export default ConnectedProfileContainer