<template>
    <button class="main-btn">
        <slot>

        </slot>
    </button>
</template>

<script>
export default {
    name: 'MainBtn'
}
</script>

<style scoped>
.main-btn {

    margin: auto;
    padding: 5px 45px;
    cursor: pointer;
    border-radius: 20px;
    border: 2px solid rgb(69, 221, 69);
    background-color: rgb(205, 243, 205);
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all .2s;
    font-size: 15px;
}

.main-btn:hover {
    background-color: rgb(69, 221, 69);
}
</style>