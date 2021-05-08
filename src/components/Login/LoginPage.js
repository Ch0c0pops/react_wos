import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../Redux/Reducers/AuthReducer";
import {Redirect} from "react-router-dom";


const LoginPage = (props) => {

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return <div>
        <h1>Login page</h1>
        <LoginForm loginThunk={props.loginThunk} />
    </div>

}
const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})


const LoginPageContainer = connect(mapStateToProps, {loginThunk, logoutThunk})(LoginPage)

export default LoginPageContainer