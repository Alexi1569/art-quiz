<template>
  <div class="wrapper" id="app">
    <Header />
    <div class="page">
      <transition name="router-anim">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import VModal from 'vue-js-modal'
  import Vue from 'vue'

  Vue.use(VModal);

  export default {
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .router-anim-enter-active {
    animation: coming .5s;
    opacity: 0;
  }
  .router-anim-leave-active {
    animation: going .5s;
  }

  @keyframes going {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50px);
      opacity: 0;
    }
  }
  @keyframes coming {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  *:focus {
    outline: none;
  }

  .inner {
    height: 100%;
    width: 100%;
    &__content {
      width: 100%;
      height: 100%;
    }
  }

  .wrapper {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
  }
  
  .page {
    height: 86.22vh;
  }

  body {
    font-size: 16px;
    font-family: 'Montserrat light', Arial, sans-serif;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html {
    font-size: 16px;
  }

  .pl {
    padding-left: 8.4375rem;
    margin-left: 0.9375rem;
  }

  .pr {
    padding-right: 8.4375rem;
    margin-right: 0.9375rem;
  }

  @media screen and (max-width: 1650px), screen and (max-height: 900px) {
    body {
      font-size: 15px;
    }

    html {
      font-size: 15px;
    }

    .pr {
      padding-right: 8rem;
    }

    .pl {
      padding-left: 8rem;
    }
  }

  @media screen and (max-width: 1500px) {
    .pr {
      padding-right: 7rem;
    }

    .pl {
      padding-left: 7rem;
    }
  }

  @media screen and (max-width: 1350px) {
    .page {
      height: 83vh;
    }
  }

  @media screen and (max-width: 1250px) {
    .pr {
      padding-right: 5rem;
    }

    .pl {
      padding-left: 5rem;
    }

    body {
      font-size: 14px;
    }

    html {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 1050px) {
    .pr {
      padding-right: 3.5rem;
    }

    .pl {
      padding-left: 3.5rem;
    }

    body {
      font-size: 13px;
    }

    html {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 950px) {
    .pr {
      padding-right: 3rem;
    }

    .pl {
      padding-left: 3rem;
    }
  }

  @media screen and (max-width: 767px) {
    .page {
      height: auto;
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .inner {
      height: auto;
    }

    .pr {
      padding-right: 1rem;
    }

    .pl {
      padding-left: 1rem;
    }
  }
</style>
