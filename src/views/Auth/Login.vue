<template>
<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="card col-5">
            <div class="card-header bg-white">
                <h4>Please, Login!</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="login">
                <div class="mb-3">
                    <div class="col-sm-10">
                    <label class="form-label">User ID</label>
                    <input type="text" v-model="form.id_user" class="form-control">
                    <div v-if="errors.id_user">
                    <span class="badge text-bg-danger fst-italic">{{ errors.id_user[0] }}</span>
                    </div>
                </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" v-model="form.password" class="form-control">
                    <div v-if="errors.password">
                    <span class="badge text-bg-danger fst-italic">{{ errors.password[0] }}</span>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="d-inline-flex" for="exampleCheck1">Don't have account ?
                        <RouterLink class="nav-link text-primary" :to="{path: 'register'}">Register!!</RouterLink>
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import { RouterLink, useRouter } from "vue-router"
import { reactive, ref } from "vue";
import axios from "axios";

const router = useRouter();
const form = reactive({
    id_user : '',
    password : ''
})
var errors = ref('');
const login = async () => {
    axios.post('http://127.0.0.1:8000/api/login',form).then((res) => {
        console.log(res.data.data.token)
        if(res.data.status == 200){
            localStorage.setItem('token',res.data.data.token)
            router.push({path:'/'})
        }
    }).catch((error) => {
        console.log(error)
        errors.value = error.response.data.errors.message
    })
}
</script>
