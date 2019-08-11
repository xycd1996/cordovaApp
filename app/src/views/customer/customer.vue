<template>
  <div class="customer">
    <NavBar
      fixed
      title="新增客户"
      left-text="返回"
      @click-left="$router.push('/')"
      @click-right="onClickRight"
      left-arrow
    >
      <Button type="primary" size="small" slot="right">提交</Button>
    </NavBar>
    <div class="content">
      <CellGroup>
        <Field
          label="单位名称"
          required
          input-align="right"
          size="large"
          placeholder="请输入单位名称"
          clearable
          v-model="values.company.value"
          :error="values.company.error"
        />
        <BPicker
          label="警种"
          :columns="policeColumns"
          placeholder="请选择警种"
          :error="values.police.error"
          @confirm="getPolice"
        />
        <BPicker
          label="客户来源"
          :columns="customerSourceColumns"
          placeholder="请选择客户来源"
          :error="values.customerSource.error"
          @confirm="getCustomerSource"
        />
        <BPicker
          label="职务"
          :columns="jobColumns"
          placeholder="请选择职务"
          :error="values.job.error"
          @confirm="getJob"
        />
        <BPicker
          label="跟进人"
          :columns="followUserColumns"
          placeholder="请选择跟进人"
          :error="values.followUser.error"
          @confirm="getFollowUser"
        />
        <BPicker
          label="业务域"
          :columns="businessColumns"
          placeholder="请选择业务域"
          :error="values.business.error"
          @confirm="getBusiness"
        />
      </CellGroup>
    </div>
  </div>
</template>

<script>
import { NavBar, Field, CellGroup, Button, Toast } from 'vant'
import BPicker from '@components/picker/picker'
import validForm from '@assets/js/form-valid'

export default {
  data() {
    return {
      values: {
        company: {},
        police: {},
        customerSource: {},
        job: {},
        followUser: {},
        business: {}
      },
      policeColumns: [{ text: '经侦大队', value: '1' }],
      customerSourceColumns: [{ text: '来源1', value: '1' }],
      jobColumns: [{ text: '职务y', value: '1' }],
      followUserColumns: [{ text: '跟进1', value: '1' }],
      businessColumns: [{ text: '业务1', value: '1' }]
    }
  },
  components: {
    Field,
    CellGroup,
    Button,
    NavBar,
    BPicker
  },
  methods: {
    onClickRight() {
      const { error, value } = validForm(this.values)
      this.values = value
      if (error) {
        Toast.fail({
          icon: 'close',
          message: '信息未填写完整'
        })
      }
    },
    getPolice(val) {
      this.values.police = val
    },
    getCustomerSource(val) {
      this.values.customerSource = val
    },
    getJob(val) {
      this.values.job = val
    },
    getFollowUser(val) {
      this.values.followUser = val
    },
    getBusiness(val) {
      this.values.business = val
    }
  },
}

</script>
<style lang='scss' scoped>
.customer {
  .content {
    padding: 46px 0 60px 0;
  }
}
</style>