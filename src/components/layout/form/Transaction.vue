<script>
export default {
  data () {
    return {
      options: false
    }
  }
}
</script>

<template>
  <form class="row">
    <div class="form-group col-md-12">
      <label class="control-label">Descrição</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group col-md-6">
      <label class="control-label">Valor</label>
      <div class="input-group">
        <span class="input-group-addon">R$</span>
        <input type="text" class="form-control" />
      </div>
    </div>
    <div class="form-group col-md-6">
      <label class="control-label">Data</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group col-md-6">
      <label class="control-label">Conta/Cartão</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group col-md-6">
      <label class="control-label">Categoria</label>
      <input type="text" class="form-control" />
    </div>
    <div class="col-md-12" v-if="!options">
      <a @click.prevent="options = true">+ mais opções</a>
    </div>
    <div class="col-md-12" v-if="options">
      <div class="col-md-3 text-center">
        <a class="btn btn-lg btn-block btn-default">
          <i class="fa fa-refresh"></i> <br>
          repetir
        </a>
      </div>
      <div class="col-md-3 text-center">
        <a class="btn btn-lg btn-block btn-default">
          <i class="fa fa-commenting-o"></i> <br>
          observação
        </a>
      </div>
      <div class="col-md-3 text-center">
        <a class="btn btn-lg btn-block btn-default">
          <i class="fa fa-tag"></i> <br>
          tags
        </a>
      </div>
      <div class="col-md-3 text-center">
        <a class="btn btn-lg btn-block btn-default">
          <i class="fa fa-paperclip"></i> <br>
          anexos
        </a>
      </div>
    </div>
  </form>
</template>

<style scoped>
a { cursor: pointer!important; }
</style>
