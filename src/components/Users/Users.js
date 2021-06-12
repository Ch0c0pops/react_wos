import React from 'react';
import styles from './../../Styles/UsersPage.module.scss'
import userAvatar from '../../assets/photo/userAvatar.jfif'
import {NavLink} from "react-router-dom";
import CustomPagination from "../common/Pagination";


const Users = (props) => {
    // const pagesAmount = props.totalCount / props.pageLimit
    // let pages = [];
    // for (let i = 1; i <= pagesAmount; i++) {
    //     pages.push(i)
    // }


    return (<div>
            <CustomPagination totalCount = {props.totalCount} pageLimit={props.pageLimit}
                              currentPage={props.currentPage} currentPageHandler={props.currentPageHandler}/>
            {/*<div className={styles.users__pagination}>{pages.map(p => <span*/}
            {/*    className={p === props.currentPage ? styles.users__currentPage : ""}*/}
            {/*    onClick={() => props.currentPageHandler(p)}>{p}</span>)}*/}
            {/*</div>*/}

            <div className={styles.usersMainWrapper}>
                {props.users.map(u => (<div key={u.id} className={styles.users__wrap}>

                    <NavLink to={"profile/" + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userAvatar} alt={''}
                             className={styles.users__img}/>
                    </NavLink>


                    {u.followed ?
                        <button disabled={props.disabledButtonsId.some(id => id === u.id)} className={styles.users__followed_btn}
                                onClick={() => props.unfollowUser(u.id)}>UNFOLLOW</button> :
                        <button disabled={props.disabledButtonsId.some(id => id === u.id)} className={styles.users__followed_btn}
                                onClick={() => props.followUser(u.id)}>FOLLOW</button>}

                    <div className={styles.users__info}>
                        <div className={styles.users__name}>{u.name}</div>
                        <div className={styles.users__status}>{u.status}</div>
                    </div>

                </div>))}
            </div>
        </div>
    )
}

export default Users;