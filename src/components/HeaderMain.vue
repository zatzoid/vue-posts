<template>
    <header>
        <div class="header-content">
            <h1>vue posts</h1>
            <transition>
                <div class="userInfo-block" :class="{ 'userInfo-block_active': $store.state.user.isLoggined }">
                    <p>signed as:</p>
                    <p :title="$store.state.user.currentUser" v-if="$store.state.user.currentUser">{{ $store.state.user.currentUser }}</p>

                </div>
            </transition>
        </div>
    </header>
</template>

<script>

export default {
    name: 'HeaderMain'
}
</script>
<style scoped>
header {
    display: flex;


}

.header-content {
    display: flex;
    margin: auto;
    height: 50px;
    position: relative;
}

.userInfo-block {
    position: absolute;
    right: -5px;
    padding-left: 5px;
    top: 0;
    height: 100%;
    transform: translateX(100%);
    max-width: 1px;
    transition: max-width 2s 1s, max-height 1s;
    max-height: 0;
    overflow: hidden;
    border-left: 2px solid black;
}

.userInfo-block_active {
    max-width: 400px;
    max-height: 100px;
}

p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    margin: 0 0 0;
    font-size: 20px;
    text-transform: lowercase;

}

h1 {
    margin: 0;
}

span {
    width: 2px;
    height: 100%;
    background-color: black;
}
</style>