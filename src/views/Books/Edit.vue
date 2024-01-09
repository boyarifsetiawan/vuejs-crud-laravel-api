<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header"> 
        <h4>Edit Book</h4>
      </div>
      <div class="card-body">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">ID Buku</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.book.id_buku" class="form-control">
            <div v-if="errors.id_buku">
              <span class="badge text-bg-danger fst-italic">{{ errors.id_buku[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Judul Buku</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.book.judul_buku" class="form-control">
            <div v-if="errors.judul_buku">
              <span class="badge text-bg-danger fst-italic">{{ errors.judul_buku[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Kategori</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.book.kategori" class="form-control">
            <div v-if="errors.kategori">
              <span class="badge text-bg-danger fst-italic">{{ errors.kategori[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Pengarang</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.book.pengarang" class="form-control">
            <div v-if="errors.pengarang">
              <span class="badge text-bg-danger fst-italic">{{ errors.pengarang[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Penerbit</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.book.penerbit" class="form-control">
            <div v-if="errors.penerbit">
              <span class="badge text-bg-danger fst-italic">{{ errors.penerbit[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <button @click="updateBook" class="btn btn-success float-start">Add</button>
          <RouterLink to="/books" class="btn btn-danger float-start mx-4">Cancel</RouterLink>
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
        book:{
          id_buku:'',
          judul_buku:'',
          kategori:'',
          pengarang:'',
          penerbit:''
        }
      }
    }
  },
  mounted(){
    // console.log(this.$route.params.id)
    this.showBook(this.$route.params.id)
  },
  methods:{
    showBook(id){
      // var self = this
      axios.get(`http://127.0.0.1:8000/api/books/${id}`)
        .then( res => {
          this.model.book = res.data.data
          console.log(res.data.message)
        }).catch(function (error){
          if(error.response){
            if(error.response.status == 404 ){
              alert(error.response.data.message)
            }
          }
        })
      },

    updateBook(id){
      var self = this
      axios.put(`http://127.0.0.1:8000/api/books/${id}`,this.model.book)
        .then( res => {

          console.log(res.data.data)
          alert(res.data.message)

          this.errors = '';
          this.$router.push({name:"books"})
          
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