import instanceRequest from '@/service'

//请求商品数据统计的数量
export function getCountCardListRequest() {
  return instanceRequest.get({
    url: '/goods/amount/list'
  })
}

//获取中间和底部图表数据
//1.每个分类商品的个数
export function getGoodsCategoryCountRequest() {
  return instanceRequest.get({
    url: `/goods/category/count`
  })
}
//2.不同城市的销量数据
export function getGoodsAddressCountRequest() {
  return instanceRequest.get({
    url: `/goods/address/sale`
  })
}
//3.分类销量统计
export function getGoodsCategorySaleRequest() {
  return instanceRequest.get({
    url: `/goods/category/sale`
  })
}
//4.每个商品的收藏
export function getGoodsCategoryFavorRequest() {
  return instanceRequest.get({
    url: `/goods/category/favor`
  })
}
