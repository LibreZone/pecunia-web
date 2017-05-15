<script>
import { default as NProgress } from 'vue-nprogress/src/NprogressContainer'
import { AppNavbar } from '@/components/layout'

export default {
  name: 'app',
  components: { AppNavbar, NProgress },
  data () {
    return {
      isLogged: true
    }
  }
}
</script>

<template>
    <div id="app">
        <n-progress />
        <app-navbar v-if="isLogged" />
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="sass" src="@/assets/sass/app.scss" />
