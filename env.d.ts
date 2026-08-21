declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// three 无内置类型（@types/three 未安装），子路径模块按 any 处理，
// 与项目现有 `import * as THREE from 'three'` 的行为保持一致。
declare module 'three/webgpu' {
  const three: any
  export = three
}
declare module 'three/tsl' {
  export const pass: any
  export const Fn: any
  export const attribute: any
  export const positionLocal: any
  export const float: any
  export const mx_noise_float: any
  export const time: any
  export const vec3: any
  export const normalWorld: any
  export const positionWorld: any
  export const mix: any
  export const dot: any
  export const modelWorldMatrix: any
  export const uniform: any
  export const matcapUV: any
  export const texture: any
  export const distance: any
}
declare module 'three/addons/tsl/display/SobelOperatorNode.js' {
  export const sobel: any
}
declare module 'three/addons/tsl/math/Bayer.js' {
  export const bayerDither: any
}

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}