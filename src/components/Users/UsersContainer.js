import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreator, setUsersActionCreator, unfollowActionCreator,
    setPaginationActionCreator, setCurrentPageActionCreator
} from "../../Redux/Reducers/UsersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageLimit: state.usersPage.pageLimit,
        currentPage: state.usersPage.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(followActionCreator(id)),
        unfollow: (id) => dispatch(unfollowActionCreator(id)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setPagination: (totalCount) => dispatch(setPaginationActionCreator(totalCount)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageActionCreator(currentPage))
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;