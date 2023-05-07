<template>
  <div class="count-card">
    <div class="title">
      <span>{{ title }}</span>
      <el-tooltip :content="tips" placement="top" effect="light">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span ref="num1Ref">{{ number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}</span>
      <span ref="num2Ref">{{ number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { CountUp } from 'countup.js'

interface IProps {
  title?: string
  amount?: string
  tips?: string
  number1?: number
  subtitle?: string
  number2?: number
}
// 使用类型声明时的默认props值
/* 针对类型的 defineProps 声明的不足之处在于，它没有可以给 props
提供默认值的方式。为了解决这个问题，我们还提供了 withDefaults 编译器宏 */
const props = withDefaults(defineProps<IProps>(), {
  title: '商品总销量',
  tips: '商品总销量',
  number1: 509989,
  subTitle: '商品总销量',
  number2: 509989
})

//在数据加载完成之后调用这个函数
const num1Ref = ref<HTMLElement>()
const num2Ref = ref<HTMLElement>()
const countConfig = {
  prefix: props.amount === 'saleroom' ? '¥' : ''
}
onMounted(() => {
  //CountUp(target)
  //第一个参数: target,目标函数的id,这里通过ref拿到
  // const countup1 = new CountUp(num1Ref.value!, props.number1, {
  //   prefix: props.amount === 'saleroom' ? '¥' : ''
  // })
  // const countup2 = new CountUp(num2Ref.value!, props.number2, {
  //   prefix: props.amount === 'saleroom' ? '¥' : ''
  // })
  //优化一下
  const countup1 = new CountUp(num1Ref.value!, props.number1, countConfig)
  const countup2 = new CountUp(num2Ref.value!, props.number2, countConfig)
  countup1.start()
  countup2.start()
})
</script>

<style scoped lang="less">
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.title {
  display: flex;
  height: 38px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  justify-content: space-between;
  align-items: flex-end;
}
.content {
  display: flex;
  margin-left: 0;
  font-size: 26px;
  color: rgba(0, 0, 0, 0.85);
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.footer {
  display: flex;
  height: 38px;
  line-height: 38px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 1px;
  border-top: 1px solid #f0f0f0;
}
</style>
