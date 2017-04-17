<script>
export default {
  methods: {
    toggle () {
      this.$emit('toggleNavbar')
    }
  }
}
</script>

<template>
  <div class="navbar-header">
    <button @click="toggle" class="navbar-toggle collapsed">
      <span class="sr-only">Toggle navigation</span>
      <template v-for="n in 3"><span class="icon-bar"></span></template>
    </button>
    <router-link :to="{ path: '/' }" class="navbar-brand">
      <img src="~@/assets/logo_circle_white_transparent.svg" />
      <span>pecunia</span>
    </router-link>
  </div>
</template>

<style scoped>
.navbar-brand img {
  margin-top: -10px;
  margin-right: 10px;
  height: 40px;
  float: left;
}

.navbar-brand span {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
