<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header"> 
        <h4>Edit Anggota</h4>
      </div>
      <div class="card-body">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">ID Anggota</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.anggota.id_anggota" class="form-control">
            <div v-if="errors.id_anggota">
              <span class="badge text-bg-danger fst-italic">{{ errors.id_anggota[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Nama</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.anggota.nama" class="form-control">
            <div v-if="errors.nama">
              <span class="badge text-bg-danger fst-italic">{{ errors.nama[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Jenis Kelamin</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.anggota.jenis_kelamin" class="form-control">
            <div v-if="errors.jenis_kelamin">
              <span class="badge text-bg-danger fst-italic">{{ errors.jenis_kelamin[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Alamat</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.anggota.alamat" class="form-control">
            <div v-if="errors.alamat">
              <span class="badge text-bg-danger fst-italic">{{ errors.alamat[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Status</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.anggota.status" class="form-control">
            <div v-if="errors.status">
              <span class="badge text-bg-danger fst-italic">{{ errors.status[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <button @click="saveAnggota" class="btn btn-success float-start">Add</button>
          <RouterLink to="/anggota" class="btn btn-danger float-start mx-4">Cancel</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  name:'BookEdit',
  data()  {
    return  {
      errors: '',
      model:{
        anggota:{
          id_anggota:'',
          nama:'',
          jenis_kelamin:'',
          alamat:'',
          status:''
        }
      }
    }
  },
  mounted(){
    // console.log(this.$route.params.id)
    this.showAnggota(this.$route.params.id)
  },
  methods:{
    showAnggota(id){
      // var self = this
      axios.get(`http://127.0.0.1:8000/api/anggota/${id}`)
        .then( res => {
          this.model.anggota = res.data.data
          console.log(res.data.message)
        }).catch(function (error){
          if(error.response){
            if(error.response.status == 404 ){
              alert(error.response.data.message)
            }
          }
        })
      },

    updateAnggota(id){
      var self = this
      axios.put(`http://127.0.0.1:8000/api/anggota/${id}`,this.model.anggota)
        .then( res => {

          console.log(res.data.data)
          alert(res.data.message)

          this.errors = '';
          this.$router.push({name:"anggota"})
          
        }).catch(function (error){
          console.log(error.response.message)
          if(error.response){
            if(error.response.status == 404){
              console.log(error.response.Message)
            }
            if(error.response.status == 422){

              console.log(error.response.data)
              self.errors = error.response.data.errors
              
            }
          }
        })
    }
  }
}
</script>