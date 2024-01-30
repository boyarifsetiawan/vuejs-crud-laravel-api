import { createRouter, createWebHistory } from 'vue-router'

import BooksView from '../views/Books/View.vue'
import BookCreate from '../views/Books/Create.vue'
import BookEdit from '../views/Books/Edit.vue'

import AnggotaView from '../views/Anggota/View.vue'
import AnggotaCreate from '../views/Anggota/Create.vue'
import AnggotaEdit from '../views/Anggota/Edit.vue'

import TransaksiView from '../views/Transaksi/View.vue'
import TransaksiCreate from '../views/Transaksi/Create.vue'
import TransaksiEdit from '../views/Transaksi/Edit.vue'

// import UsersView from '../views/Users/View.vue'
// import UserCreate from '../views/Users/Create.vue'
// import UserEdit from '../views/Users/Edit.vue'

import LoginForm from '../views/Auth/Login.vue'
import RegisterForm from '../views/Auth/Register.vue'
import Home from '../views/Home.vue'
import notFound from '../views/notFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    //BOOKS
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/books/create',
      name: 'books.create',
      component: BookCreate
    },
    {
      path: '/books/:id/edit',
      name: 'books.edit',
      component: BookEdit,
    },

    // ANGGOTA
    {
      path: '/anggota',
      name: 'anggota',
      component: AnggotaView
    },
    {
      path: '/anggota/create',
      name: 'anggota.create',
      component: AnggotaCreate
    },
    {
      path: '/anggota/:id/edit',
      name: 'anggota.edit',
      component: AnggotaEdit
    },

    //TRANSAKSI
    {
      path: '/transaksi',
      name: 'transaksi',
      component: TransaksiView
    },
    {
      path: '/transaksi/create',
      name: 'transaksi.create',
      component: TransaksiCreate
    },
    {
      path: '/transaksi/:id/edit',
      name: 'transaksi.edit',
      component: TransaksiEdit
    },

    // USER
    // {
    //   path: '/users',
    //   name: 'users',
    //   component: UsersView
    // },
    // {
    //   path: '/users/create',
    //   name: 'users.create',
    //   component: UserCreate
    // },
    // {
    //   path: '/users/:id/edit',
    //   name: 'users.edit',
    //   component: UserEdit
    // },

    //login
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm
    },
    {
      path: '/:pathMatch(.*)*',
      component: notFound
    }
  ]
})

export default router
