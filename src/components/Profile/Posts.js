import React from "react"
import styles from '../../Styles/Profile.module.scss'
import SinglePost from "./SinglePost";


const Posts = ({PostsData, addPost, addPostHandler, newPostMessage}) => {

    let mappedData = PostsData.map(obj => <SinglePost key={obj.id} msg={obj.msg}/>)
    let newPostValue = React.createRef()

    return (
        <div className={styles.posts}>
            <div className={styles.textarea}>
                <textarea ref={newPostValue} value={newPostMessage} onChange={addPostHandler}/>
                <button onClick={() => {
                    addPost(newPostValue.current.value)
                }}>отправить
                </button>
            </div>
            {mappedData}
        </div>
    )
}

export default Posts