<script>
import { BPanel, BModal } from '@/components/bootstrap'
import { Balance } from '@/components/layout'
import FormWallet from './form/Wallet'

export default {
  components: { BPanel, BModal, FormWallet, Balance }
}
</script>

<template>
  <div class="row">
    <b-modal ref="editAccount" title="Editar conta"> <form-wallet btn="salvar" /> </b-modal>
    <div class="col-md-8 col-md-offset-2">
      <b-panel>
        <div slot="heading" class="row slot-heading">
          <div class="col-xs-2">
            <router-link :to="{ name: 'wallets' }" class="btn btn-xs btn-default" exact>voltar</router-link>
          </div>
          <div class="col-xs-8 text-center">
            <img src="https://i.imgur.com/RNPOgiU.jpg" />
            <balance :amount="1234.56" about="saldo da conta {NOME DA CONTA}" />
          </div>
          <div class="col-xs-2 text-right">
            <a class="btn btn-xs btn-default" @click.prevent="$refs.editAccount.open()">editar</a>
          </div>
        </div>

        <hr />
        <div> últimos lançamentos... <hr /> </div>
        <div> últimas conciliações... <hr /> </div>
        <div> top categorias dessa conta... <hr /> </div>
      </b-panel>
    </div>
  </div>
</template>

<style scoped>
.slot-heading { padding: 40px; }
.slot-heading img { width: 34px; border-radius: 3px; }
</style>
