<template>
  <div v-show="show" :style="`height: ${enter ? '150px' : '60px'}`" class="footer">
    <transition name="module-show">
      <div v-show="enter" class="module">
        <ul class="wrapper">
          <li class="item">
            <router-link to="/follow">
              <Button type="primary">新增跟进记录</Button>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/customer">
              <Button type="primary">新增客户</Button>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/project">
              <Button type="primary">新增项目</Button>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/contact">
              <Button type="primary">新增联系人</Button>
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
    <div @click="handleAdd" class="button">
      <div :style="`transform: rotate(${enter ? '45' : '0'}deg)`">
        <Icon name="plus" size="42" color="#66CCCC" />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Button } from 'vant'

export default {
  data() {
    return {
      enter: false,
      show: false
    }
  },
  components: {
    Icon, Button
  },
  mounted() {
    this._scroll()
  },
  methods: {
    handleAdd() {
      if (this.enter) {
        this.enter = false
      } else {
        this.enter = true
      }
    },
    _scroll() {
      window.addEventListener('scroll', () => {
        this.enter = false
      })
    }
  },
  watch: {
    '$route': function (to, from) {
      if (to.name === 'home' || to.name === 'follow') {
        this.show = true
      } else {
        this.show = false
      }
    }
  },
}

</script>
<style lang='scss' scoped>
.footer {
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #ccc;
  box-shadow: 0px -1px 10px #888;
  border-radius: 5px;
  z-index: 99;
  transition: height 0.5s;
  -moz-transition: height 0.5s;
  -webkit-transition: height 0.5s;
  -o-transition: height 0.5s;
  .module-show-enter-active,
  .module-show-leave-active {
    transition: opacity 0.5s;
  }
  .module-show-enter,
  .module-show-leave-to {
    opacity: 0;
  }
  .module {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90px;
    .wrapper {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .button {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
    div {
      transition: all 0.5s;
      -moz-transition: all 0.5s;
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
    }
  }
}
</style>