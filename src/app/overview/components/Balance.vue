<script>
import { BPanel } from '@/components/bootstrap'
import { Balance } from '@/components/layout'

export default {
  components: { BPanel, Balance },
  data () {
    return {
      valor: 1234.56
    }
  },
  watch: {
    valor: () => {
      alert('valor foi alterado')
    }
  }
}
</script>

<template>
  <b-panel class="balance" no-body>
    <template slot="heading">
      <balance :amount="valor" about="saldo geral" />
    </template>
  </b-panel>
</template>

<style>
.balance .panel-heading { height: 200px; padding-top: 15%; }
</style>
