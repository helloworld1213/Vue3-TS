<template>
  <div class="dashboard">
    <!-- 头部数字卡片 -->
    <div class="head-card">
      <el-row :gutter="10">
        <template v-for="item in countCardList" :key="item.amount">
          <el-col :span="6">
            <count-card v-bind="item"></count-card>
          </el-col>
        </template>
      </el-row>
    </div>
    <!-- 中间图表部分 -->
    <div class="center-card">
      <el-row :gutter="10">
        <el-col :span="7">
          <chart-card header="分类商品数量(饼图)">
            <pie-echart :pie-data="showGoodsCategoryCountList"></pie-echart>
          </chart-card>
        </el-col>
        <el-col :span="10">
          <chart-card header="不同城市商品销量">
            <map-echart :map-data="showGoodsAddressCountList"></map-echart>
          </chart-card>
        </el-col>
        <el-col :span="7">
          <chart-card header="分类商品数量(玫瑰图)">
            <rose-echart :rose-data="showGoodsCategoryCountList"></rose-echart>
          </chart-card>
        </el-col>
      </el-row>
    </div>
    <!-- 底部图表部分 -->
    <div class="footer-card">
      <el-row :gutter="10">
        <el-col :span="12">
          <chart-card header="分类商品的销量">
            <line-echart v-bind="showGoodsCategorySaleList"></line-echart>
          </chart-card>
        </el-col>
        <el-col :span="12">
          <chart-card header="分类商品的收藏">
            <bar-echart v-bind="showGoodsCategoryFavorList"></bar-echart>
          </chart-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import CountCard from './c-cpns/count-card/count-card.vue'
import useAnalysisStore from '@/store/main/analysis'
import chartCard from './c-cpns/chart-card/chart-card.vue'
import {
  PieEchart,
  LineEchart,
  RoseEchart,
  MapEchart
} from '@/components/page-echarts'
import { computed } from 'vue'

//1.头部数据获取
const analysisStore = useAnalysisStore()
analysisStore.getCountCardListAction()
//1.1从store获取数据
const {
  countCardList,
  goodsCategoryCountList,
  goodsCategorySaleList,
  goodsCategoryFavorList,
  goodsAddressCountList
} = storeToRefs(analysisStore)

//2.获取echarts数据(1.1已经获取)
//数据不符合要求对数据做映射处理
const showGoodsCategoryCountList = computed(() => {
  return goodsCategoryCountList.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})
const showGoodsCategorySaleList = computed(() => {
  const labels = goodsCategorySaleList.value.map((item) => item.name)
  const values = goodsCategorySaleList.value.map((item) => item.goodsCount)
  return { labels, values }
})
const showGoodsCategoryFavorList = computed(() => {
  const labels = goodsCategoryFavorList.value.map((item) => item.name)
  const values = goodsCategoryFavorList.value.map((item) => item.goodsFavor)
  return { labels, values }
})

const showGoodsAddressCountList = computed(() => {
  return goodsAddressCountList.value.map((item) => ({
    name: item.address,
    value: item.count
  }))
})
</script>

<style scoped lang="less">
.center-card {
  margin-top: 15px;
}
.footer-card {
  margin-top: 15px;
}
</style>
