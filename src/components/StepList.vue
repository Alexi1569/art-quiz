<template>
  <div class="step-list">
    <p>{{list.title}}</p>
    <ul>
      <li v-for="(item, i) in list.items" :key="i" @click.prevent="$emit('itemClick', $event, item)">
        <a href="#">{{item.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .step-list {
    font-size: 1.875em;
    margin-bottom: 3.25rem;
    &:last-of-type {
      margin-bottom: 0;
    }
    p {
      font-family: 'Acrom';
      background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-transform: uppercase;
      padding-left: 2.25rem;
    }
    ul {
      margin-top: 1.5rem;
      font-size: 0.73em;
      li {
        padding-left: 2.25rem;
        position: relative;
        margin-bottom: .5rem;
        transition: .3s all ease;
        &.bolder {
          font-family: 'Acrom';
          text-transform: uppercase;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          width: 10px;
          height: 10px;
          background: linear-gradient(270deg, #004f9f 0%, #7db9e8 100%);
          border-radius: 50%;
        }
      }
    }
  }

  @media screen and (max-width: 1600px) , screen and (max-height: 880px) {
    .step-list {
      font-size: 1.4em;
      ul {
        li {
          &:before {
            top: 5px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1300px) , screen and (max-height: 720px) {
    .step-list {
      font-size: 1.2em;
    }
  }

  @media screen and (max-width: 1250px) {
    .step-list {
      p {
        padding-left: 1.8rem;
      }
      ul {
        li {
          padding-left: 1.8rem;
          &:before {
            top: 3px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .step-list {
      font-size: 1.1em;
    }
  }
</style>