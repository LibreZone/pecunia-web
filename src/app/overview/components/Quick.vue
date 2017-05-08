<script>
import { BPanel, BModal } from '@/components/bootstrap'
import { FormTransaction } from '@/components/layout'

export default {
  components: { BPanel, BModal, FormTransaction }
}
</script>

<template>
  <div>
    <b-modal ref="transactionDespesaModal" title="Nova despesa"><form-transaction /></b-modal>
    <b-modal ref="transactionReceitaModal" title="Nova receita"><form-transaction /></b-modal>

    <b-panel title="Acesso Rápido">
      <div class="btn-group btn-group-justified">
        <a @click.prevent="$refs.transactionDespesaModal.open()" class="btn btn-default">
          <span class="fa-stack">
            <i class="fa fa-square-o fa-stack-2x"></i>
            <i class="fa fa-minus fa-stack-1x"></i>
          </span>
          despesa
        </a>
        <a @click.prevent="$refs.transactionReceitaModal.open()" class="btn btn-default">
          <span class="fa-stack">
            <i class="fa fa-square-o fa-stack-2x"></i>
            <i class="fa fa-plus fa-stack-1x"></i>
          </span>
          receita
        </a>
        <a href="" class="btn btn-default">
          <span class="fa-stack">
            <i class="fa fa-square-o fa-stack-2x"></i>
            <i class="fa fa-exchange fa-stack-1x"></i>
          </span>
          transf.
        </a>
      </div>
    </b-panel>
  </div>
</template>
