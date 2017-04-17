<script>
export default {
  props: {
    title: { type: String },
    type: { type: String, default: 'primary' },
    noBody: { type: Boolean, default: false },
    noTitle: { type: Boolean, default: false },
    hasFooter: { type: Boolean, default: false }
  }
}
</script>

<template>
  <div class="panel" :class="'panel-'+type">
    <div class="panel-heading" v-if="!noTitle">
      <slot name="heading">&nbsp; {{ title }}</slot>
      <div class="pull-right"> <slot name="options" /> </div>
    </div>
    <div class="panel-body" v-if="!noBody">
      <slot></slot>
    </div>
    <div class="panel-footer" v-if="hasFooter">
      <slot name="footer" />
    </div>
  </div>
</template>
