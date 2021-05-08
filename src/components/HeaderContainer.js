import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutThunk} from "../Redux/Reducers/AuthReducer";

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const ConnectedHeaderContainer = connect(mapStateToProps, {logoutThunk})(HeaderContainer)

export default ConnectedHeaderContainer