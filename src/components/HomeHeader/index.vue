<template>
  <div class='home-header'>
     <x-header>{{ title }}</x-header>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'

export default {
  name: 'HomeHeader',
  props: ['title'],
  data () {
    return {
      directives: {
        TransferDom
      },
      msg: 'HomeHeader'
    }
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vux-header {
  background:#666
}
</style>
