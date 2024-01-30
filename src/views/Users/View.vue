<template>
  <div class="card">
    <div class="card-header"> 
      <h4>Users 
        <RouterLink to="/users/create" class="btn btn-primary float-end">Add User</RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>NO</th>
            <th>ID User</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Tipe User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="this.users.length > 0">
          <tr v-for="(user, index) in this.users" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ user.id_user }}</td>
            <td>{{ user.nama }}</td>
            <td>{{ user.alamat }}</td>
            <td>{{ user.tipe_user }}</td>
            <td>
              <RouterLink :to="{path: '/users/'+user.id+'/edit'}" class="btn btn-warning mx-3">Edit</RouterLink>
              <button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
        <tbody v-else-if="this.data.length > 0">
          <tr>
            <td colspan="6">Users Not Found <br>
              <RouterLink to="/users/create" class="btn btn-primary mt-3">Create User Now</RouterLink>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="5">Loading....</td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
// import router from '../../router'
export default{
  name:'users',
  data(){
    return {
      users:'',
      data:''
    }
  },
  mounted(){
    this.getUsers();
  },
  methods:{

    getUsers(){
      var my = this
      axios.get('http://127.0.0.1:8000/api/users').then( res => {
        this.users = res.data.data
        console.log(res.data.data)
      }).catch(function (error){
        my.data = error.response.data.message
        alert(error.response.data.message)
        console.log(error.response.data.message)
      })
    },
    deleteUser(id){
      if(confirm("Are you sure to delete this user ?")){
                axios.delete(`http://127.0.0.1:8000/api/users/${id}`).then(res=>{
                  this.getUsers()
                  alert(res.data.message)
                  console.log(res.data.message)
                }).catch(error=>{
                    console.log(error)
                })
            }
    }
  }
}
</script>
