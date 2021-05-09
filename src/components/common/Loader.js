import React from "react";
import loader from '../../assets/photo/loader.gif'
import styles from '../../Styles/Loader.module.scss'

const Loader = () => {

    return (
        <div className={styles.loader}>
            <img src={loader} alt=""/>
        </div>
        )

}

export default Loader