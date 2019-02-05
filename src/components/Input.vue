<template>
  <div class="input">
    <div class="input__wrap">
      <input
        v-if="input.view === 'input'"
        :type="input.type"
        :placeholder="input.placeholder"
        v-model="input.val"
      />
      <v-select
        v-else-if="input.view === 'select'"
        v-model="input.val"
        :options="input.options"
        :searchable="false"
      ></v-select>
      <the-mask
        v-else-if="input.view === 'phone'"
        :mask="input.mask"
        :type="input.type"
        :placeholder="input.placeholder"
        v-model="input.val"
      />
      <textarea
        v-else-if="input.view === 'textarea'"
        :placeholder="input.placeholder"
        v-model="input.val"
      ></textarea>
    </div>
    <span v-show="input.error" class="input__error">{{ input.error }}</span>
  </div>
</template>

<script>
  import vSelect from 'vue-select'
  import {TheMask} from 'vue-the-mask'

  export default {
    props: ['input'],
    components: {
      vSelect,
      TheMask
    }
  }
</script>

<style lang="scss">
  .input {
    width: 100%;
    display: block;
    margin-bottom: 2rem;
    .dropdown-toggle {
      height: 5rem;
    }
    .dropdown-menu {
      border-radius: 0;
      li {
        &.highlight {
          a {
            background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
          }
        }
      }
    }
    .clear {
      display: none;
    }
    .selected-tag {
      border-radius: 0;
      margin: 0;
      font-size: 22px;
      padding: 0 2.1875rem;
      white-space: nowrap;
      width: 100%;
      text-overflow: ellipsis;
      color: rgba(#333, .5);
      height: 100%;
    }
    .dropdown-toggle {
      padding: 0;
      border-radius: 0;
      font-family: 'Montserrat light';
    }
    .vs__actions {
      width: 16.6%;
      padding: 0;
      justify-content: center;
      align-items: center;
      border-left: 1px solid rgba(#333, .25);
    }
    .v-select {
      .open-indicator {
        width: 100%;
        height: 100%;
        &:before {
          width: 0;
          height: 0;
          margin: auto;
          border-style: solid;
          border-width: 10px 8px 0 8px;
          transform: none;
          border-color: rgba(#333, .25) transparent transparent transparent;
        }
      }
    }
    .vs__selected-options {
      padding: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
    input, textarea {
      display: block;
      width: 100%;
      font-size: 22px;
      padding: 0 2.1875rem;
      color: #333333;
      border: 1px solid rgba(#333, .25);
      font-family: 'Montserrat light';
    }
    textarea {
      resize: none;
      height: 12rem;
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
    input {
      height: 5rem;
    }
  }

  ::-webkit-input-placeholder {
    color: rgba(#333, .5);
    font-size: 22px;
    font-family: 'Montserrat light', Arial, sans-serif;
  }
  ::-moz-placeholder {
    color: rgba(#333, .5);
    font-size: 22px;
    font-family: 'Montserrat light', Arial, sans-serif;
  }
  :-ms-input-placeholder {
    color: rgba(#333, .5);
    font-size: 22px;
    font-family: 'Montserrat light', Arial, sans-serif;
  }
  :-moz-placeholder {
    color: rgba(#333, .5);
    font-size: 22px;
    font-family: 'Montserrat light', Arial, sans-serif;
  }

  @media screen and (max-width: 1350px) {
    ::-webkit-input-placeholder {
      font-size: 18px;
    }
    ::-moz-placeholder {
      font-size: 18px;
    }
    :-ms-input-placeholder {
      font-size: 18px;
    }
    :-moz-placeholder {
      font-size: 18px;
    }

    .input {
      input, textarea {
        font-size: 18px;
      }
      input {
        height: 4rem;
      }
      .dropdown-toggle {
        height: 4rem;
      }
      textarea {
        height: 10rem;
      }
      .selected-tag {
        font-size: 18px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    ::-webkit-input-placeholder {
      font-size: 16px;
    }
    ::-moz-placeholder {
      font-size: 16px;
    }
    :-ms-input-placeholder {
      font-size: 16px;
    }
    :-moz-placeholder {
      font-size: 16px;
    }

    .input {
      input, textarea {
        font-size: 16px;
      }
      input {
        height: 3.5rem;
      }
      .dropdown-toggle {
        height: 3.5rem;
      }
      textarea {
        height: 9rem;
      }
      .selected-tag {
        font-size: 16px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    ::-webkit-input-placeholder {
      font-size: 14px;
    }
    ::-moz-placeholder {
      font-size: 14px;
    }
    :-ms-input-placeholder {
      font-size: 14px;
    }
    :-moz-placeholder {
      font-size: 14px;
    }

    .input {
      margin-bottom: 1.3rem;
      .selected-tag {
        font-size: 14px;
      }
      input, textarea {
        font-size: 14px;
      }
      input {
        height: 2.5rem;
      }
      textarea {
        height: 8rem;
      }
      .dropdown-toggle {
        height: 2.5rem;
      }
    }
  }
</style>