<template>
  <div class="picker">
    <Field
      readonly
      :label="label"
      size="large"
      :placeholder="placeholder"
      :required="required"
      input-align="right"
      is-link
      @click="show = true"
      v-model="value"
      :error="error"
      :label-width="labelWidth"
    />
    <Popup position="bottom" v-model="show">
      <Picker
        v-if="type === 'picker'"
        :columns="columns"
        @confirm="confirm"
        @cancel="show = false"
        show-toolbar
      ></Picker>
      <DatetimePicker
        v-if="type === 'date'"
        :min-date="new Date()"
        show-toolbar
        @confirm="confirm"
        @cancel="show = false"
        type="date"
      />
    </Popup>
  </div>
</template>

<script>
import { Popup, Picker, DatetimePicker, Field } from 'vant'
import moment from 'moment'

export default {
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'picker'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    required: {
      type: Boolean,
      default: true
    },
    error: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  data() {
    return {
      show: false,
      value: ''
    }
  },
  components: {
    Popup, Picker, DatetimePicker, Field
  },
  methods: {
    confirm(val) {
      const toString = Object.prototype.toString
      if (toString.call(val) === '[object Date]') {
        const formatDate = moment(val).format('YYYY-MM-DD')
        this.value = formatDate
        this.show = false
        this.$emit('confirm', formatDate)
        return
      }
      this.value = val.text
      this.show = false
      this.$emit('confirm', val)
    }
  }
}

</script>
<style lang='scss' scoped>
.picker {
  position: relative;
}
.picker::after {
  position: absolute;
  box-sizing: border-box;
  content: " ";
  pointer-events: none;
  right: 0;
  bottom: 0;
  left: 16px;
  border-bottom: 1px solid #ebedf0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>