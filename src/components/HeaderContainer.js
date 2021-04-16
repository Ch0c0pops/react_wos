import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthorisedUserData} from "../Redux/Reducers/AuthReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(
            response => {
                debugger
                if (response.data.resultCode === 0) {
                    this.props.setAuthorisedUserData(response.data.data)
                }
            }
        )
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

const ConnectedHeaderContainer = connect(mapStateToProps, {setAuthorisedUserData})(HeaderContainer)

export default ConnectedHeaderContainer