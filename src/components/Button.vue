<template>
  <button class="btn" :class="classList"><span>{{btn.text}}</span></button>
</template>

<script>
  export default {
    props: {
      btn: {
        type: Object,
        required: true
      }
    },
    computed: {
      classList() {
        return {
          'btn--linear': this.btn.type === 'LINEAR',
          'steps__btn': this.btn.view === 'STEPS',
          'request-modal__btn': this.btn.view === 'MODAL',
          'compare__btn': this.btn.view === 'COMPARE',
        }
      }
    }
  }
</script>

<style lang="scss">
  .btn {
    border: 0;
    cursor: pointer;
    background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
    line-height: 1;
    font-size: 1.625em;
    font-family: 'Acrom';
    color: #ffffff;
    padding: 1.5rem 3.8rem;
    &.btn--linear {
      min-width: 49%;
      position: relative;
      z-index: 0;
      background: none;
      padding: 0;
      span {
        position: relative;
        z-index: 5;
        display: block;
        padding: 1.8rem .5rem;
        width: 100%;
        background: #fff;
        color: rgba(0, 79, 159, 0.75);
        height: 100%;

      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: -3px;
        z-index: -1;
        right: -3px;
        bottom: -3px;
        top: -3px;
        background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
      }

    }
    &.steps__btn {
      margin-top: 2rem;
      position: relative;
      z-index: 1;
    }
    &.request-modal__btn {
      font-size: 1.375em;
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 1600px) , screen and (max-height: 880px) {
    .btn {
      &.steps__btn {
        padding: 1.1rem 2.8rem;
        font-size: 1.25em;
      }
    }
  }

  @media screen and (max-width: 1300px), screen and (max-height: 720px) {
    .btn {
      &.steps__btn {
        padding: 1rem 2.1rem;
        font-size: 1.1em;
      }
    }
  }

  @media screen and (max-width: 1350px) {
    .btn {
      &.request-modal__btn {
        font-size: 1.2em;
        span {
          padding: 1.2rem .5rem;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .btn {
      &.steps__btn {
        padding: .7rem 1.7rem;
        font-size: .9em;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .btn {
      &.request-modal__btn {
        font-size: 1em;
        span {
          padding: .8rem .5rem;
        }
      }
    }
  }
</style>