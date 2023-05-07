import {
  getCountCardListRequest,
  getGoodsCategoryCountRequest,
  getGoodsAddressCountRequest,
  getGoodsCategorySaleRequest,
  getGoodsCategoryFavorRequest
} from '@/service/main/analysis'
import { defineStore } from 'pinia'

interface IState {
  countCardList: any[]
  goodsCategoryCountList: any[]
  goodsAddressCountList: any[]
  goodsCategorySaleList: any[]
  goodsCategoryFavorList: any[]
}
const useAnalysisStore = defineStore('count', {
  state: (): IState => ({
    countCardList: [],
    goodsCategoryCountList: [],
    goodsAddressCountList: [],
    goodsCategorySaleList: [],
    goodsCategoryFavorList: []
  }),
  actions: {
    async getCountCardListAction() {
      //1.获取商品数据统计数量
      const countCardListResult = await getCountCardListRequest()
      // console.log(countCardListResult)
      this.countCardList = countCardListResult.data

      //2.获取商品分类的个数
      const goodsCategoryCountResult = await getGoodsCategoryCountRequest()
      // console.log(goodsCategoryCountResult)
      this.goodsCategoryCountList = goodsCategoryCountResult.data

      //3.不同城市的销量数据
      const goodsAddressCountResult = await getGoodsAddressCountRequest()
      // console.log(goodsAddressCountResult)
      this.goodsAddressCountList = goodsAddressCountResult.data

      //4.分类销量统计
      const goodsCategorySaleResult = await getGoodsCategorySaleRequest()
      // console.log(goodsCategorySaleResult)
      this.goodsCategorySaleList = goodsCategorySaleResult.data

      //5.每个商品的收藏
      const goodsCategoryFavorResult = await getGoodsCategoryFavorRequest()
      // console.log(goodsCategoryFavorResult)
      this.goodsCategoryFavorList = goodsCategoryFavorResult.data
    }
  }
})

export default useAnalysisStore
