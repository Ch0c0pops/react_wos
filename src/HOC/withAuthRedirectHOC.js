import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import Loader from "../components/common/Loader";

const withAuthRedirectHOC = (Component) => {

    class withAuthRedirect extends React.Component {

        render() {
            if (this.props.isAuth === null){
                return <Loader/>
            } else if (this.props.isAuth) {             //фокусы с if else
                return <Component {...this.props}/>
            } else {
                return <Redirect to='/login'/>
            }
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    const connectedWithAuthRedirect = connect(mapStateToProps)(withAuthRedirect)
    return connectedWithAuthRedirect
}
export default withAuthRedirectHOC


