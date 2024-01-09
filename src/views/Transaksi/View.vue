<template>
  <div class="card">
    <div class="card-header"> 
      <h4>Transaksi 
        <RouterLink to="/transaksi/create" class="btn btn-primary float-end">Add Transaksi</RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>NO</th>
            <th>ID Transaksi</th>
            <th>ID Anggota</th>
            <th>ID Buku</th>
            <th>Tgl Peminjaman</th>
            <th>Tgl Pengembalian</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="this.transaksi.length > 0">
          <tr v-for="(item, index) in this.transaksi" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ item.id_transaksi }}</td>
            <td>{{ item.id_anggota }}</td>
            <td>{{ item.id_buku }}</td>
            <td>{{ item.tgl_peminjaman }}</td>
            <td>{{ item.tgl_pengembalian }}</td>
            <td>
              <RouterLink :to="{path: '/transaksi/'+item.id+'/edit'}" class="btn btn-warning mx-3">Edit</RouterLink>
              <button class="btn btn-danger" @click="deleteTransaksi(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
        <tbody v-else-if="this.data.length > 0">
          <tr>
            <td colspan="6">Transaksi Not Found <br>
              <RouterLink to="/transaksi/create" class="btn btn-primary mt-3">Create Transaksi Now</RouterLink>
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
  name:'transaksi',
  data(){
    return {
      transaksi:'',
      data:''
    }
  },
  mounted(){
    this.getTransaksi();
  },
  methods:{

    getTransaksi(){
      var my = this
      axios.get('http://127.0.0.1:8000/api/transaksi').then( res => {
        this.transaksi = res.data.data
        console.log(res.data.data)
      }).catch(function (error){
        my.data = error.response.data.message
        alert(error.response.data.message)
        console.log(error.response.data.message)
      })
    },
    deleteTransaksi(id){
      console.log(id)
      axios.delete(`http://127.0.0.1:8000/api/transaksi/${id}`).then( res => {
        confirm('Are you sure ?')
        alert(res.data.message)
        this.getTransaksi()
        console.log(res.data.message)
      })
    }
  }
}
</script>
