<template>
  <div class="container">
    <form class="search-container">
      <SearchIcon class="search-icon"/>
      <input type="text" id="search-bar" placeholder="Search products by name or keyword...">
    </form>
  </div>
</template>

<script setup>
import SearchIcon from '../components/icons/IconSearch.vue';
</script>


<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.search-container {
  display: flex;
}

.search-icon {
  margin-right: 15px;
}

.search-container input {
  width: 300px;
  border-color: transparent;
  font-size: 1rem;
}
</style>
