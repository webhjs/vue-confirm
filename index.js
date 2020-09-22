import Vue from 'vue'
import BlogConfirm from './confirm.vue'
const ConfirmBox = Vue.extend(BlogConfirm)
const s_confirm = {
  install: (options, type) => {
    return new Promise((resolve, reject) => {
      const instance = new ConfirmBox({
        data: {
          tootip: options,
          type
        },
        methods: {
          resolve,
          reject
        }
      }).$mount()
      document.body.appendChild(instance.$el)
      Vue.nextTick(() => {
        instance.visible = true
      })
    })
  }
}
Vue.prototype.$s_confirm = s_confirm.install;
['info'].forEach(type => {
  Vue.prototype.$s_confirm[type] = (options) => {
    s_confirm.install(options, type)
  }
})
export default s_confirm
