<template>
  <div class="home__polygon" :class="classList">
    <svg :transform="transform" viewBox="0 0 247 283" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.457 71.039L123.5.577 245.543 71.04V211.96L123.5 282.423 1.457 211.961V71.039z"/></svg>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      img: {
        type: Object,
        required: true
      }
    },
    computed: {
      transform() {
        return (this.img.view === 'POLYGON_FIRST' || this.img.view === 'POLYGON_SECOND' || this.img.view === 'POLYGON_THIRD') ? 'rotate(90)' : ''
      },
      classList() {
        return {
          'home__polygon--first': this.img.view === 'POLYGON_FIRST',
          'home__polygon--second': this.img.view === 'POLYGON_SECOND',
          'home__polygon--third': this.img.view === 'POLYGON_THIRD',
          'steps__logo': this.img.view === 'FUNCTIONAL__LOGO',
          'steps__year': this.img.view === 'FUNCTIONAL__YEAR',
          'request-modal__hexagon': this.img.view === 'REQUEST_MODAL',
          'thank-modal__hexagon': this.img.view === 'THANK_MODAL',
          'steps__technologies-hexagon': this.img.view === 'TECHNOLOGIES',
        }
      }
    }
  }
</script>

<style lang="scss">
  @keyframes hex-anim {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(-1.5%, 1.5%);
    }
    50% {
      transform: translate(2%, -2%);
    }
    75% {
      transform: translate(1.5%, -1.5%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .home {
    &__polygon {
      height: auto;
      position: absolute;
      line-height: 1;
      svg {
        display: block;
        width: 100%;
        height: auto;
        path {
          opacity: .1;
          stroke: #333;
        }
      }
      &.request-modal__hexagon {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 64%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }
      &.thank-modal__hexagon {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 115%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }
      &.home__polygon--first {
         right: 0;
         width: 67.2%;
         bottom: 0;
        animation: hex-anim 12s infinite ease-in;
       }
      &.home__polygon--second {
         right: 75%;
         width: 33.12%;
         bottom: 5%;
        animation: hex-anim 12s infinite ease-in .5s;
       }
      &.home__polygon--third {
         right: 63%;
         width: 8.2%;
         bottom: 9%;
        animation: hex-anim 12s infinite ease-in 1s;
        svg {
          path {
            opacity: .5;
          }
        }
      }
    }
  }
</style>