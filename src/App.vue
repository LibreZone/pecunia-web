<script>
import { default as NProgress } from 'vue-nprogress/src/NprogressContainer'
import { AppNavbar } from '@/components/layout'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: { AppNavbar, NProgress },
  computed: {
    ...mapState(['Auth'])
  }
}
</script>

<template>
    <div id="app">
        <n-progress />
        <app-navbar v-if="Auth.isLogged" />
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="sass" src="@/assets/sass/app.scss" />
