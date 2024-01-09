<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header"> 
        <h4>Create User</h4>
      </div>
      <div class="card-body">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">ID User</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.user.id_user" class="form-control">
            <div v-if="errors.id_user">
              <span class="badge text-bg-danger fst-italic">{{ errors.id_user[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Nama</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.user.nama" class="form-control">
            <div v-if="errors.nama">
              <span class="badge text-bg-danger fst-italic">{{ errors.nama[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Alamat</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.user.alamat" class="form-control">
            <div v-if="errors.alamat">
              <span class="badge text-bg-danger fst-italic">{{ errors.alamat[0] }}</span>
            </div>
          </div>
        </div>

        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Tipe User</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.user.tipe_user" class="form-control">
            <div v-if="errors.tipe_user">
              <span class="badge text-bg-danger fst-italic">{{ errors.tipe_user[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">password</label>
          <div class="col-sm-10">
            <input type="password" v-model="model.user.password" class="form-control">
            <div v-if="errors.password">
              <span class="badge text-bg-danger fst-italic">{{ errors.password[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <button @click="saveUser" class="btn btn-success float-start">Add</button>
          <RouterLink to="/users" class="btn btn-danger float-start mx-4">Cancel</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  name:'UserCreate',
  data(){
    return{
      errors: '',
      model:{
        user:{
          id_user:'',
          nama:'',
          alamat:'',
          tipe_user:'',
          password:''
        }
      }
    }
  },
  methods:{
    saveUser(){
      var self = this
      axios.post('http://127.0.0.1:8000/api/users',this.model.user)
        .then( res => {

          console.log(res.data)
          alert(res.data.message)

          this.model.user = {
            id_user:'',
            nama:'',
            alamat:'',
            tipe_user:'',
            password:''
          }

          this.errors = '';
          this.$router.push({name:"users"})
          
        }).catch(function (error){

          if(error.response){
            if(error.response.status == 422){

              console.log(error.response.data.errors)
              self.errors = error.response.data.errors

            }
          }
        })
    }
  }
}
</script>