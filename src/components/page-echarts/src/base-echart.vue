<template>
  <div class="base-echart" ref="baseEchartRef"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import ChinaJSON from '../data/china.json'
//注册, ChinaJSON转为any,不然报类型错误
echarts.registerMap('china', ChinaJSON as any)

interface IProps {
  options: EChartsOption
  // width?: string
  // height?: string
}
const props = defineProps<IProps>()
//1.获取到div元素
const baseEchartRef = ref<HTMLElement>()
//因为数据一定要获取到才可以渲染图表,所以放到onMounted函数中
onMounted(() => {
  //2.基于准备好的dom,初始化echarts实例
  const echartInstance = echarts.init(baseEchartRef.value!)
  //3.绘制图表
  //watchEfect监听option变化,重新执行(不然页面是灰色的, 没有数据)
  watchEffect(() => echartInstance.setOption(props.options))
  echartInstance.setOption(props.options)

  //4.响应式
  const updateSize = () => {
    echartInstance.resize()
  }
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})
</script>

<style scoped lang="less">
// 先在这里写死高度
.base-echart {
  height: 300px;
}
</style>
