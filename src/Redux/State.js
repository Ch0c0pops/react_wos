export const state = {

    dialogsData: {
        users: [{username: "Вася", id: 1}, {username: "Пёся", id: 2}, {username: "Хрюн", id: 3}],
        messages: [{msg: "хай", id: 1}, {msg: "гав", id: 2}, {msg: "хрю", id: 3}],
    },
    profileData: {
        posts: [{id: 1, msg: "hello"}, {id: 2, msg: "hey"}, {id: 3, msg: "bonjour"}],
        newPostMessage: ""
    }
}

window.state = state   //отрисовка state  в консоли

let appRender = () => { //функция-заглушка для последующего переопределения
    console.log('hi')
}
export const appRenderListener = (callback) => {   //переопределяет функцию на пришедшую в коллбэке
    appRender = callback
}
export let addPostHandler = (event) => {
    state.profileData.newPostMessage = event.target.value
    appRender({state})  //переопределенная функция-заглушка теперь является функцией AppRender из index.js
}

export let addPost = () => {
    let newPost = {
        id: state.profileData.posts.length + 1,
        msg: state.profileData.newPostMessage
    }
    state.profileData.posts.push(newPost)
    state.profileData.newPostMessage = ""


    appRender({state})
}