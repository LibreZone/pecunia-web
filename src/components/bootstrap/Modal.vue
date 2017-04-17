<script>
export default {
  props: {
    show: { type: Boolean, default: false },
    size: { type: String, default: 'full' },
    hasFooter: { type: Boolean, default: false },
    title: { type: String, default: ' ' }
  },
  data () {
    return {
      isOpen: this.show
    }
  },
  watch: {
    show (value) {
      if (value) {
        this.open()
      } else {
        this.close()
      }
    }
  },
  created () {
    if (this.show) {
      this.open()
    }
  },
  beforeDestroy () {
    this.close()
  },
  methods: {
    open () {
      this.isOpen = true
      document.body.className += ' modal-open'
    },
    close () {
      this.isOpen = false
      document.body.className = document.body.className.replace(/\s?modal-open/, '')
    }
  }
}
</script>

<template>
  <div v-if="isOpen">
    <div class="modal" @click.self="close">
      <div class="modal-dialog" :class="'modal-' + size">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="close">&times;</button>
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer" v-if="hasFooter">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop in"></div>
  </div>
</template>

<style scoped>
.modal { display: block!important; }
</style>
