/// <reference types="vite/client" />

//声明mjs
declare module '*.mjs'

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const Component: DefineComponent<{}, {}, any>
  export default Component
}

declare module 'Editor'
