<template>
    <section class="ftco-section">
        <div class="row justify-content-center">
            <div class="col-3 text-center mb-5">
                <h2 class="heading-section">Please Login</h2>
                <div class="row justify-content-center">
                    <div class="w-50">
                        <p class="social-media d-flex justify-content-end">
                            <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span
                                    class="fa fa-facebook"></span></a>
                            <a href="#" class="social-icon d-flex align-items-center justify-content-center"><span
                                    class="fa fa-twitter"></span></a>
                        </p>
                    </div>
                </div>
                <form action="#" class="signin-form">
                    <div class="form-group mb-3">
                        <label class="label" for="name">Username</label>
                        <input type="text" class="form-control" placeholder="Username" required>
                    </div>
                    <div class="form-group mb-3">
                        <label class="label" for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Password" required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign In</button>
                    </div>

                </form>
                <p class="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
            </div>
        </div>
    </section>
</template>