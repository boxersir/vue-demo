<template>
  <div class="index_wrap">
    <div id="nav">
       <nav v-bind:class="active" v-on:click.prevent>
          <a href="" class="home" v-on:click="makeActive('home')">首页</a>
          <a href="" class="proj" v-on:click="makeActive('proj')">案例</a>
          <a href="" class="serv" v-on:click="makeActive('serv')">服务</a>
          <a href="" class="contc" v-on:click="makeActive('contc')">联系我们</a>
       </nav>
       <div v-bind:class=" 'item-' + active" class="bg_log">
       </div>
    </div>
    <div class="word-cont" v-bind:class=" 'animt-' + active">
       <tabList1 v-if='active=="home"'></tabList1>
       <tabList2 v-else-if='active=="proj"'></tabList2>
       <tabList3 v-else-if='active=="serv"'></tabList3>
       <tabList4 v-else='active=="contc"'></tabList4>
    </div>
  </div>
</template>
<script>
import tabList1 from '../components/tabList1.vue'
import tabList2 from '../components/tabList2.vue'
import tabList3 from '../components/tabList3.vue'
import tabList4 from '../components/tabList4.vue'
// import docSection from '../../../node_modules/vue-strap/src/docSection.vue'
// import docTable from '../../../node_modules/vue-strap/src/docTable.vue'
// import docCode from 'vue-strap/src/docCode.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: '微信读书',
      active: 'home'
    }
  },
  components: {
    tabList1,
    tabList2,
    tabList3,
    tabList4
  },
  methods: {
    makeActive (str) {
      this.active = str
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
nav a:focus,nav a:hover{
  text-decoration: none;
  color:#fff;
}
nav.home .home,
nav.proj .proj,
nav.serv .serv,
nav.contc .contc{
  background-color:#ccc;
  border-radius: 10px;
  color:#a682a2;
}
nav{
      margin-top: 30px;
    position: absolute;
    right: 20%;
    color: #fff;
    font-size: 22px;
}
nav>a{
   text-decoration: none;
   font-size: 22px;
   padding:4px 10px;
   color:#d9534f;
}
.bg_log{
  width: 40%;
  height:70%;
  top:35%;
  margin-top:-8%;
  left:50%;
  margin-left:-20%;
  position: absolute;
  border-radius: 20px;
  background-image:url(../assets/background2740d2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  transition: 400ms;
}
.word-cont{
  transition: 400ms;
  opacity: 0;
}
.word-cont h1,.word-cont h2{
  display: none;
}
.item-home{
  background-position:10% 100%; 
   background-size: cover;
}
.item-proj{
  background-position:30% 100%; 
   background-size: cover;
}
.item-serv{
   background-position:60% 100%; 
    background-size: cover;
}
.item-contc{
    background-position:100% 100%; 
     background-size: cover;
}
.animt-home{
   opacity: 1;
}
.animt-proj{
  background-image: url(../assets/download_hand_2x2740d2.png);
  opacity: 1;
}
.animt-serv{
   opacity: 1;
}
.animt-contc{
    opacity: 1;
}


.index_wrap{
  background-image:url(../assets/background2740d2.jpg);
  z-index: -1;
  position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;}
    .word-cont{
          position: absolute;
          top: 30%;
          width: 300px;
          right:18%;
          color:#fff;
    }
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
