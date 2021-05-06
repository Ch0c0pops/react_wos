import React from "react"
import styles from '../../Styles/Profile.module.scss'
import SinglePost from "./SinglePost";
import NewPostForm from "./NewPostForm";

const Posts = (props) => {

    let mappedData = props.posts.map(obj => <SinglePost key={obj.id} msg={obj.msg}/>)

    return (<div className={styles.posts}>
            <NewPostForm addPostHandler={props.addPostHandler}/>
            {mappedData}
        </div>
    )
}

export default Posts;