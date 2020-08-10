<template>
  <div class="header">
    <div class="left">
      <van-icon name="arrow-left" />
    </div>
    <div class="content">输入城市景点</div>
    <div class="right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'

}

</script>

 <!-- 设置属性，可以使用已安装的样式预处理器，设置scoped 可以限制只针对当前组件生效 -->
 <!-- 移动端像素设置为： 1rem=html font-size:50px rem计算方法为：实际像素/100=所需rem -->

<style lang="stylus" scoped>

.header{
  display: flex
  height: .86 rem
  line-height: .86 rem
  background-color: #00bcd4
}
.left{
  width:.64 rem
  float: left
}
.content{
  flex: 1
  height: .64 rem
  margin-top: .12 rem
  margin-left: .1 rem
  border-radius: .1 rem
  line-height: .64 rem
  background-color: #fff
  color: #ccc
}
.right{
  width: 1.24 rem
  float: right
  text-align: center
}
</style>
