import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunk, logoutThunk} from "../../Redux/Reducers/AuthReducer";
import {Redirect} from "react-router-dom";
import styles from '../../Styles/Login.module.scss'

const LoginPage = (props) => {

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return <div className={styles.loginPage}>
        <LoginForm loginThunk={props.loginThunk} />
    </div>

}
const mapStateToProps = (state) => ({isAuth: state.auth.isAuth})


const LoginPageContainer = connect(mapStateToProps, {loginThunk, logoutThunk})(LoginPage)

export default LoginPageContainer