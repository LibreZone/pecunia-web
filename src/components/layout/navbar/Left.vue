<script>
import NavLink from './Link'

export default {
  components: { NavLink }
}
</script>

<template>
  <ul class="nav navbar-nav">
    <nav-link :to="{ name: 'overview' }" name="Visão geral" />
    <nav-link :to="{ path: '/transactions' }" name="Lançamentos" />
    <nav-link :to="{ name: 'wallets' }" name="Contas" />
    <nav-link :to="{ path: '/cards' }" name="Cartão de crédito" />
    <nav-link :to="{ path: '/reports' }" name="Relatórios" />
  </ul>
</template>
