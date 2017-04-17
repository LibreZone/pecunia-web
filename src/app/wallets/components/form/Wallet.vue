<script>
export default {
  props: {
    btn: { type: String, default: 'adicionar' }
  },
  data () {
    return {
      obs: false
    }
  }
}
</script>

<template>
  <form class="row">
    <div class="form-group col-md-12">
      <label class="control-label">Nome</label>
      <div class="input-group">
        <input type="text" class="form-control" />
        <span class="input-group-btn">
          <button class="btn btn-default" type="button"> <img src="https://i.imgur.com/RNPOgiU.jpg" /> </button>
        </span>
      </div>
    </div>
    <div class="form-group col-md-6">
      <label class="control-label">Tipo</label>
      <select class="form-control">
        <option>Conta corrente</option>
        <option>Conta poupança / Investimento</option>
        <option>Outros</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label class="control-label">Saldo inicial</label>
      <div class="input-group">
        <span class="input-group-addon">R$</span>
        <input type="number" class="form-control" />
      </div>
    </div>
    <div class="form-group col-md-12" v-if="!obs">
      <a href="#" @click.prevent="obs = true">+ observação</a>
    </div>
    <div class="form-group col-md-12" v-if="obs">
      <label class="control-label">Observação</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-md-12">
      <button type="submit" class="btn btn-block btn-success">{{ btn }}</button>
    </div>
  </form>
</template>

<style scoped>
.input-group-btn .btn { padding: 2px; }
img { width: 30px; height: 30px;}
</style>
