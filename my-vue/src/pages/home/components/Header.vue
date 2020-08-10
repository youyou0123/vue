<template>
  <div class="header">
    <div class="left">
      <div class="iconfont back-icon">
        &#xe624;
      </div>
    </div>
    <div class="content">
      <span class="iconfont">
        &#xe632;
      </span>
      输入城市景点</div>
    <div class="right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
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
  color: #ffffff
}
.left{
  width:.64 rem
  height: .64 rem
  float: left
  color: #ffffff
  .back-icon{
    text-align: center
    font-size: .4 rem
  }
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
  padding-left: .2 rem
}
.right{
  width: 1.24 rem
  float: right
  text-align: center
  .arrow-icon{
    margin-left: -.04 rem
    font-size: .24 rem
  }
}
</style>
