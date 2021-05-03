import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {loginThunk} from "../../Redux/Reducers/AuthReducer";


const LoginPage = (props) => {

    return <div>
        <h1>Login page</h1>
        <LoginForm loginThunk={props.loginThunk}/>
    </div>

}
const mapStateToProps=(state)=>{
    return{

    }
}

const LoginPageContainer = connect(mapStateToProps, {loginThunk})(LoginPage)

export default LoginPageContainer