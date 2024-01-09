<template>
  <div class="card">
    <div class="card-header"> 
      <h4>Books 
        <RouterLink to="/books/create" class="btn btn-primary float-end">Add Book</RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>NO</th>
            <th>ID Buku</th>
            <th>Judul Buku</th>
            <th>Kategori</th>
            <th>Pengarang</th>
            <th>Penerbit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="this.books.length > 0">
          <tr v-for="(book, index) in this.books" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ book.id_buku }}</td>
            <td>{{ book.judul_buku }}</td>
            <td>{{ book.kategori }}</td>
            <td>{{ book.pengarang }}</td>
            <td>{{ book.penerbit }}</td>
            <td>
              <RouterLink :to="{path: '/books/'+book.id+'/edit'}" class="btn btn-warning mx-3">Edit</RouterLink>
              <button class="btn btn-danger" @click="deleteBook(book.id)">Delete</button>
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
  name:'books',
  data(){
    return {
      books:'',
      data:''
    }
  },
  mounted(){
    this.getBooks();
  },
  methods:{

    getBooks(){
      var my = this
      axios.get('http://127.0.0.1:8000/api/books').then( res => {
        this.books = res.data.data
        console.log(res.data.data)
      }).catch(function (error){
        my.data = error.response.data.message
        alert(error.response.data.message)
        console.log(error.response.data.message)
      })
    },
    deleteBook(id){
      console.log(id)
      axios.delete(`http://127.0.0.1:8000/api/books/${id}`).then( res => {
        confirm('Are you sure ?')
        alert(res.data.message)
        this.getBooks()
        console.log(res.data.message)
      })
    }
  }
}
</script>
