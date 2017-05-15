<script>
export default {
  props: {
    msg: { type: String },
    type: { type: String, default: 'danger' }
  }
}
</script>

<template>
  <div class="alert alert-dismissible text-uppercase text-center" :class="'alert-'+type">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <slot>{{ msg }}</slot>
  </div>
</template>
