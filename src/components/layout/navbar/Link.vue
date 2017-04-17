<script>
export default {
  props: {
    to: { type: Object, required: true },
    name: { type: String, required: true }
  }
}
</script>

<template>
  <router-link tag="li" :to="to">
    <a>{{ name }}</a>
  </router-link>
</template>
