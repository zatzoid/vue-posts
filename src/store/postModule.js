import { postsList } from '@/utils/postList.js'

export const postsModule = {
    state: () => ({
        list: postsList
    }),

    mutations: {
        createPost(state, data) {
            const newPost = {
                id: Date.now(),
                heading: data.post.heading,
                body: data.post.body,
                date: Date.now(),
                likes: [],
                commentary: [],
                owner: data.user,

            }
            state.list.unshift(newPost)
        },
        putLike(state, data) {
            const newList = state.list.map(el => {

                if (el.id === data.postId) {
                    const findedEl = { ...el }
                    findedEl.likes.push(data.user)
                    return findedEl
                }
                return el
            })
            state.list = newList
        },
        disLike(state, data) {
            const newList = state.list.map(el => {
                if (el.id === data.postId) {
                    const findedEl = { ...el }
                    const newLikes = findedEl.likes.filter((item) => item !== data.user);

                    findedEl.likes = newLikes
                    return findedEl
                }
                return el
            })
            state.list = newList
        }


    },
    namespaced: true

}