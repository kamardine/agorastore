<template>
  <header>
    <img alt="logo" class="logo" src="@/assets/logo.svg" width="45" height="57" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/people">People</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/categories">Categories</RouterLink>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.5;
  width: 370px;
  height: 100vh;
  background-color: #F2F0F6;
  padding: 2rem;
}

.logo {
  margin-bottom: 1rem;
}

nav {
  width: 100%;
  font-size: 1.25rem;
  margin-top: 2rem;
  color: #000;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  padding: 1rem;
}
</style>
