import { defineStore } from 'pinia'

// 命名规则: use + id, id指的是defineStore的第一个参数
const useCounter = defineStore('counter', {
  state: () => ({
    counter: 111
  }),
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    }
  },
  actions: {
    changeCounterActions(newCounter: any) {
      this.counter = newCounter
    }
  }
})

// 得到的并不是store,所以需要在使用的组件里面调用一下
// const counterStore = useCounter()
export default useCounter
