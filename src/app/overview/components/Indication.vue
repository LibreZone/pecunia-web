<script>
import { BPanel } from '@/components/bootstrap'

export default {
  components: { BPanel }
}
</script>

<template>
  <b-panel class="indication" type="default" no-body>
    <template slot="heading">
      <div class="text-center">
        <span class="share">
          <h3>Indique para um amigo</h3>
          <p><small>Bônus pra você e desconto pra quem você indicar!</small></p>
        </span>
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <a href="#" class="btn btn-block btn-warning">Indicar para amigos</a>
          </div>
        </div>
      </div>
    </template>
  </b-panel>
</template>

<style>
.indication .panel-heading { height: 200px; padding-top:6%; }
.indication .share { font-size: 17px; display:block; }
.indication .share h3 { font-weight: bold; }
</style>
