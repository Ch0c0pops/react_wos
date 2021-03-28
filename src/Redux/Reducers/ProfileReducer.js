const ADD_POST = "ADD_POST";
export const addPostActionCreator = (props) => ({type: ADD_POST, newPost: props.newPost})

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

        default:
            return state
    }
}

export default ProfileReducer