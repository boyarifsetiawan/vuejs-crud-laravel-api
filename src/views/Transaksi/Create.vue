<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header"> 
        <h4>Create Transaksi</h4>
      </div>
      <div class="card-body">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">ID Transaksi</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.transaksi.id_transaksi" class="form-control">
            <div v-if="errors.id_transaksi">
              <span class="badge text-bg-danger fst-italic">{{ errors.id_transaksi[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">ID Anggota</label>
          <div class="col-sm-10">
            <select class="form-select" v-model="model.transaksi.anggota_id">
              <option v-for="anggota in anggotas" :key="anggota.id" :value="anggota.id">
                {{ anggota.id_anggota }}
              </option>
            </select>
            <div v-if="errors.anggota_id">
              <span class="badge text-bg-danger fst-italic">{{ errors.anggota_id[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">ID Buku</label>
          <div class="col-sm-10">
            <select class="form-select" v-model="model.transaksi.buku_id">
              <option v-for="buku in books" :key="buku.id" :value="buku.id">
                {{ buku.id_buku }}
              </option>
            </select>
            <div v-if="errors.buku_id">
              <span class="badge text-bg-danger fst-italic">{{ errors.buku_id[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Tgl Peminjaman</label>
          <div class="col-sm-10">
            <input type="datetime-local" v-model="model.transaksi.tgl_peminjaman" class="form-control">
            <div v-if="errors.tgl_peminjaman">
              <span class="badge text-bg-danger fst-italic">{{ errors.tgl_peminjaman[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Tgl Pengembalian</label>
          <div class="col-sm-10">
            <input type="datetime-local" v-model="model.transaksi.tgl_pengembalian" class="form-control">
            <div v-if="errors.tgl_pengembalian">
              <span class="badge text-bg-danger fst-italic">{{ errors.tgl_pengembalian[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <button @click="saveTransaksi" class="btn btn-success float-start">Add</button>
          <RouterLink to="/transaksi" class="btn btn-danger float-start mx-4">Cancel</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  name:'TransaksiCreate',
  data(){
    return{
      errors: '',
      data:'',
      books:'',
      anggotas:'',
      model:{
        transaksi:{
          id_transaksi:'',
          anggota_id:'', 
          buku_id:'', 
          tgl_peminjaman:'', 
          tgl_pengembalian:''
        }
      }
    }
  },
  mounted(){
    this.getBookAnggota()
  }
  ,
  methods:{
    getBookAnggota(){
      var my = this
      axios.get('http://127.0.0.1:8000/api/bookandanggota').then( res => {
        console.log(res.data)
        this.books = res.data.books
        this.anggotas = res.data.anggotas
      }).catch(function (error){
        my.data = error.response.data.message
        alert(error.response.data.message)
        console.log(error.response.data.message)
      })
    },
    saveTransaksi(){
      var self = this
      axios.post('http://127.0.0.1:8000/api/transaksi',this.model.transaksi)
        .then( res => {

          console.log(res.data)
          alert(res.data.message)

          this.model.transaksi = {
            id_transaksi:'',
            anggota_id:'', 
            buku_id:'', 
            tgl_peminjaman:'', 
            tgl_pengembalian:'' 
          }

          this.errors = '';
          this.$router.push({name:"transaksi"})
          
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