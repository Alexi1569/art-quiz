<template>
  <header class="header pl pr">
    <modal
      :adaptive="modal.adaptive"
      :height="modal.height"
      class="header__modal request-modal"
      name="request-modal">
      <Hexagon
        :img="modal.hexagon.request"
      />
      <form @submit.prevent="handleSubmit" class="request-modal__inner">
        <button class="request-modal__close" @click="$modal.hide('request-modal')">
          <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="url(#paint0_linear)" d="M.5.5h29v29H.5z"/><path stroke="url(#paint1_linear)" d="M.646 29.646l29-29"/><path stroke="url(#paint2_linear)" d="M.354.646l29 29"/><defs><linearGradient id="paint0_linear" x1="30" x2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#004F9F"/><stop offset="1" stop-color="#00ABE4"/></linearGradient><linearGradient id="paint1_linear" x1="30" y1="1" x2="1" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#004F9F"/><stop offset="1" stop-color="#00ABE4"/></linearGradient><linearGradient id="paint2_linear" x1="29" y1="30" x2="0" y2="1" gradientUnits="userSpaceOnUse"><stop stop-color="#004F9F"/><stop offset="1" stop-color="#00ABE4"/></linearGradient></defs></svg>
        </button>
        <div class="request-modal__parts">
          <div class="request-modal__left request-modal__part">
            <Input
              :input="inputs.name"
            />
            <Input
              :input="inputs.direction"
            />
            <Input
              :input="inputs.products"
            />
          </div>
          <div class="request-modal__right request-modal__part">
            <Input
              :input="inputs.phone"
            />
            <Input
              :input="inputs.textarea"
            />
          </div>
        </div>
        <Button
          :btn="modal.btn"
        />
      </form>
    </modal>

    <modal
      :adaptive="modal.adaptive"
      :height="modal.height"
      class="header__modal thank-modal"
      name="thank-modal">
      <Hexagon
        :img="modal.hexagon.thank"
      />
      <div class="thank-modal__inner">
        <button class="request-modal__close" @click="$modal.hide('thank-modal')">
          <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="url(#paint0_linear)" d="M.5.5h29v29H.5z"/><path stroke="url(#paint1_linear)" d="M.646 29.646l29-29"/><path stroke="url(#paint2_linear)" d="M.354.646l29 29"/><defs><linearGradient id="paint0_linear" x1="30" x2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#004F9F"/><stop offset="1" stop-color="#00ABE4"/></linearGradient><linearGradient id="paint1_linear" x1="30" y1="1" x2="1" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#004F9F"/><stop offset="1" stop-color="#00ABE4"/></linearGradient><linearGradient id="paint2_linear" x1="29" y1="30" x2="0" y2="1" gradientUnits="userSpaceOnUse"><stop stop-color="#004F9F"/><stop offset="1" stop-color="#00ABE4"/></linearGradient></defs></svg>
        </button>
        <div class="thank-modal__content">
          <p class="thank-modal__top">Спасибо {{inputs.name.val}}!</p>
          <p class="thank-modal__descr">Ваша заявка оформлена.<br> В ближайшее время наш менеджер<br> свяжется с вами</p>
        </div>
      </div>
    </modal>

    <router-link class="header__logo" to="/">
      <Logo />
    </router-link>
    <button @click="$store.commit('openMenu')" class="header__toggler">
      <span class="header__toggler-line toggler-line--first"></span>
      <span class="header__toggler-line toggler-line--second"></span>
      <span class="header__toggler-line toggler-line--third"></span>
    </button>
    <div class="header__nav" :class="menuClassList">
      <i class="header__close" @click="$store.commit('closeMenu')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971"><path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 0 0 0-4.242 2.998 2.998 0 0 0-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 0 0-4.242 0 2.998 2.998 0 0 0 0 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 1 0 4.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L28.228 23.986z"/></svg>
      </i>
      <ul>
        <li>
          <router-link @click.native="closeMenu" class="header__nav-item" to="/start">
            Быстрый старт
            <span class="header__nav-line"></span>
          </router-link>
        </li>
        <li>
          <router-link @click.native="closeMenu" class="header__nav-item" to="/complex">
            Комплексный
            <span class="header__nav-line"></span>
          </router-link>
        </li>
        <li>
          <router-link @click.native="closeMenu" class="header__nav-item" to="/unique">
            Уникальный
            <span class="header__nav-line"></span>
          </router-link>
        </li>
        <li>
          <router-link @click.native="closeMenu" class="header__nav-item" to="/business">
            Бизнес+
            <span class="header__nav-line"></span>
          </router-link>
        </li>
        <li>
          <router-link @click.native="closeMenu" class="header__nav-item" to="/compare">
            Сравнить
            <span class="header__nav-line"></span>
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  import Logo from '@/components/Logo'
  import Input from '@/components/Input'
  import Button from '@/components/Button'
  import Hexagon from "@/components/Hexagon";


export default {
  components: {
    Hexagon,
    Logo,
    Input,
    Button
  },
  computed: {
    header() {
      return this.$store.state.header;
    },
    menuClassList() {
      return {
        'opened': this.header.isMenuOpened
      }
    }
  },
  data() {
    return {
      modal: {
        adaptive: true,
        height: 'auto',
        btn: {
          text: 'ОФОРМИТЬ',
          type: 'LINEAR',
          view: 'MODAL'
        },
        hexagon: {
          request: {
            view: 'REQUEST_MODAL'
          },
          thank: {
            view: 'THANK_MODAL'
          }
        }
      },
      inputs: {
        name: {
          type: 'text',
          placeholder: 'Имя',
          val: '',
          view: 'input',
          error: '',
          required: true
        },
        direction: {
          view: 'select',
          val: 'Сфера деятельности',
          options: [
            'Обувь',
            'Одежда',
            'Смартфоны',
          ],
        },
        products: {
          view: 'select',
          val: 'Колличество товаров',
          options: [
            'Более 1000',
            'Более 12000',
            'Более 25000',
          ],
        },
        phone: {
          type: 'text',
          placeholder: 'Номер телефона',
          val: '',
          view: 'phone',
          error: '',
          required: true,
          mask: '+38 (0##) ###-##-##'
        },
        textarea: {
          placeholder: 'Комментарий',
          val: '',
          view: 'textarea',
          error: '',
          required: true,
        },
      }
    }
  },
  methods: {
    handleSubmit(e) {
      this.$modal.show('thank-modal');
      this.$modal.hide('request-modal');
    },
    closeMenu() {
      if (window.innerWidth <= 767) {
        this.$store.commit('closeMenu');
      } else {
        return;
      }
    },
    alignLines() {
      const item = document.querySelector('.header__nav-item');
      const lines = document.querySelectorAll('.header__nav-line');

      lines.forEach(line => {
        line.style.top = `-${item.getBoundingClientRect().top}px`;
      });
    }
  },
  mounted() {
    this.alignLines();
    window.addEventListener('resize', this.alignLines);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.alignLines);
  }
};
</script>

<style lang="scss">
  .thank-modal {
    .v--modal {
      width: 36.25rem !important;
    }
    &__inner {
      font-size: 1.875em;
      text-align: center;
      height: 36.25rem;
      max-height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__top {
      line-height: 1.3;
      font-family: 'Acrom';
      position: relative;
      padding-bottom: 2rem;
      &:after {
        content: '';
        display: inline-block;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
        width: 6.25rem;
        height: 5px;
      }
    }
    &__descr {
      font-size: .73em;
      line-height: 1.3;
      margin-top: 2rem;
    }
  }

  .request-modal {
    .v--modal {
      width: 70.625rem !important;
    }
    &__inner {
      text-align: center;
      padding: 5.3125rem;
      &:before,
      &:after {
        content: '';
        display: inline-block;
        bottom: 0;
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        width: 30%;
        height: 12.1875rem;
      }
      &:before {
        left: 0;
        background-position: left bottom;
        background-image: url('/img/modal-left.png');
      }
      &:after {
        right: 0;
        background-position: right bottom;
        background-image: url('/img/modal-right.png');
      }
    }
    &__part {
      width: calc(50% - 1rem);
      text-align: left;
    }
    &__parts {
      display: flex;
      align-items: stretch;
      position: relative;
      justify-content: space-between;
    }
    &__close {
      background-color: transparent;
      border: 0;
      position: absolute;
      cursor: pointer;
      width: 1.875rem;
      height: 1.875rem;
      right: 1.875rem;
      top: 1.875rem;
      svg {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    height: 13.78vh;
    &__modal {
      .v--modal {
        margin: auto;
        max-width: 100% !important;
        left: auto !important;
        box-shadow: none;
        border-radius: 0;
      }
      &.v--modal-overlay {
        background: rgba(#f5f5f5, .95);
        .v--modal-box {
          overflow: visible;
        }
      }
    }
    &__close {
      display: inline-block;
      width: 25px;
      height: 25px;
      position: absolute;
      left: 50%;
      top: 2rem;
      transform: translateX(-50%);
      svg {
        display: block;
        width: 100%;
        height: auto;
        fill: #fff;
      }
    }
    &__toggler {
      display: none;
      background-color: #fff;
      width: 32px;
      height: 22px;
      position: relative;
      border: 0;
      cursor: pointer;
      &-line {
        display: inline-block;
        width: 100%;
        height: 2px;
        position: absolute;
        left: 0;
        background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
        &.toggler-line--first {
          top: 0;
        }
        &.toggler-line--second {
          top: 10px;
        }
        &.toggler-line--third {
          top: calc(100% - 2px);
        }
      }
    }
    &__logo {
      width: 14.1875rem;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
    }
    &__nav {
      font-size: 1.125em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-family: 'Montserrat medium';
      &-line {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 50%;
        right: 0;
        height: 4px;
        top: 0;
        opacity: 0;
        transition: .2s all ease;
        background-color: #333333;
      }
      ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        li {
          margin-right: 4.8125rem;
          &:last-of-type {
            margin-right: 0;
          }
          a {
            position: relative;
            display: block;
            transition: .2s all ease;
            &.router-link-active {
              font-family: 'Acrom';
            }
            &.router-link-active,
            &:hover {
              .header__nav-line {
                opacity: 1;
                left: 0;
                width: 100%;
                transform: translateX(0%);
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .header {
      &__nav {
        font-size: 1em;
        ul {
          li {
            margin-right: 3.4rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1350px) {
    .header {
      height: 17vh;
    }
    .request-modal {
      &__inner {
        padding-left: 4rem;
        padding-right: 4rem;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .header {
      height: 17vh;
      &__nav {
        ul {
          li {
            margin-right: 2.4rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1250px) {
    .header {
      &__nav {
        ul {
          li {
            margin-right: 2.2rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1050px) {
    .header {
      &__nav {
        ul {
          li {
            margin-right: 1.7rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 950px) {
    .header {
      &__logo {
        width: 11rem;
      }
      &__nav {
        font-size: .9em;
        ul {
          li {
            margin-right: 1.4rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .header {
      align-items: center;
      height: auto;
      padding: 2.4rem 0;
      &__toggler {
        display: inline-block;
      }
      &__nav {
        position: fixed;
        height: 100%;
        width: 100%;
        transform: translateX(-100%);
        transition: .35s all ease-in;
        background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
        z-index: 5;
        color: #ffffff;
        left: 0;
        justify-content: center;
        top: 0;
        opacity: 0;
        font-size: 1.5em;
        padding: 3rem 0;
        overflow-y: auto;
        text-align: center;
        &.opened {
          transform: translateX(0%);
          opacity: 1;
        }
        ul {
          display: block;
          width: 100%;
          justify-content: center;
          li {
            margin-right: 0;
            &:first-of-type {
              a {
                border-top: 1px solid rgba(#fff, .1);
              }
            }
            a {
              padding: 1.3rem;
              border-bottom: 1px solid rgba(#fff, .1);
              &.router-link-active,
              &:hover {
                .header__nav-line {
                  display: none;
                }
                border-bottom-color: rgba(#fff, .5);
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    .thank-modal {
      &__inner {
        font-size: 1.55em;
      }
    }

    .request-modal {
      &__parts {
        flex-wrap: wrap;
      }
      &__part {
        width: 100%;
        margin-bottom: 1.3rem;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    .request-modal {
      &__inner {
        padding-left: 2.2rem;
        padding-right: 2.2rem;
      }
    }
  }

</style>


