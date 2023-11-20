<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header"> 
        <h4>Create Student</h4>
      </div>
      <div class="card-body">
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Course</label>
          <div class="col-sm-10">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control">
          </div>
        </div>
        <div class="mb-3 row">
          <label class="col-sm-2 col-form-label">Phone</label>
          <div class="col-sm-10">
            <input type="text" class="form-control">
          </div>
        </div>
        <hr>
        <div class="mb-5">
          <button class="btn btn-success float-start">Add</button>
          <RouterLink to="/students" class="btn btn-danger float-start mx-4">Cancel</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>