const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

export const addPostActionCreator = (props) => ({type: ADD_POST, newPost: props.newPost})
export const updatePostActionCreator = (props) => ({type: UPDATE_POST, newPostMessage: props})

const initialState = {
    posts: [{id: 1, msg: "hello"}, {id: 2, msg: "hey"}, {id: 3, msg: "bonjour"}],
    newPostMessage: ""
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            let newPost = {
                id: state.posts.length + 1,
                msg: state.newPostMessage
            }
           state.posts.push(newPost)
            state.newPostMessage = ""
            return state
        case UPDATE_POST:
            state.newPostMessage = action.newPostMessage
            return state
        default:
            return state
    }
}

export default ProfileReducer