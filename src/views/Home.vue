<template>
  <div class="home inner">
    <div class="home__polygons">
      <Hexagon
        v-for="(pol, i) in home.polygons"
        :key="i"
        :img="pol"
      />
    </div>
    <div class="home__content inner__content">
      <div class="home__cube">
        <img src="/img/home-cube.jpg" alt="alt">
      </div>
      <div class="home__info">
        <div class="home__text">
          <p class="home__text-top">Коммерческое<br> предложение</p>
          <div class="home__text-main">
            <p class="home__text-category">WEB РАЗРАБОТКА</p>
            <Caption
              :caption="home.caption"
            />
          </div>
        </div>
        <div class="home__period">
          <img src="img/home-period.jpg" alt="alt">
          <div class="home__period-text">
            <i>
              <svg viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.053 16.466L0 8.97v18.534L15.053 35V16.466zM16.983 35L32 27.503V8.969l-15.017 7.498V35zM16 0L1.018 7.497 16 14.96l12.456-6.201 2.527-1.262L16 0z" fill="#fff"/></svg>
            </i>
            <p>2016-2019</p>
          </div>
        </div>
      </div>
     <SocialsList
      :socials="home.socials"
     />
    </div>
  </div>
</template>

<script>
  import Hexagon from '@/components/Hexagon';
  import Caption from '@/components/Caption';
  import SocialsList from '@/components/SocialsList';

  export default {
    components: {
      Hexagon,
      Caption,
      SocialsList
    },
    computed: {
      home() {
        return this.$store.state.home;
      }
    }
  };
</script>

<style lang="scss">
  .home {
    &__polygons {
      position: absolute;
      width: 44%;
      right: 8.5%;
      z-index: -1;
      top: 0;
      height: 39%;
    }
    &__period {
      height: 100%;
      position: relative;
      &-text {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(#1E2633, .5);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 1rem;
        color: #ffffff;
        font-size: 1.625em;
        p {
          margin-left: 1.75rem;
        }
        i {
          display: inline-block;
          width: 2rem;
          svg {
            display: block;
            width: 100%;
            height: auto;
          }
        }
      }
      img {
        max-height: 100%;
        display: block;
        width: auto;
      }
    }
    &__cube {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 86vh;
      img {
        display: block;
        height: 100%;
        width: auto;
      }
    }
    &__info {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      position: relative;
      height: 58%;
      width: 100%;
      padding-left: 16%;
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      position: relative;
      z-index: 0;
    }
    &__text {
      font-size: 1.625em;
      text-align: right;
      margin-right: 6.875rem;
      margin-bottom: -1rem;
      &-category {
        font-size: 1.34615384615em;
        text-transform: uppercase;
        background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      &-ecommerce {
        &.caption {
          font-size: 3.07692307692em;
        }
      }
      &-top {
        padding-right: 2rem;
        position: relative;
        margin-bottom: 5rem;
        &:after {
          content: '';
          display: inline-block;
          position: absolute;
          width: 2px;
          top: 3%;
          right: 0;
          bottom: 3%;
          background-color: rgba(#333, .25);
        }
      }
    }
  }

  @media screen and (max-width: 1650px), screen and (max-height: 900px) {
    .home {
      &__text {
        font-size: 1.45em;
      }
    }
  }

  @media screen and (max-height: 700px) {
    .home {
      &__period {
        &-text {
          font-size: 1.3em;
          i {
            width: 1.5rem;
          }
        }
      }
    }
  }


  @media screen and (max-width: 1380px) {
    .home {
      &__polygons {
        width: 59%;
        top: -5%;
      }
    }
  }

  @media screen and (max-width: 1350px) {
    .home {
      &__text {
        margin-right: 5rem;
      }
      &__cube {
        height: 77vh;
      }
      &__info {
        height: 62%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .home {
      &__text {
        font-size: 1.2em;
      }
      &__info {
        height: auto;
        align-items: flex-start;
        padding-left: 1.9375rem;
      }
      &__cube {
        left: -22%;
      }
      &__period {
        img {
          max-height: 340px;
        }
      }
    }
  }

  @media screen and (max-width: 650px) {
    .home {
      &__cube {
        left: -47%;
      }
      &__text {
        &-ecommerce {
          &.caption {
            font-size: 2.5em;
            margin-top: .6rem;
          }
        }


      }
      &__period {
        img {
          max-height: 260px;
        }
      }
    }
  }

  @media screen and (max-width: 530px) {
    .home {
      &__info {
        flex-wrap: wrap;
        justify-content: center;
        padding-right: 1.9375rem;
      }
      &__text {
        width: 100%;
        margin-right: 0;
        order: 2;
        text-align: center;
        &-top {
          margin-bottom: 2.2rem;
          padding-right: 0;
          padding-bottom: 1.2rem;
          &:after {
            top: 100%;
            bottom: auto;
            width: 45px;
            height: 2px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
      &__period {
        order: 1;
        margin-bottom: 4rem;
      }
    }
  }
</style>