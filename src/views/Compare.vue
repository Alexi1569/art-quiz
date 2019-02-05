<template>
  <div class="compare inner">
    <div class="compare__content inner__content">
      <div class="compare__info pl pr">
        <div class="compare__row">
          <div class="compare__col compare__col--info"></div>
          <div class="compare__col">
            <div class="compare__col-head">
              <p>Быстрый старт</p>
              <Button
                @click.native="$modal.show('request-modal')"
                :btn="btn"
              />
            </div>
          </div>
          <div class="compare__col">
            <div class="compare__col-head">
              <p>КОМПЛЕКСНЫЙ</p>
              <Button
                @click.native="$modal.show('request-modal')"
                :btn="btn"
              />
            </div>
          </div>
          <div class="compare__col">
            <div class="compare__col-head">
              <p>УНИКАЛЬНЫЙ</p>
              <Button
                @click.native="$modal.show('request-modal')"
                :btn="btn"
              />
            </div>
          </div>
          <div class="compare__col">
            <div class="compare__col-head">
              <p>БИЗНЕС+</p>
              <Button
                @click.native="$modal.show('request-modal')"
                :btn="btn"
              />
            </div>
          </div>
        </div>

        <div
          class="compare__row compare__row--inner"
          v-for="(row, i) in rows"
          :key="i"
        >
          <div class="compare__col compare__col--info">
            <div class="compare__text">
              <p v-html="row.text"></p>
            </div>
          </div>
          <div class="compare__col">
            <i v-if="row.values[0] === true" class="compare__icon compare__icon--true">
              <svg viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.728 10.352l8.41 7.182L25.219 3" stroke="url(#paint0_linear)" stroke-width="5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="26.948" y1="9.488" x2=".998" y2="10.352"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#004F9F"/>
                    <stop offset="1" stop-color="#00ABE4"/>
                  </linearGradient>
                </defs>
              </svg>
            </i>
            <i v-else class="compare__icon compare__icon--false">
              <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18.813l8.002-7.872-7.878-7.874M19 3.062l-7.998 7.876 7.874 7.87" stroke="#CDCDCD"
                      stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </div>
          <div class="compare__col">
            <i v-if="row.values[1] === true" class="compare__icon compare__icon--true">
              <svg viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.728 10.352l8.41 7.182L25.219 3" stroke="url(#paint0_linear)" stroke-width="5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="26.948" y1="9.488" x2=".998" y2="10.352"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#004F9F"/>
                    <stop offset="1" stop-color="#00ABE4"/>
                  </linearGradient>
                </defs>
              </svg>
            </i>
            <i v-else class="compare__icon compare__icon--false">
              <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18.813l8.002-7.872-7.878-7.874M19 3.062l-7.998 7.876 7.874 7.87" stroke="#CDCDCD"
                      stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </div>
          <div class="compare__col">
            <i v-if="row.values[2] === true" class="compare__icon compare__icon--true">
              <svg viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.728 10.352l8.41 7.182L25.219 3" stroke="url(#paint0_linear)" stroke-width="5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="26.948" y1="9.488" x2=".998" y2="10.352"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#004F9F"/>
                    <stop offset="1" stop-color="#00ABE4"/>
                  </linearGradient>
                </defs>
              </svg>
            </i>
            <i v-else class="compare__icon compare__icon--false">
              <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18.813l8.002-7.872-7.878-7.874M19 3.062l-7.998 7.876 7.874 7.87" stroke="#CDCDCD"
                      stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </div>
          <div class="compare__col">
            <i v-if="row.values[3] === true" class="compare__icon compare__icon--true">
              <svg viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.728 10.352l8.41 7.182L25.219 3" stroke="url(#paint0_linear)" stroke-width="5"
                      stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="26.948" y1="9.488" x2=".998" y2="10.352"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#004F9F"/>
                    <stop offset="1" stop-color="#00ABE4"/>
                  </linearGradient>
                </defs>
              </svg>
            </i>
            <i v-else class="compare__icon compare__icon--false">
              <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18.813l8.002-7.872-7.878-7.874M19 3.062l-7.998 7.876 7.874 7.87" stroke="#CDCDCD"
                      stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button'

  export default {
    components: {
      Button,
    },
    data() {
      return {
        btn: {
          text: 'Заказать',
          view: 'COMPARE'
        },
        rows: [
          {
            text: 'Первая позиция блока сравнения',
            values: [true, true, false, false]
          },
          {
            text: 'Вторая позиция блока сравнения',
            values: [true, true, true, false]
          },
          {
            text: 'Третья позиция блока сравнения',
            values: [true, true, true, false]
          },
          {
            text: 'Четвертая позиция блока сравнения',
            values: [true, true, false, false]
          },
          {
            text: 'Пятая позиция блока сравнения',
            values: [true, true, false, false]
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
  .compare {
    &__icon {
      display: inline-block;

      &.compare__icon--true {
        width: 1.125rem;
      }

      &.compare__icon--false {
        width: 1rem;
      }

      svg {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    &__info {
      height: 100%;
      background: url('/img/compare-bg.png') no-repeat top center;
      background-size: cover;
      padding-top: 4.375rem;
      position: relative;
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 2.5rem;
        background-image: linear-gradient(90deg, #fff 0%, rgba(30, 32, 37, 0) 30%);
      }
    }

    &__text {
      background-color: rgba(#fff, .9);
      margin: .875rem .875rem .875rem 0;
      line-height: 1.3;
      padding: 1rem 1.5rem 1rem 2.8125rem;
      min-height: calc(100% - 1.75rem);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    &__btn {
      &.btn {
        font-size: 1.125em;
        padding: .97rem 2.9rem;
        margin-top: 1.5625rem;
        max-width: 100%;
      }
    }

    &__row {
      min-height: 15%;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      border-bottom: 1px solid rgba(#000, .25);

      &.compare__row--inner {
        .compare__col:not(.compare__col--info) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      &:last-of-type {
        border-bottom: 0;
      }
    }

    &__col {
      width: 20.35%;
      border-right: 1px solid rgba(#000, .25);

      &:last-of-type {
        border-right: 0;
      }

      &-head {
        font-size: 1.25em;
        font-family: 'Acrom';
        text-align: center;
        background-color: #fff;
        padding: 1.5625rem 1.5rem 1.875rem;
        text-transform: uppercase;
        margin: 0 .875rem .875rem;
        p {
          white-space: nowrap;
        }
      }

      &.compare__col--info {
        width: 18.6%;
        font-size: 1.125em;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }

  @media screen and (max-height: 850px) {
    .compare {
      &__info {
        padding-top: 0;
      }
    }
  }

  @media screen and (max-width: 1700px) {
    .compare {
      &__text {
        padding: .8rem 1.2rem .8rem 2.2rem;
      }
      &__col {
        &-head {
          padding: 1.3rem 1rem 1.3rem;
        }
        &.compare__col--info {
          font-size: 1em;
        }
        &-head {
          font-size: 1.15em;
        }
      }
      &__btn {
        &.btn {
          padding: .95rem 2.1rem;
          font-size: 1em;
          margin-top: 1.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .compare {
      &__text {
        padding: .55rem .8rem .55rem 1.6rem;
        margin: .75rem .75rem .75rem 0;
        height: calc(100% - 1.5rem);
      }
      &__col {
        &-head {
          padding: 1rem .75rem 1rem;
          margin: 0 .75rem .75rem;
        }
        &.compare__col--info {
          font-size: .9em;
        }
        &-head {
          font-size: 1em;
        }
      }
      &__btn {
        &.btn {
          padding: .85rem 1.75rem;
          font-size: .95em;
          margin-top: 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .compare {
      &__text {
        padding: .4rem .65rem .4rem 1.3rem;
        margin: .7rem .7rem .7rem 0;
        height: calc(100% - 1.4rem);
      }
      &__col {
        &-head {
          padding: .75rem .6rem .75rem;
          margin: 0 .7rem .7rem;
        }
        &.compare__col--info {
          font-size: .8em;
        }
        &-head {
          font-size: .9em;
        }
      }
      &__btn {
        &.btn {
          padding: .8rem 1.3rem;
          font-size: .9em;
          margin-top: .75rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .compare {
      &__content {
        overflow-x: auto;
      }
      &__info {
        width: 800px;
      }
    }
  }
</style>