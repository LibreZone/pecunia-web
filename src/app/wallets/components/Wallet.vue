<script>
import { BPanel } from '@/components/bootstrap'

export default {
  components: { BPanel }
}
</script>

<template>
  <div class="col-md-6">
    <b-panel type="default" has-footer>
      <template slot="heading">
        <img src="https://i.imgur.com/RNPOgiU.jpg" class="pull-left" />
        <span>
          Nome da conta (Categoria)
          <br /> <b>R$1234.56</b>
        </span>
      </template>

      <div slot="footer" class="text-center">
        <div class="btn-group btn-group-justified">
          <router-link :to="{ name: 'wallet-details', params: { id: 123 } }" class="btn btn-xs btn-default" exact>detalhes</router-link>
          <a class="btn btn-xs btn-default">lançamentos</a>
          <a class="btn btn-xs btn-default">desativar</a>
        </div>
      </div>

      <p class="text-center">
        GRÁFICO AQUI
      </p>
    </b-panel>
  </div>
</template>

<style scoped>
img { width: 40px; height: 40px; margin-right: 10px; }
</style>
