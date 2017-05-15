<script>
export default {
  props: {
    msg: { type: String },
    type: { type: String, default: 'danger' }
  },
  data () {
    return {
      isOpen: true
    }
  },
  methods: {
    close () {
      this.isOpen = false
    }
  }
}
</script>

<template>
  <div v-show="isOpen" class="alert alert-dismissible text-uppercase" :class="'alert-'+type">
    <button type="button" class="close" @click="close">&times;</button>
    <slot>{{ msg }}</slot>
  </div>
</template>
