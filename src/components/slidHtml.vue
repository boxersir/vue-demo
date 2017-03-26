<template>
  <div class="hello">
    <div id="nav">
       <ul  class="slidLt" @click="clickTab">
          <li :class="{'active' :true}"><router-link to="/">首页</router-link></li>
          <li><router-link to="/projpage">项目</router-link></li>
          <li><router-link to="/servpage">服务</router-link></li>
          <li><router-link to="/concatpage">联系我们</router-link></li>
       </ul>
    </div>
  </div>
</template>
<style scope>
  .slidLt{
    padding:0;
    position: fixed;
    left:4%;
    top:30%;
    background:rgba(138, 138, 115, 0.5); 
    border-radius: 10px;
  }
  .slidLt li{
    list-style: none;
    display: block;
    margin:0;
  }
  .slidLt a:-webkit-any-link{
    padding:10px 40px;
    display: block;
    font-size: 20px;
    line-height: 40px;
    cursor: pointer;
    text-decoration: none;
    color:#fff;
  }
  .slidLt>li:active,.slidLt>li:hover,.slidLt>li.active{
     background: #c62121;
     color:#ccc;
  }
  router-link{
    background: none;
  }
  .router-link-active{
    background: none;
  }
</style>
<script>
export default({
  data () {
    return {
      active: true
    }
  },
  methods: {
    clickTab (event) {
      // if (!event.target.getAttribute('class') === 'router-link-active') {
      //   event.target.setAttribute('class', 'router-link-active')
      // }
      // this.active = !(this.active)
    }
  }
})
</script>
