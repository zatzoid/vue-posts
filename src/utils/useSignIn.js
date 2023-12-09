import {ref} from 'vue'

export default function useSignIn() {
    let isLoggined = ref(false);
    let userName = ref(null);
    function signIn(data) {
        userName.value = data
        isLoggined.value = true;
        console.log('data::', data, 'ref::', userName.value)

    }

    return { isLoggined, signIn, userName }
}