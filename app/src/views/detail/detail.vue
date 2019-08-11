<template>
  <div class="detail">
    <NavBar left-arrow @click-left="$router.push('/')" left-text="返回" title="查看跟进记录">
      <div class="right" slot="right">
        <Icon size="20" color="#666" name="contact" />
        <span class="user">滴滴滴</span>
      </div>
    </NavBar>
    <div class="content">
      <div class="header">
        <div class="title">吉林省安吉拉贡嘎局</div>
        <div class="time">2019-08-05 23:40:20</div>
      </div>
      <div class="tag">
        <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">数侦-云捕</Tag>
        <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">阶段</Tag>
        <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">当面拜访</Tag>
        <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">市场BD</Tag>
      </div>
      <div class="info">
        <div class="user">联系人：嘟嘟嘟的</div>
        <div class="same-person">上午下午是否同一客户：否</div>
      </div>
      <div class="follow-detail">跟进详情：今天跟进客户买了苹果、牛肉、火锅火锅火锅烤肉烤肉烤肉烤肉……</div>
      <div class="stage-feedback">
        <div class="title">阶段反馈</div>
        <ul>
          <li class="feedback-item">字段1：杜杜杜</li>
          <li class="feedback-item">字段1：杜杜杜</li>
          <li class="feedback-item">字段1：杜杜杜</li>
        </ul>
      </div>
      <div class="next-plan">
        <div class="title">下一步跟进计划</div>
        <ul>
          <li class="plan-item">下一步跟进时间：2019-08-32</li>
          <li class="plan-item">下一步跟进阶段：收钱</li>
          <li class="plan-item">内容：收钱</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar, Icon, Tag } from 'vant'

export default {
  components: {
    NavBar, Icon, Tag
  }
}

</script>
<style lang='scss' scoped>
.detail {
  .right {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
    .user {
      margin-left: 4px;
    }
  }
  .content {
    padding: 0 10px;
    .header {
      display: flex;
      justify-content: space-between;
      margin: 22px 0;
      .title {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .time {
        color: #666;
      }
    }
    .tag {
      display: flex;
      justify-content: space-between;
      .tag-item {
        padding: 0.2em 1em;
        margin-right: 10px;
        border: 1px solid #ff6666;
      }
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin: 22px 0;
      font-size: 16px;
      color: #666;
    }
    .follow-detail {
      line-height: 1.4em;
      font-size: 16px;
      color: #666;
    }
    .stage-feedback {
      margin: 22px 0;
      .title {
        margin-bottom: 16px;
        font-weight: 700;
        color: #333;
      }
      .feedback-item {
        margin-bottom: 16px;
        color: #666;
      }
    }
    .next-plan {
      .title {
        margin-bottom: 16px;
        font-weight: 700;
        color: #333;
      }
      .plan-item {
        margin-bottom: 16px;
        color: #666;
      }
    }
  }
}
</style>