<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import baseEchart from './base-echart.vue'
import * as echarts from 'echarts'
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'

interface IProps {
  labels: string[]
  values: string[]
}
const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => {
  return {
    title: {
      text: '支持鼠标滚动缩放'
    },
    tooltip: {
      // trigger: 'axis'
      trigger: 'item'
    },
    grid: {
      bottom: '5%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,
      axisLabel: {
        inside: true,
        color: '#fff',
        // 坐标轴刻度标签的显示间隔,设置为0,表示强制显示所有标签
        interval: 0
      },
      data: props.labels,
      z: 10
    },
    yAxis: {
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        data: props.values,
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        }
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
