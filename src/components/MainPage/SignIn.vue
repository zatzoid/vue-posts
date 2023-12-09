<template>
    <form @submit.prevent=" $store.commit('user/setUserData',this.userName)">
        <h2>sign in</h2>
        <MainInput type="text" name="name" placeholder="name" required v-model="userName"> </MainInput>
        <MainBtn type="submit">sign in</MainBtn>
    </form>
</template>

<script>




export default {
    name: 'SignIn',
    data() {
        return {
            userName: ''
        };
    },
  
}
</script>

<style scoped>
h2{
    font-weight: 200;
}
form {
    display: flex;
    gap: 10px;
    margin: auto;
    flex-direction: column;
    max-width: 600px;
    margin-bottom: 60px;
}


input {
    background-color: rgb(211, 255, 211);
    border-radius: 10px;
    padding: 10px;
    border: 2px solid rgb(205, 243, 205);
    transition: all .2s;
}

input:focus {
    outline: none;
    border: 2px solid rgb(69, 221, 69);

}
</style>
