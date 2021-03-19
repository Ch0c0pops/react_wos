import React from "react"
import styles from '../../Styles/Profile.module.scss'

const SinglePost = (props) => {
    return (
        <div className={styles.singlePost}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOApFCSVByzhZorHUAP-J851JAYyOPtI1jdg&usqp=CAU"
                alt=""/>
            <div>{props.msg}</div>
        </div>
    )
}

export default SinglePost