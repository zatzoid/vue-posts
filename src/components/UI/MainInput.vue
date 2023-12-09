<template>
    <input class="input" :value="modelValue" @input="updInputVal">
</template>

<script>
export default {
    name: 'MainInput',
    methods: {
        updInputVal(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
    props: {

        modelValue: { String, Number },
    }
}
</script>

<style scoped>
.input {
    background-color: rgb(211, 255, 211);
    border-radius: 10px;
    padding: 10px;
    border: 2px solid rgb(205, 243, 205);
    transition: border .2s;
}

.input:focus {
    outline: none;
    border: 2px solid rgb(69, 221, 69);

}

textarea {
    resize: vertical;
    max-height: 300px;
}
</style>