<template>
  <p class="caption" :class="classList">{{caption.text}}</p>
</template>

<script>
  export default {
    props: {
      caption: {
        type: Object,
        required: true
      }
    },
    computed: {
      classList() {
        return {
          'home__text-ecommerce': this.caption.view === 'HOME',
          'steps__caption': this.caption.view === 'STEPS',
        }
      }
    }
  }
</script>

<style lang="scss">
  .caption {
    font-family: 'Acrom';
    background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 5em;
    text-transform: uppercase;
    &.steps__caption {
      margin-right: 2rem;
      margin-left: 6.2%;
      transition: .2s all ease;
    }
  }

  @media screen and (max-width: 1600px) , screen and (max-height: 880px) {
    .caption {
      &.steps__caption {
        font-size: 3.8em;
      }
    }
  }

  @media screen and (max-width: 1300px) , screen and (max-height: 720px) {
    .caption {
      &.steps__caption {
        font-size: 2.9em;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .caption {
      &.steps__caption {
        font-size: 2.3em;
      }
    }
  }

  @media screen and (max-width: 650px) {
    .caption {
      &.steps__caption {
        font-size: 1.9em;
      }
    }
  }
</style>