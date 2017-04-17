<script>
import { BPanel, BModal } from '@/components/bootstrap'
import Wallet from './Wallet'
import FormWallet from './form/Wallet'

export default {
  components: { BPanel, BModal, Wallet, FormWallet }
}
</script>

<template>
  <div class="row">
    <b-modal ref="newAccount" title="Nova conta"> <form-wallet /> </b-modal>
    <div class="col-md-10 col-md-offset-1">
      <b-panel title="Contas">
        <div slot="options">
          <a class="btn btn-xs btn-default" @click.prevent="$refs.newAccount.open()">nova conta</a>
        </div>
        <template v-for="n in 4">
          <wallet></wallet>
        </template>
      </b-panel>
    </div>
  </div>
</template>
