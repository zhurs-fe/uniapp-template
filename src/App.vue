<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  const updateManager = uni.getUpdateManager()

  updateManager.onUpdateReady(function (res) {
    uni.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success(res) {
        if (res.confirm) {
          updateManager.applyUpdate()
        }
      },
    })
  })
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style lang="scss">
@import '@/static/iconfont/iconfont.scss';
@import 'vk-uview-ui/index.scss';
</style>
