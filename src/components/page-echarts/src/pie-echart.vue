<template>
  <div class="pie-echart">
    <!--
      :options="options"报类型问题的错误:
        给script里面的options同样的类型 EChartsOption
    -->
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueType } from '../types/type'
import { computed } from 'vue'

interface IProps {
  pieData: IEchartValueType[]
}
const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => {
  return {
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        bottom: '-10%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
