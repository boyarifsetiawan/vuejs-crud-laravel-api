<template>
  <div class="card">
    <div class="card-header"> 
      <h4>Students 
        <RouterLink to="/students/create" class="btn btn-primary float-end">Add Student</RouterLink>
      </h4>
    </div>
    <div class="card-body">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Course</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody v-if="this.students.length > 0">
          <tr v-for="(student, index) in this.students" :key="index">
            <td>{{ ++index }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.course }}</td>
            <td>{{ student.email }}</td>
            <td>{{ student.phone }}</td>
            <td>
              <RouterLink :to="{path: '/students/'+student.id+'/edit'}" class="btn btn-warning mx-3">Edit</RouterLink>
              <button class="btn btn-danger" @click="deleteStudent(student.id)">Delete</button>
            </td>
          </tr>
        </tbody>
        <tbody v-else-if="this.data.length > 0">
          <tr>
            <td colspan="6">Student Not Found <br>
              <RouterLink to="/students/create" class="btn btn-primary mt-3">Create Student Now</RouterLink>
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
  name:'students',
  data(){
    return {
      students:'',
      data:''
    }
  },
  mounted(){
    this.getStudents();
  },
  methods:{

    getStudents(){
      var my = this
      axios.get('http://127.0.0.1:8000/api/students').then( res => {
        this.students = res.data.students
        console.log(res.data.students)
      }).catch(function (error){
        my.data = error.response.data.message
        alert(error.response.data.message)
        console.log(error.response.data.message)
      })
    },
    deleteStudent(id){
      axios.delete(`http://127.0.0.1:8000/api/students/${id}/delete`).then( res => {
        confirm('Are you sure ?')
        alert(res.data.message)
        console.log(res.data.message)
      })
    }
  }
}
</script>
