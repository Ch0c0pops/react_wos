import React from "react";
import App from "./App";
import {connect} from "react-redux";
import {setAuthorisedUserDataThunk} from "./Redux/Reducers/AuthReducer";
import Loader from "./components/common/Loader";



class AppContainer extends React.Component{

    componentDidMount() {
        this.props.setAuthorisedUserDataThunk()
    }


    render(){
        return <>
            {this.props.id ? <App/> : <Loader/>}
        </>
    }
}

const mapStateToProps = (state)=>{
    return {
        id: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

    const ConnectedAppContainer = connect(mapStateToProps, {setAuthorisedUserDataThunk})(AppContainer)

export default ConnectedAppContainer
