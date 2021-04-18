import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthorisedUserData, setAuthorisedUserDataThunk} from "../Redux/Reducers/AuthReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthorisedUserDataThunk()
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

const ConnectedHeaderContainer = connect(mapStateToProps, {
    setAuthorisedUserData,
    setAuthorisedUserDataThunk
})(HeaderContainer)

export default ConnectedHeaderContainer