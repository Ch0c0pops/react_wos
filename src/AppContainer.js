import React from "react";
import {setAuthorisedUserDataThunk} from "./Redux/Reducers/AuthReducer";
import {connect} from "react-redux";
import App from "./App";

class AppContainer extends React.Component{
    componentDidMount() {
        this.props.setAuthorisedUserDataThunk()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props != prevProps){
            this.props.setAuthorisedUserDataThunk()
        }
    }

    render() {
     return   <App/>
    }
}

const mapStateToProps =(state)=>{
    return {
        isAuth: state.auth.isAuth,
        userStatus: state.profile. userStatus
    }
}
 const ConnectedAppContainer = connect(mapStateToProps, {setAuthorisedUserDataThunk})(AppContainer)

export default ConnectedAppContainer