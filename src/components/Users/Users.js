import React from 'react';
import styles from './../../Styles/UsersPage.module.scss'
import * as axios from "axios";
import userAvatar from '../../assets/photo/userAvatar.jfif'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLimit}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPagination(response.data.totalCount)
            })
    }

    pagesTotalAmount() {
        const pagesAmount = this.props.totalCount / this.props.pageLimit
        const pages = [];
        for (let i = 1; i <= pagesAmount; i++) {
            pages.push(i)
        }
        return pages
    }

    currentPageHandler(p) {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLimit}&page=${p}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setPagination(response.data.totalCount)
            })
    }


    render() {

        return (<div>
                <div className={styles.users__pagination}>{this.pagesTotalAmount().map(p => <span
                    className={p === this.props.currentPage ? styles.users__currentPage : ""}
                    onClick={() => this.currentPageHandler(p)}>{p}</span>)}</div>
                {this.props.users.map(u => (<div key={u.id} className={styles.users__wrap}>


                    <img src={u.photos.small !== null ? u.photos.small : userAvatar} alt={''}
                         className={styles.users__img}/>

                    {u.followed ?
                        <button className={styles.users__followed_btn}
                                onClick={() => this.props.unfollow(u.id)}>UNFOLLOW</button> :
                        <button className={styles.users__followed_btn}
                                onClick={() => this.props.follow(u.id)}>FOLLOW</button>}

                    <div className={styles.users__info}>
                        <div className={styles.users__name}>{u.name}</div>
                        <div className={styles.users__status}>{u.status}</div>
                        <div className={styles.users__location}>{/*{u.location.city}, {u.location.country}*/}</div>
                    </div>

                </div>))}
            </div>
        )
    }

}


export default Users;