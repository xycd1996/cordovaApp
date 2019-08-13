<template>
  <div class="project">
    <NavBar
      fixed
      title="新增项目"
      left-text="返回"
      @click-left="$router.push('/')"
      @click-right="onClickRight"
      left-arrow
    >
      <Button type="primary" size="small" slot="right">提交</Button>
    </NavBar>
    <div class="content">
      <CellGroup>
        <div class="pro-name">
          <Field
            input-align="right"
            label="项目名称"
            size="large"
            required
            clearable
            placeholder="请输入项目名称"
            v-model="values.proName.value"
            :error="values.proName.error"
          />
        </div>
        <BPicker
          @confirm="getBusiness"
          :error="values.business.error"
          :columns="businessColumns"
          label="业务域"
          placeholder="请选择警种"
        />
        <BPicker
          @confirm="getProFlow"
          :error="values.proFlow.error"
          :columns="proFlowColumns"
          label="项目流程方案"
          placeholder="请选择项目流程方案"
        />
        <BPicker
          @confirm="getStage"
          :error="values.stage.error"
          :columns="stageColumns"
          label="阶段"
          placeholder="请选择项目阶段"
        />
        <BPicker
          @confirm="getProcurementMode"
          :error="values.procurementMode.error"
          :columns="procurementModeColumns"
          label="采购模式"
          placeholder="请选择采购模式"
        />
        <BPicker
          @confirm="getRelatedCustomer"
          :error="values.relatedCustomer.error"
          :columns="relatedCustomerColumns"
          label="相关客户"
          placeholder="请选择客户"
        />
        <div class="pro-amount">
          <Field
            readonly
            clickable
            label="项目金额（万元）"
            placeholder="请输入项目金额"
            size="large"
            required
            input-align="right"
            label-width="130px"
            @click="proAmountShow = true"
            v-model="values.proAmount.value"
            :error="values.proAmount.error"
          />
          <NumberKeyboard
            theme="custom"
            title="项目金额（万元）"
            close-button-text="确定"
            extra-key="."
            :show="proAmountShow"
            @blur="proAmountShow = false"
            v-model="values.proAmount.value"
            show-toolbar
          />
        </div>
        <div class="achievement-amount">
          <Field
            readonly
            clickable
            label="业绩数量"
            placeholder="请输入业绩数量"
            size="large"
            required
            input-align="right"
            label-width="130px"
            @click="achievementAmountShow = true"
            v-model="values.achievementAmount.value"
            :error="values.achievementAmount.error"
          />
          <NumberKeyboard
            theme="custom"
            title="业绩数量"
            close-button-text="确定"
            extra-key="."
            :show="achievementAmountShow"
            @blur="achievementAmountShow = false"
            v-model="values.achievementAmount.value"
            show-toolbar
          />
        </div>
        <BPicker
          @confirm="getBiddingMethod"
          :error="values.biddingMethod.error"
          :columns="biddingMethodColumns"
          label="招投标方式"
          placeholder="请选择招投标方式"
        />
        <BPicker
          @confirm="getSalesMethod"
          :error="values.salesMethod.error"
          :columns="salesMethodColumns"
          label="销售方式"
          placeholder="请选择销售方式"
        />
        <BPicker
          @confirm="getBd"
          :error="values.bd.error"
          :columns="bdColumns"
          label="负责BD"
          placeholder="请选择"
        />
        <BPicker
          @confirm="getContract"
          :error="values.contract.error"
          :columns="contractColumns"
          label="合同类型"
          placeholder="请选择合同类型"
        />
        <BPicker
          type="date"
          @confirm="getTime"
          :error="values.time.error"
          label="预计签单时间"
          placeholder="请选择预计签单时间"
        />
      </CellGroup>
    </div>
  </div>
</template>

<script>
import { NavBar, Button, CellGroup, Field, NumberKeyboard, Toast } from 'vant'
import validForm from '@assets/js/form-valid'
import BPicker from '@components/picker/picker'

export default {
  data() {
    return {
      proAmountShow: false,
      achievementAmountShow: false,
      values: {
        bd: {},
        contract: {},
        time: {},
        proName: {},
        business: {},
        proFlow: {},
        stage: {},
        procurementMode: {},
        relatedCustomer: {},
        proAmount: {
          value: '0'
        },
        achievementAmount: {
          value: '0'
        },
        biddingMethod: {},
        salesMethod: {}
      },
      bdColumns: [{ text: '杭州', value: '222' }],
      contractColumns: [{ text: '合同a', value: '12323' }],
      businessColumns: [{ text: '经侦大队', value: '1' }, { text: '交警大队', value: '2' }],
      proFlowColumns: [{ text: '数侦流程方案', value: '1' }],
      stageColumns: [{ text: '立即准备/立项上报', value: '1' }],
      procurementModeColumns: [{ text: '不知道', value: '1' }],
      relatedCustomerColumns: [{ text: '我是客户', value: '1' }],
      biddingMethodColumns: [{ text: '给钱给钱', value: '1' }],
      salesMethodColumns: [{ text: '砸锅卖铁', value: '1' }]
    }
  },
  components: {
    NavBar, Button, CellGroup, Field, NumberKeyboard, BPicker
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
    getBd(val) {
      this.values.bd = val
    },
    getContract(val) {
      this.values.contract = val
    },
    getTime(val) {
      this.values.time.value = val
    },
    getBusiness(val) {
      this.values.business = val
    },
    getProFlow(val) {
      this.values.proFlow = val
    },
    getStage(val) {
      this.values.stage = val
    },
    getProcurementMode(val) {
      this.values.procurementMode = val
    },
    getRelatedCustomer(val) {
      this.values.relatedCustomer = val
    },
    getBiddingMethod(val) {
      this.values.biddingMethod = val
    },
    getSalesMethod(val) {
      this.values.salesMethod = val
    }
  }
}

</script>
<style lang='scss' scoped>
.project {
  .content {
    padding: 46px 0 60px 0;
  }
}
</style>