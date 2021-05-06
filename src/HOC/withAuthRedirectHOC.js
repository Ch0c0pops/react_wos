import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import Loader from "../components/common/Loader";

const withAuthRedirectHOC = (Component) => {

    class withAuthRedirect extends React.Component {

        render() {
            if (this.props.isAuth === null) {
                return <Loader/>
            } else if (this.props.isAuth === false) {
                return <Redirect to='/login'/>
            }
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


