<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/main/MainNavbar.vue'
import Footer from './components/main/MainFooter.vue'
import Loader from './components/basic/MainLoader.vue'

import { ref, onMounted } from 'vue'

const loading = ref(true) 

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);

});

</script>

<template>

  <body>
    <header />

    <Loader v-if="loading" />

    <Navbar />

    <main>
      <RouterView />
    </main>
    <Footer />
  </body>



</template>

<style scoped></style>
