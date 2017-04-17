<script>
import * as OverviewComponents from './'

export default {
  components: { ...OverviewComponents }
}
</script>

<template>
  <div class="row">
    <div class="col-md-5 col-md-offset-1">
      <balance />
      <wallets />
    </div>
    <div class="col-md-5">
      <indication />
      <quick />
    </div>
  </div>
</template>
