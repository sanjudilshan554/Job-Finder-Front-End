<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/main/MainNavbar.vue'
import Footer from './components/main/MainFooter.vue'

</script>

<template>

  <body>
    <header />

    <Navbar />

    <main>
      <RouterView />
    </main>
    <Footer />
  </body>



</template>

<style scoped></style>
