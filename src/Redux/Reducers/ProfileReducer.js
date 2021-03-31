const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";

export const addPostActionCreator = (props) => ({type: ADD_POST, newPost: props.newPost})
export const updatePostActionCreator = (props) => ({type: UPDATE_POST, newPostMessage: props})

const initialState = {
    posts: [{id: 1, msg: "hello"}, {id: 2, msg: "hey"}, {id: 3, msg: "bonjour"}],
    newPostMessage: ""
};

const ProfileReducer = (state = initialState, action) => {

    let stateCopy = {...state}

    switch (action.type) {

        case ADD_POST :
            return {
                ...state,
                posts: [...state.posts, {
                    id: stateCopy.posts.length + 1,
                    msg: stateCopy.newPostMessage
                }],
                newPostMessage: ""
            }

        case UPDATE_POST:
            return {
                ...state,
                newPostMessage: action.newPostMessage
            }

        default:
            return state
    }
}

export default ProfileReducer