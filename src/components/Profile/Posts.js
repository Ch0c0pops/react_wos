import React from "react"
import styles from '../../Styles/Profile.module.scss'
import SinglePost from "./SinglePost";
import NewPostForm from "./NewPostForm";

const Posts = (props) => {

    let mappedData = props.posts.map(obj => <SinglePost key={obj.id} msg={obj.msg}/>)

    return (
        <div>
            <div className={styles.messageArea}>
                <NewPostForm addPostHandler={props.addPostHandler}/>
            </div>
            <div className={styles.posts}>
                {mappedData}
            </div>
        </div>

    )
}

export default Posts;