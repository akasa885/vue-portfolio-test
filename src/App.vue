<script setup lang="ts">
// No additional logic needed for App.vue
</script>

<template>
  <div>
    <nav class="navbar" style="position: fixed; top: 0; left: 0; width: 100%; z-index: 100;">
      <router-link to="/">Home</router-link>
      <router-link to="/blogs">Blogs</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
nav.navbar {
  display: flex;
  gap: 24px;
  background: #333;
  padding: 16px;
}
nav.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
nav.navbar a.router-link-exact-active {
  text-decoration: underline;
}
</style>
