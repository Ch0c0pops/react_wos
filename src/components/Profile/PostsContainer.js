import {addPostActionCreator, updatePostActionCreator} from "../../Redux/Reducers/ProfileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    debugger
    return {
        posts: state.profile.posts,
        newPostMessage: state.profile.newPostMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHandler: (e) => {
            let data = e.target.value
            dispatch(updatePostActionCreator(data))
        },
        clickHandler: (e) => {
            dispatch(addPostActionCreator(e))
        }
    }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;