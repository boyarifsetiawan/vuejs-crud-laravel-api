<template>
  <div class="card">
    <div class="card-header"> 
      <h4>Anggota 
        <RouterLink to="/anggota/create" class="btn btn-primary float-end">Add Anggota</RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>NO</th>
            <th>ID Anggota</th>
            <th>Nama</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="this.anggota.length > 0">
          <tr v-for="(item, index) in this.anggota" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ item.id_anggota }}</td>
            <td>{{ item.nama }}</td>
            <td>{{ item.jenis_kelamin }}</td>
            <td>{{ item.alamat }}</td>
            <td>{{ item.status }}</td>
            <td>
              <RouterLink :to="{path: '/anggota/'+item.id+'/edit'}" class="btn btn-warning mx-3">Edit</RouterLink>
              <button class="btn btn-danger" @click="deleteAnggota(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
        <tbody v-else-if="this.data.length > 0">
          <tr>
            <td colspan="6">Books Not Found <br>
              <RouterLink to="/books/create" class="btn btn-primary mt-3">Create Book Now</RouterLink>
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
  name:'anggota',
  data(){
    return {
      anggota:'',
      data:''
    }
  },
  mounted(){
    this.getAnggota();
  },
  methods:{

    getAnggota(){
      var my = this
      axios.get('http://127.0.0.1:8000/api/anggota').then( res => {
        this.anggota = res.data.data
        console.log(res.data.data)
      }).catch(function (error){
        my.data = error.response.data.message
        alert(error.response.data.message)
        console.log(error.response.data.message)
      })
    },
    deleteAnggota(id){
      console.log(id)
      axios.delete(`http://127.0.0.1:8000/api/anggota/${id}`).then( res => {
        confirm('Are you sure ?')
        alert(res.data.message)
        this.getAnggota()
        console.log(res.data.message)
      })
    }
  }
}
</script>
