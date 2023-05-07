<template>
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import baseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueType } from '../types/type'
import { computed } from 'vue'

interface IProps {
  roseData: IEchartValueType[]
}
const props = defineProps<IProps>()

const options = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '数据来源',
        type: 'pie',
        radius: [10, 160],
        center: ['50%', '50%'],
        bottom: '-15%',
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        label: {
          show: false
        }
      }
    ]
  }
})
</script>

<style scoped lang="less"></style>
