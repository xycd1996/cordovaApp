<template>
  <div class="textarea">
    <Field
      :label="label"
      input-align="right"
      :maxlength="maxlength"
      v-model="value"
      size="large"
      type="textarea"
      :rows="rows"
      :placeholder="placeholder"
      :border="true"
      clearable
      @blur="onBlur"
      :required="required"
    />
    <p class="count">{{nowLength}}/{{maxlength}}字</p>
  </div>
</template>

<script>
import { Field } from 'vant'

export default {
  props: {
    maxlength: {
      type: Number,
      default: 300
    },
    label: {
      type: String,
      default: '标题'
    },
    placeholder: {
      type: String,
      default: '请填写备注'
    },
    rows: {
      type: Number,
      default: 5
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value: '',
      nowLength: 0
    }
  },
  components: {
    Field
  },
  methods: {
    onBlur() {
      this.$emit('confirm', this.value)
    }
  },
  watch: {
    'value': function (val) {
      const count = val.length
      this.nowLength = count
    }
  },
}

</script>
<style lang='scss' scoped>
.textarea {
  position: relative;
  .count {
    position: absolute;
    bottom: 6px;
    right: 10px;
    font-size: 14px;
    color: #333;
  }
}
.textarea::after {
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