<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header"> 
        <h4>Create Student</h4>
      </div>
      <div class="card-body">
        <!-- <p v-if="Object.keys(errorList).length > 0">
          <b>Please correct the following error(s):</b>
          <ul>
            <li v-for="(error, index) in errorList" :key="index">{{ error[0] }}</li>
          </ul>
        </p> -->
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.student.name" class="form-control">
            <div v-if="errors.name">
              <span class="badge text-bg-danger fst-italic">{{ errors.name[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Course</label>
          <div class="col-sm-10">
            <input type="text" v-model="model.student.course" class="form-control">
            <div v-if="errors.course">
              <span class="badge text-bg-danger fst-italic">{{ errors.course[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" v-model="model.student.email" class="form-control">
            <div v-if="errors.email">
              <span class="badge text-bg-danger fst-italic">{{ errors.email[0] }}</span>
            </div>
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-10">
            <input type="number" v-model="model.student.phone" class="form-control">
            <div v-if="errors.phone">
              <span class="badge text-bg-danger fst-italic">{{ errors.phone[0] }}</span>
            </div>
          </div>
        </div>
        <hr>
        <div class="mb-5">
          <button @click="saveStudent" class="btn btn-success float-start">Add</button>
          <RouterLink to="/students" class="btn btn-danger float-start mx-4">Cancel</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default{
  name:'studentCreate',
  data(){
    return{
      errors: '',
      model:{
        student:{
          name:'',
          course:'',
          email:'',
          phone:''
        }
      }
    }
  },
  methods:{
    saveStudent(){
      var self = this
      axios.post('http://127.0.0.1:8000/api/students',this.model.student)
        .then( res => {
          console.log(res.data)
          alert(res.data.message)
          this.model.student = {
            name:'',
            course:'',
            email:'',
            phone:'' 
          }
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