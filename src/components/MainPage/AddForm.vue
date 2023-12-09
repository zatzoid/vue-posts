<template>
    <form @submit.prevent=" $store.commit('posts/createPost', { post: this.postData, user: $store.state.user.currentUser })">
        <h2>create post</h2>
        <MainInput type="text" required name="heading" placeholder="heading" v-model="postData.heading"></MainInput>
        <MainInput type="text" required name="body" placeholder="body" v-model="postData.body"></MainInput>
        <MainBtn type="submit">submit</MainBtn>
    </form>
</template>

<script>


export default {
    name: 'AddForm',
    data() {
        return {
            postData: {
                heading: '',
                body: ''
            }
        }
    },
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 600px;
    gap: 10px;
    margin-bottom: 60px;
}

h2 {
    font-weight: 200;
}
</style>
