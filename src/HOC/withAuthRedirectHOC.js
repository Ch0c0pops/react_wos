import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

const withAuthRedirectHOC = (Component) => {

    class withAuthRedirect extends React.Component {

        render() {
            return this.props.isAuth ? <Component {...this.props}/> : <Redirect to='/login'/>
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    const connectedWithAuthRedirect = connect(mapStateToProps, {})(withAuthRedirect)
    return connectedWithAuthRedirect
}
export default withAuthRedirectHOC


