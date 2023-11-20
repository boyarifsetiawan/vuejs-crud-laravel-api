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
              <RouterLink to="#" class="btn btn-warning mx-3">Edit</RouterLink>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="5">Loading...</td>
          </tr>
        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
export default{
  name:'students',
  data(){
    return {
      students:''
    }
  },
  mounted(){
    this.getStudents();
  },
  methods:{

    getStudents(){

      axios.get('http://127.0.0.1:8000/api/students').then( res => {
        this.students = res.data.students
        console.log(res.data.students)
      });
    }
  }
}
</script>
