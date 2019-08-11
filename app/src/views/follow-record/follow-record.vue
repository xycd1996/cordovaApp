<template>
  <div class="follow-record">
    <NavBar
      title="新增跟进记录"
      left-text="返回"
      @click-left="$router.push('/')"
      @click-right="onClickRight"
      left-arrow
    >
      <Button type="primary" size="small" slot="right">提交</Button>
    </NavBar>
  </div>
</template>

<script>
import { NavBar, Button } from 'vant'

export default {
  components: {
    NavBar,
    Button
  },
  methods: {
    onClickRight() {

    }
  },
}

</script>
<style lang='scss' scoped>
</style>