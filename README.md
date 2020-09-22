# vue-message
this is vue-confirm components
## 组件使用示例:
### 1. 将项目组件克隆到components目录下:

### 2. 在main.js中注册全局组件:

```
import s_confirm from '@/components/vue-confirm'
Vue.use({
  s_confirm
})
```
>>注意这是没有直接使用Vue.use(s_confirm) 这样会默认执行一次s_confirm.install方法
---
#### 3. script代码就可以在项目的任意位置使用:
```
this.$s_confirm('你好').then(() => {
  console.log('确认')
}).catch(() => {
  console.log('取消')
})
this.$s_confirm.info('你好')
```
