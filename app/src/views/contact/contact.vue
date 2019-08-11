<template>
  <div class="contact">
    <NavBar
      fixed
      title="新增联系人"
      left-text="返回"
      @click-left="$router.push('/')"
      @click-right="onClickRight"
      left-arrow
    >
      <Button type="primary" size="small" slot="right">提交</Button>
    </NavBar>
    <div class="content">
      <BPicker
        label="客户"
        placeholder="请选择客户"
        :error="values.customer.error"
        :columns="customerColumns"
        @confirm="getCustomer"
      />
      <Field
        label="姓名"
        v-model="values.name.value"
        :error="values.name.error"
        required
        placeholder="请输入姓名"
        size="large"
        input-align="right"
        clearable
      />
      <BPicker
        label="职位"
        placeholder="请选择职位"
        :error="values.position.error"
        :columns="positionColumns"
        @confirm="getPosition"
      />
      <div class="mobile">
        <Field
          label="联系电话"
          v-model="values.mobile.value"
          @click="mobileKeyboard = true"
          :error="values.mobile.error"
          :error-message="values.mobile.errorMsg"
          error-message-align="right"
          required
          readonly
          placeholder="请输入联系电话"
          size="large"
          input-align="right"
          clearable
        />
        <NumberKeyboard
          theme="custom"
          title="联系电话"
          close-button-text="确定"
          :show="mobileKeyboard"
          @blur="mobileKeyboard = false"
          @close="mobileKeyConfirm"
          v-model="values.mobile.value"
          show-toolbar
        />
      </div>
      <BPicker
        @confirm="getType"
        label="类型"
        placeholder="请选择类型"
        :error="values.type.error"
        :columns="typeColumns"
      />
      <BPicker
        label="部门"
        placeholder="请选择部门"
        :error="values.department.error"
        :columns="departmentColumns"
        @confirm="getDepartment"
      />
      <Field
        label="警官证号"
        v-model="values.policeNum.value"
        placeholder="请输入警官证号"
        size="large"
        input-align="right"
        clearable
        type="number"
      />
      <BPicker
        label="性别"
        placeholder="请选择性别"
        :error="values.sex.error"
        :required="values.sex.required"
        :columns="sexColumns"
        @confirm="getSex"
      />
      <Textarea @confirm="getRemark" label="备注" :rows="5" />
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, NumberKeyboard, NavBar, Button } from 'vant'
import BPicker from '@components/picker/picker'
import mobileValid from '@assets/js/mobile-valid'
import validForm from '@assets/js/form-valid'
import Textarea from '@components/textarea/textarea'

export default {
  data() {
    return {
      mobileKeyboard: false,
      values: {
        customer: {},
        name: {},
        position: {},
        mobile: {},
        type: {},
        department: {},
        policeNum: {
          required: false
        },
        sex: {
          required: false
        },
        remark: {
          required: false
        }
      },
      customerColumns: [{ text: '客户1', value: '1' }],
      positionColumns: [{ text: '职位', value: '1' }],
      typeColumns: [{ text: '类型1', value: '1' }],
      departmentColumns: [{ text: '部门1', value: '1' }],
      sexColumns: [{ text: '男', value: '1' }, { text: '女', value: '2' }]
    }
  },
  components: {
    CellGroup, Field, NumberKeyboard, BPicker, NavBar, Button, Textarea
  },
  methods: {
    _submitData(values) {
      let data = new Object()
      Object.keys(values).forEach(key => {
        data[key] = values[key]['value']
      })
      return data
    },
    onClickRight() {
      const { value, error } = validForm(this.values)
      this.values = value
      if (!error) {
        console.log(this.values)
        console.log(this._submitData(this.values))
      }
    },
    mobileKeyConfirm() {
      this.values.mobile.error = false
      this.values.mobile.errorMsg = ''
      const result = mobileValid(this.values.mobile.value)
      if (!result) {
        this.values.mobile.error = true
        this.values.mobile.errorMsg = '手机号格式错误'
      }
    },
    getCustomer(val) {
      this.values.customer = val
    },
    getPosition(val) {
      this.values.position = val
    },
    getType(val) {
      this.values.type = val
    },
    getDepartment(val) {
      this.values.department = val
    },
    getSex(val) {
      this.values.sext = val
    },
    getRemark(val) {
      this.values.remark.text = val
    }
  }
}

</script>
<style lang='scss' scoped>
.contact {
  .content {
    padding: 46px 0 60px 0;
  }
}
</style>