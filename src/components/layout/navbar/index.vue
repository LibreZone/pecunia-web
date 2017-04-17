<script>
import NavBrand from './Brand'
import NavLeft from './Left'
import NavRight from './Right'

export default {
  components: { NavBrand, NavLeft, NavRight },
  data () {
    return { isOpen: false }
  },
  watch: {
    $route () {
      this.closeNav()
    }
  },
  methods: {
    onToggle () { this.isOpen = !this.isOpen },
    closeNav () { this.isOpen = false }
  }
}
</script>

<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <nav-brand @toggleNavbar="onToggle" />
      <div class="collapse navbar-collapse" :class="{ 'in': isOpen }">
        <nav-left />
        <nav-right />
      </div>
    </div>
  </nav>
</template>
