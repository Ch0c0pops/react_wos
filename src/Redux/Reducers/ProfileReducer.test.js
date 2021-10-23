import ProfileReducer from "./ProfileReducer";


const ADD_POST = "ADD_POST"
const state = {
    posts: [{id: 1, msg: "hello"}, {id: 2, msg: "hey"}, {id: 3, msg: "bonjour"}]
};
const action = {type: ADD_POST, newPost: "bla bla"}

const updatedState = ProfileReducer(state, action);

it('should add new Post to Posts array',  () => {

    expect(updatedState.posts.length).toBe(4)
})
