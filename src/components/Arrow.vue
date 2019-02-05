<template>
  <div class="arrow" :class="classList">
    <span class="arrow__func">{{arrow.text}}</span>
    <svg fill="url(#main-gradient)" v-if="arrow.view === 'PREV'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.635 32.635"><defs><linearGradient id="main-gradient" x1="100%" y1="0%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:rgb(0,79,158);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(0,171,228);stop-opacity:1" /></linearGradient></defs><path d="M32.135 16.817H.5a.5.5 0 0 1 0-1h31.635a.5.5 0 0 1 0 1z"/><path d="M13.037 29.353a.502.502 0 0 1-.354-.146L.146 16.669a.504.504 0 0 1 0-.708L12.684 3.429a.5.5 0 0 1 .707.707L1.207 16.315l12.184 12.184a.5.5 0 0 1-.354.854z"/></svg>
    <svg fill="url(#main-gradient)" v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.635 32.635"><defs><linearGradient id="main-gradient" x1="100%" y1="0%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:rgb(0,79,158);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(0,171,228);stop-opacity:1" /></linearGradient></defs><path d="M32.135 16.817H.5a.5.5 0 0 1 0-1h31.635a.5.5 0 0 1 0 1z"/><path d="M19.598 29.353a.5.5 0 0 1-.354-.853l12.184-12.184-12.184-12.18a.5.5 0 0 1 .707-.707l12.537 12.533a.5.5 0 0 1 0 .708L19.951 29.206a.495.495 0 0 1-.353.147z"/></svg>
  </div>
</template>

<script>
  export default {
    props: {
      arrow: {
        type: Object,
        required: true
      }
    },
    computed: {
      classList() {
        return {
          'arrow--prev': this.arrow.view === 'PREV',
          'arrow--next': this.arrow.view === 'NEXT',
        }
      }
    }
  }
</script>

<style lang="scss">
  .arrow {
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    line-height: 1;
    z-index: 1;
    position: absolute;
    width: 5.375rem;
    height: 6.25rem;
    background: #fff url('/img/arrow-wrap.png') no-repeat center;
    background-size: contain;
    top: 50%;
    transition: .2s all ease;
    &__func {
      font-size: 1.125em;
      color: rgba(#333, .25);
      position: absolute;
      text-transform: uppercase;
      transform: rotate(-90deg);
    }
    &.arrow--next {
      transform: translateY(-50%) translateX(50%);
      right: 9.375rem;
      .arrow__func {
        right: -1.7rem;
        bottom: -6rem;
      }
    }
    &.arrow--prev {
      transform: translateY(-50%) translateX(-63%);
      left: 9.375rem;
      .arrow__func {
        left: -1.7rem;
        top: -5rem;
      }
    }
    svg {
      width: 1.875rem;
      height: auto;
      display: inline-block;
    }
  }
  @media screen and (max-width: 1650px), screen and (max-height: 900px) {
    .arrow {
      &.arrow--next {
        right: 8.9375rem;
        .arrow__func {
          bottom: -6rem;
          right: -2.2rem;
        }
      }
      &.arrow--prev {
        left: 6.9375rem;
        .arrow__func {
          top: -5.3rem;
        }
      }
      &__func {
        font-size: 1em;
      }
    }
  }

  @media screen and (max-width: 1600px) , screen and (max-height: 880px) {
    .arrow {
      width: 3.625rem;
      height: 4.1875rem;
      svg {
        width: 1.3rem;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .arrow {
      &.arrow--next {
        right: 7.9375rem;
      }
      &.arrow--prev {
        left: 7.5rem;
      }
    }
  }

  @media screen and (max-width: 1250px) {
    .arrow {
      &.arrow--next {
        right: 5.9375rem;
      }
      &.arrow--prev {
        left: 5.8rem;
      }
      &__func {
        font-size: .9em;
      }
    }
  }

  @media screen and (max-width: 1050px) {
    .arrow {
      &.arrow--next {
        right: 4.4375rem;
      }
      &.arrow--prev {
        left: 4.4rem;
      }
    }
  }

  @media screen and (max-width: 950px) {
    .arrow {
      &.arrow--next {
        right: 3.9375rem;
      }
      &.arrow--prev {
        left: 4rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .arrow {
      &.arrow--next {
        right: 1.9375rem;
        transform: translateY(-50%);
      }
      &__func {
        display: none;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .arrow {
      width: 2.625rem;
      height: 3.1875rem;
      &.arrow--prev {
        left: 3.2rem;
      }
      &.arrow--prev {
        right: 1.7rem;
      }
    }
  }
</style>