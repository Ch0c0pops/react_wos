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

    componentDidMount() {
        let id = this.props.match.params.userId || this.props.authUserId
        this.props.getProfileThunk(id)
        this.props.getUserStatusThunk(id)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userStatus !== this.props.userStatus) {
            let id = this.props.match.params.userId || this.props.authUserId
            this.props.getUserStatusThunk(id)
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    posts: state.profile.posts,
    newPostMessage: state.profile.newPostMessage, //так как за хранение данных в формах теперь отвечает react final form, эту часть кода и все, что с ней связано можно удалить
    profileData: state.profile.profileData,
    userStatus: state.profile.userStatus,
    authUserId: state.auth.id //|| 6505//!! добавлен id залогиненного пользователя
})


export default compose(withAuthRedirectHOC, connect(mapStateToProps, {
    updatePostActionCreator, addPostActionCreator,
    getProfileThunk, setUserStatusThunk, getUserStatusThunk
}), withRouter)(ProfileContainer)