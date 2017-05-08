<script>
export default {
  data () {
    return {
      options: true,
      addon: {
        repeat: false,
        obs: false,
        tags: false,
        files: false
      }
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
      <select class="form-control">
        <option value="" v-for="n in 3">...</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label class="control-label">Categoria</label>
      <select class="form-control">
        <option value="" v-for="n in 3">...</option>
      </select>
    </div>
    <div class="form-group col-md-12" v-if="addon.tags">
      <label class="control-label">Tags</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group col-md-12" v-if="addon.obs">
      <label class="control-label">Observação</label>
      <textarea class="form-control" ></textarea>
    </div>
    <div class="form-group col-md-12" v-if="!options">
      <a @click.prevent="options = true">+ mais opções</a>
    </div>
    <div class="col-md-12 options" v-if="options">
      <div class="col-xs-6 col-md-3 text-center" v-if="!addon.repeat" @click.prevent="addon.repeat = true">
        <a class="btn btn-lg btn-block btn-default">
          <i class="fa fa-refresh"></i> <br>
          repetir
        </a>
      </div>
      <div class="col-xs-6 col-md-3 text-center" v-if="!addon.obs" @click.prevent="addon.obs = true">
        <a class="btn btn-lg btn-block btn-default">
          <i class="fa fa-commenting-o"></i> <br>
          observação
        </a>
      </div>
      <div class="col-xs-6 col-md-3 text-center" v-if="!addon.tags" @click.prevent="addon.tags = true">
        <a class="btn btn-lg btn-block btn-default">
          <i class="fa fa-tag"></i> <br>
          tags
        </a>
      </div>
      <div class="col-xs-6 col-md-3 text-center" v-if="!addon.files" @click.prevent="addon.files = true">
        <a class="btn btn-lg btn-block btn-default">
          <i class="fa fa-paperclip"></i> <br>
          anexos
        </a>
      </div>
    </div>
    <div class="col-md-12">
      <button type="submit" class="btn btn-block btn-success">Adicionar</button>
    </div>
  </form>
</template>

<style scoped>
a { cursor: pointer!important; }

.options > div {
  margin: 15px auto;
}
</style>
