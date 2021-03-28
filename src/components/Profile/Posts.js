import React from "react"
import styles from '../../Styles/Profile.module.scss'
import SinglePost from "./SinglePost";
import {addPostActionCreator, updatePostActionCreator} from "../../Redux/Reducers/ProfileReducer";


const Posts = (props) => {

    let mappedData = props.PostsData.map(obj => <SinglePost key={obj.id} msg={obj.msg}/>)
    let newPostValue = React.createRef()

    let changeHandler = (e) => {
        let data = e.target.value
        props.dispatch(updatePostActionCreator(data))
    };

    return (
        <div className={styles.posts}>
            <div className={styles.textarea}>
                <textarea ref={newPostValue} value={props.newPostMessage} onChange={e => changeHandler(e)}/>
                <button onClick={() => {
                    props.dispatch(addPostActionCreator(newPostValue.current.value))
                }}>отправить
                </button>
            </div>
            {mappedData}
        </div>
    )
}

export default Posts;