import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";

const withAuthRedirectHOC = (Component) => {

    class withAuthRedirect extends React.Component {

        render() {
            if (!this.props.isAuth) {
                return <Redirect to='/login'/>
            }                                      //фокусы с if else
            return <Component {...this.props}/>

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


