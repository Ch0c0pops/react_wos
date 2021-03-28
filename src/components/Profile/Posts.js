import React from "react"
import styles from '../../Styles/Profile.module.scss'
import SinglePost from "./SinglePost";

const Posts = (props) => {

    let mappedData = props.posts.map(obj => <SinglePost key={obj.id} msg={obj.msg}/>)
    let newPostValue = React.createRef()

    return (
        <div className={styles.posts}>
            <div className={styles.textarea}>
                <textarea ref={newPostValue} value={props.newPostMessage} onChange={e => props.changeHandler(e)}/>
                <button onClick={() => {props.clickHandler(newPostValue.current.value)}}>отправить
                </button>
            </div>
            {mappedData}
        </div>
    )
}

export default Posts;