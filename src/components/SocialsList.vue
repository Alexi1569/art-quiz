<template>
  <ul class="socials-list">
    <li
      v-for="(item, i) in socials"
      :key="i"
    >
      <a :href="item.link" target="_blank" v-html="item.icon"></a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['socials']
  }
</script>

<style lang="scss">
  .socials-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 4.6875rem;
    padding-left: 4.6875rem;
    margin-right: 4.6875rem;
    margin-bottom: 4rem;
    background-color: #fff;
    z-index: -1;
    position: relative;
    &:before,
    &:after {
      content: '';
      position: absolute;
      display: inline-block;
      height: 1px;
      background: rgba(#333, .25);
      top: 50%;
    }
    &:before {
      width: 34vw;
      right: 100%;
    }
    &:after {
      width: 12rem;
      left: 100%;
    }
    li {
      margin-right: 6.25rem;
      &:last-of-type {
        margin-right: 0;
      }
      a {
        width: 20px;
        height: 20px;
        display: inline-block;
        position: relative;
        z-index: 0;
        &:hover {
          svg {
            fill: #fff !important;
            path {
              fill: #fff !important;
            }
          }
          &:before {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        &:before {
          content: '';
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: inline-block;
          left: 50%;
          position: absolute;
          z-index: -1;
          top: 50%;
          transform: translate(-50%, -50%) scale(.7);
          background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
          opacity: 0;
          transition: .2s all ease;
        }
        svg {
          display: block;
          width: 100%;
          height: auto;
          transition: .2s all ease;
        }
      }
    }
  }

  @media screen and (max-width: 1650px), screen and (max-height: 900px) {
    .socials-list {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 1250px) {
    .socials-list {
      margin-bottom: 2.2rem;
    }
  }

  @media screen and (max-width: 1050px) {
    .socials-list {
      margin-bottom: 2.4rem;
    }
  }

  @media screen and (max-width: 950px) {
    .socials-list {
      margin-bottom: 2.4rem;
      padding-right: 3rem;
      padding-left: 3rem;
      margin-right: 3rem;
      li {
        margin-right: 3.5rem;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .socials-list {
      margin: 2.8rem 2.8rem 2.8rem 0;
      background-color: transparent;
    }
  }

  @media screen and (max-width: 530px) {
    .socials-list {
      z-index: 0;
      margin: 3.2rem auto 1.8rem;
      justify-content: center;
      &:before,
      &:after {
        width: 300px;
      }
    }
  }
</style>