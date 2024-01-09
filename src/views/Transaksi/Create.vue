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
            <input type="text" v-model="model.transaksi.id_anggota" class="form-control">
            <div v-if="errors.id_anggota">
              <span class="badge text-bg-danger fst-italic">{{ errors.id_anggota[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">ID Buku</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.transaksi.id_buku" class="form-control">
            <div v-if="errors.id_buku">
              <span class="badge text-bg-danger fst-italic">{{ errors.id_buku[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Tgl Peminjaman</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.transaksi.tgl_peminjaman" class="form-control">
            <div v-if="errors.tgl_peminjaman">
              <span class="badge text-bg-danger fst-italic">{{ errors.tgl_peminjaman[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Tgl Pengembalian</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.transaksi.tgl_pengembalian" class="form-control">
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
      model:{
        transaksi:{
          id_transaksi:'',
          id_anggota:'', 
          id_buku:'', 
          tgl_peminjaman:'', 
          tgl_pengembalian:''
        }
      }
    }
  },
  methods:{

    saveTransaksi(){
      var self = this
      axios.post('http://127.0.0.1:8000/api/transaksi',this.model.transaksi)
        .then( res => {

          console.log(res.data)
          alert(res.data.message)

          this.model.transaksi = {
            id_transaksi:'',
            id_anggota:'', 
            id_buku:'', 
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