<script>
import { BPanel, BAlert } from '@/components/bootstrap'

export default {
  components: { BPanel, BAlert }
}
</script>

<template>
  <div class="row login">
    <div class="col-md-4 col-md-offset-4">
      <b-panel type="default">
        <div class="brand" slot="heading">
          <img src="~@/assets/logo_circle_purple_transparent.svg" class="logo-icon" />
          <span class="logo-text text-purple">PECUNIA</span>
        </div>
        <form>
          <div class="form-group">
            <input type="email" placeholder="Email" class="form-control" />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Senha" class="form-control" />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-lg btn-primary btn-block">Entrar</button>
          </div>
        </form>
      </b-panel>
    </div>
    <div class="col-md-4 col-md-offset-4">
      <b-alert msg="erro" />
    </div>
  </div>
</template>

<style>
  body { background: #eee; }
</style>

<style scoped>
  .login { padding-top: 100px; }
  .btn:hover { margin-top: 16px!important; }
  .brand {
    margin-left: 55px;
  }
  .logo-icon {
    max-height: 50px;
    float: left;
    margin-top: 5px;
  }
  .logo-text {
    font-weight: bold;
    font-size: 40px;
    margin-left: 15px;
  }
</style>
