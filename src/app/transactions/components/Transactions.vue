<script>
import { BPanel } from '@/components/bootstrap'

export default {
  components: { BPanel }
}
</script>

<template>
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      <b-panel title="Lançamentos">
        <div class="row">
          <table class="table table-hover">
            <tbody>
              <tr v-for="n in 10">
                <td>..</td>
                <td>..</td>
                <td>..</td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-panel>
    </div>
  </div>
</template>

<style scoped>
td { border-color: #eee!important; }
</style>
