<script>
export default {
  props: {
    amount: { type: Number, required: true },
    about: { required: true }
  }
}
</script>

<template>
  <div class="text-center">
    <span class="money">
      <span class="currency">R$</span>
      <span class="amount">{{ amount.toFixed(2) }}</span>
    </span>
    <small class="about">{{ about }}</small>
  </div>
</template>

<style scoped>
.money { display: block; letter-spacing: 0.19px; margin-bottom: -4px; }
.currency { opacity: 0.6; position: relative; top: -7px; margin-left: -18px; }
.amount { font-size: 38px; }
.about { opacity: 0.7; }
</style>
