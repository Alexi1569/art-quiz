<template>
  <div class="step" :class="classList">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['step'],
    computed: {
      classList() {
        return {
          'step--1': this.step === 1,
          'step--2': this.step === 2,
          'step--3': this.step === 3,
        }
      }
    }
  }
</script>

<style lang="scss">
  .step {
    height: 100%;
  }
</style>