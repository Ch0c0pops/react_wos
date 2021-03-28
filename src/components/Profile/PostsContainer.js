import React from "react"
import {addPostActionCreator, updatePostActionCreator} from "../../Redux/Reducers/ProfileReducer";
import Posts from "./Posts";


const PostsContainer = (props) => {

    let changeHandler = (e) => {
        let data = e.target.value
        props.dispatch(updatePostActionCreator(data))
    };
    let clickHandler = (e) => {
        props.dispatch(addPostActionCreator(e))
    }
    return (
        <Posts posts={props.posts} newPostMessage={props.newPostMessage}
               changeHandler={changeHandler} clickHandler={clickHandler}/>
    )
}

export default PostsContainer;