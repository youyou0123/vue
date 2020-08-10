<template>
<div class="icons">
    <div class="icon">
        <div class="icon-imgs">
            <img class='img-content' src='//s.qunarzz.com/homenode/images/touchheader/hotel.png'/>
            <p>酒店</p>
        </div>
        
    </div>

</div>
</template>

<script>

export default {
  name: 'HomeIcon'

}
</script>

<style>
.icons{
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 50%; /* 设置宽高比为2，宽度100%高度撑开50% */
    background: green;
}
.icon{
    position: relative;
    width: 25%;
    height:0;
    float: left;
    padding-bottom: 25%;
    background: pink
}
.icon-imgs{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: .44 rem;
    box-sizing: border-box;
}
.img-content{
    display: block;
    height: 100%;
    margin: 0 auto;
    text-align: center;
}    

</style>
