<template>
  <div class="follow-record">
    <NavBar
      title="新增跟进记录"
      left-text="返回"
      @click-left="$router.push('/')"
      @click-right="onClickRight"
      left-arrow
      fixed
    >
      <Button type="primary" size="small" slot="right">提交</Button>
    </NavBar>
    <div class="content">
      <CellGroup>
        <Field
          size="large"
          required
          clearable
          v-model="values.customer.value"
          label="客户"
          placeholder="请选择客户"
          input-align="right"
          :error="values.customer.error"
        />
        <Field
          size="large"
          required
          clearable
          v-model="values.business.value"
          label="业务域"
          placeholder="请选择业务域"
          input-align="right"
          :error="values.business.error"
        />
        <BPicker
          @onChange="stageChange"
          label="阶段"
          placeholder="请选择阶段"
          :columns="stageColumns"
          @confirm="getStage"
        />
        <BPicker type="date" label="跟进日期" placeholder="请选择跟进日期" @confirm="getDate" />
        <BPicker label="跟进方式" placeholder="请选择跟进方式" :columns="followColumns" @confirm="getFollow" />
        <BPicker label="联系人" placeholder="请选择联系人" :columns="contactColumns" @confirm="getContact" />
        <BPicker
          label="上午下午是否同一客户"
          placeholder="请选择"
          :columns="samePersonColumns"
          @confirm="getSamePerson"
          label-width="160px"
        />
        <Textarea @confirm="getDetail" label="详情" placeholder="请输入详情" :required="true" />
        <Textarea @confirm="getMarketIntelligence" label="市场情报" placeholder="请输入市场情报" />
        <BPicker
          label-width="120px"
          type="date"
          label="下一步跟进日期"
          placeholder="请选择下一步跟进日期"
          @confirm="getNextDate"
        />
        <BPicker
          @onChange="stageChange"
          label="下一步阶段"
          placeholder="请选择下一步阶段"
          :columns="stageColumns"
          @confirm="getNextStage"
        />
        <Textarea @confirm="getContent" label="内容" placeholder="请输入内容" :required="true" />
      </CellGroup>
    </div>
  </div>
</template>

<script>
import BPicker from '@components/picker/picker'
import Textarea from '@components/textarea/textarea'
import { NavBar, Button, CellGroup, Field } from 'vant'

const stage = [
  {
    text: '立即准备',
    value: '1',
    children: [
      {
        text: '立项准备',
        value: '11'
      }
    ]
  },
  {
    text: '立即开始',
    value: '2',
    children: [
      {
        text: '立项开始',
        value: '22'
      }
    ]
  }
]

export default {
  data() {
    return {
      values: {
        customer: {},
        date: {},
        stage: {},
        business: {},
        follow: {},
        contact: {},
        samePerson: {},
        detail: {},
        marketIntelligence: {
          required: false
        },
        nextDate: {},
        nextStage: {},
        content: {}
      },
      customerColumns: [{ text: '业务1', value: '1' }],
      stageColumns: [{ values: stage, className: 'column1' }, { values: stage[0]['children'], defaultIndex: 2, className: 'column2' }],
      followColumns: [{ text: '跟进方式1', value: '1' }],
      contactColumns: [{ text: '联系人1', value: '1' }],
      samePersonColumns: [{ text: '是', value: '1' }, { text: '否', value: '0' }]
    }
  },
  components: {
    NavBar,
    Button,
    CellGroup,
    Field,
    BPicker,
    Textarea
  },
  methods: {
    onClickRight() {

    },
    getCustomer(val) {
      this.values.customer = val
    },
    getStage(val) {
      console.log(val)
    },
    stageChange({ picker, values }) {
      picker.setColumnValues(1, values[0]['children'])
    },
    getDate(val) {
      this.values.date.value = val
    },
    getFollow(val) {
      this.values.follow = val
    },
    getContact(val) {
      this.values.contact = val
    },
    getSamePerson(val) {
      this.values.samePerson = val
    },
    getDetail(val) {
      this.values.detail.value = val
    },
    getMarketIntelligence(val) {
      this.values.marketIntelligence.value = val
    },
    getNextDate(val) {
      this.values.nextDate.value = val
    },
    getNextStage(val) {
      console.log(val)
      this.values.nextStage.value = val
    },
    getContent(val) {
      this.values.content.value = val
    }
  }
}

</script>
<style lang='scss' scoped>
.follow-record {
  .content {
    padding: 46px 0 60px 0;
  }
}
</style>