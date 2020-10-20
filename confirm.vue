<template>
  <transition-group name="slide">
    <div v-if="type !== 'info' && visible" :key="1" class="modal" />
    <div v-if="visible" :key="2" class="confirm-container">
      <div class="content">
        <span class="cont_wrap">
          <div class="tootip">
            <span>{{ tootip }}</span>
          </div>
          <div v-if="type !== 'info'" class="operate">
            <span class="cancel" @click="cancel">取消</span>
            <span class="sure" @click="sure">确认</span>
          </div>
        </span>
      </div>
    </div>
  </transition-group>
</template>
<script>
export default {
  data() {
    return {
      tootip: '请确认相关信息~',
      visible: false
    }
  },
  mounted() {
    if (this.type === 'info') {
      setTimeout(() => {
        this.visible = false
      }, 2000)
    }
  },
  methods: {
    cancel() {
      this.visible = false
      this.reject()
    },
    sure() {
      this.visible = false
      this.resolve()
    }
  }
}
</script>
<style lang="scss" scoped>
    .modal{
      position: fixed;
      top:0;
      bottom: 0;
      left:0;
      right:0;
      background: rgba(0,0,0,.5);
    }
    .confirm-container {
        height: 512px;
        width: 616px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url('./images/confirm@2x.png');
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding-bottom: 7px;
        .content{
            width: 602px;
            height: 344px;
            $width: 416px;
            display: flex;
            justify-content: center;
            align-items: center;
            .cont_wrap{
                .tootip{
                    text-align: center;
                    width: $width;
                    font-size: 25px;
                    font-weight: 400;
                    color: #36363A;
                    line-height: 37px;
                    white-space: pre-wrap;
                }
                .operate{
                    margin-top: 70px;
                    width: $width;
                    text-align: center;
                    display: flex;
                    justify-content: space-between;
                    .cancel,.sure{
                        display: inline-block;
                        font-size: 25px;
                        font-weight: bold;
                        border-radius: 36px;
                        line-height: 72px;
                        width: 184px;
                        height: 72px;
                        letter-spacing: 5px;
                        cursor: pointer;
                    }
                    .cancel{
                        background: #C2EFC6;
                        color: #1C7523;
                    }
                    .sure{
                        background: linear-gradient(90deg, #21CC5A 0%, #00C15D 100%);
                        color: #FFFFFF;
                    }
                }
            }
        }
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
        transition: all 0.2s ease;
    }
    .slide-enter,
    .slide-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }
</style>
