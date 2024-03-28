<template>
  <div class="products">
    <div class="top-header">
      <div class="left-elements">
        <MenuIcon class="menu-icon"/>
        <h1>Products</h1>
      </div>
      <div class="right-elements">
        <HelpIcon class="help-icon"/>
        <AddProductIcon />
      </div>
    </div>

    <SearchBar />

    <div class="section">
      <Card />
    </div>
  </div>
</template>
<script setup>
import MenuIcon from '../components/icons/IconMenu.vue';
import HelpIcon from '../components/icons/IconHelp.vue';
import AddProductIcon from '../components/icons/IconAddProduct.vue';
import SearchBar from '../components/SearchBar.vue'
import Card from '../components/Card.vue';
import { ref, onMounted } from 'vue';

let products = ref();

onMounted(() => {
  getProducts();
})

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com");
  products.value = await response.json();
  console.log("## response: ", response);
}
</script>
<style scoped>
  .products {
    width: 100%;
    padding: 2rem;
  }

  .top-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .left-elements, .right-elements {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-icon, .help-icon {
    margin-right: 15px;
  }

  .section {
    margin-top: 2rem;
  }
</style>
