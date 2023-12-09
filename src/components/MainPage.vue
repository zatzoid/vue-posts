<template>
    <section>
        <div class="forms-block" :class="{ 'loggined': $store.state.user.isLoggined }">
            <SignIn />
            <AddForm />
        </div>
    </section>
    <div class="posts-count">
        <p>постов: {{ $store.state.posts.list.length }}</p>
    </div>
    <ul>
        <PostItem v-for="item in $store.state.posts.list" :key="item.id" :item="item" />
    </ul>
</template>

<script>

import AddForm from '@/components/MainPage/AddForm'
import PostItem from '@/components/MainPage/PostItem'

import SignIn from './MainPage/SignIn.vue'
export default {
    name: 'MainPage',
    components: {
    AddForm, PostItem,
    SignIn
}
}
</script>

<style scoped>
ul {
    max-width: 700px;
    padding: 0 20px;
    margin: auto;
    box-sizing: border-box;
    list-style: none;
    gap: 50px;
    display: flex;
    flex-direction: column;
}

section {
    height: 200px;
    overflow: hidden;
}


.forms-block {
    margin-top: 20px;
}

div {
    transition: all 0.5s;
}

.loggined {
    transform: translateY(-60%);
}

.posts-count {
    text-align: left;
    margin: 0 auto 0;
    max-width: 660px;
    padding: 20px;
}
</style>
