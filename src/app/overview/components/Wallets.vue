<script>
import { BPanel } from '@/components/bootstrap'

export default {
  components: { BPanel },
  data () {
    return {
      wallets: [
        { type: 'Outros', img: 'https://raw.githubusercontent.com/LibreZone/pecunia/master/wallet%20badges/Outros.jpg', name: 'Conta inicial', amount: 1234.56 },
        { type: 'Outros', img: 'https://raw.githubusercontent.com/LibreZone/pecunia/master/wallet%20badges/Carteira.jpg', name: 'Carteira', amount: 1234.56 },
        { type: 'Conta corrente', img: 'https://raw.githubusercontent.com/LibreZone/pecunia/master/wallet%20badges/Banco%20do%20Brasil%20S.A.jpg', name: 'Banco do Brasil', amount: 1234.56 }
      ]
    }
  }
}
</script>

<template>
  <b-panel title="Minhas contas">
    <div class="row">
      <table class="table">
        <tbody>
          <template v-for="wallet in wallets">
            <tr>
              <td width="50px"> <img :src="wallet.img" /> </td>
              <td>
                <b>{{ wallet.name }}</b><br />
                {{ wallet.type }}
              </td>
              <td width="80px" class="amount text-purple">
                {{ 'R$' + wallet.amount.toFixed(2) }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </b-panel>
</template>

<style scoped>
table tbody tr td { vertical-align: middle; }
img { height: 50px; }
.amount { font-size: 18px; font-weight: bold; text-align: left; }
</style>
