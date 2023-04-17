import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

export function formatTime(
  utcString: string,
  format: string = 'YYYY/MM/DD HH:mm:ss'
) {
  const utcTimeResult = dayjs.utc(utcString).utcOffset(8).format(format)
  //为了不修改封装的工具函数,向外暴露一个提供格式的接口
  return utcTimeResult
}
