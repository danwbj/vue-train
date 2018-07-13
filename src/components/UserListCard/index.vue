<template>
  <div class='user-list-card'>
    <div class='card-content'>
        <div class='card-left'>
            <img :src="userinfo.img">
        </div>
        <div class='card-right'>
          <div class='up-text'>{{ userinfo.title }}</div>
          <div class='down-text'>{{ userinfo.desc }}</div>
        </div>
    </div>
  </div>
</template>

<script>
import { Panel, Group, Radio } from 'vux'

export default {
  name: 'UserListCard',
  props: ['title', 'userinfo'],
  data () {
    return {
    }
  },
  components: {
    Panel,
    Group,
    Radio
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.user-list-card {
    width:100%;
    height:100px;
    background:#fff;
    margin-top:10px;
    border-bottom:2px solid #ddd;
    .card-content{
      display:flex;
      padding:10px;
        .card-left{
          background:#fff;
          // float:left;
          width:80px;
          img{
            width:80px;
            height:80px;
          }
        }
        .card-right{
          flex:1;
          // float:left;
          margin-left:20px;
          .up-text{
            font-size:16px;
            text-align:left;
          }
          .down-text{
            text-align:left;
            padding-top:10px;
            font-size:12px;
            color:#666
          }
        }
    }
}
</style>
