<template>
  <div class="mg"><span class="lt">孤</span><span class="rt">独</span></div>
</template>
<style scope>
  .mg{
    overflow: hidden;
    width: 100px;
    margin: 0 auto;
  }
  .lt{
    animation: lts .6s linear 1;
    float: left;
    margin-left: 33px;
  }
  .rt{
    animation: rts .6s linear 1;
    float: right;  
    margin-right: 33px;
  }
  @keyframes lts{
    0%{
      margin-left: -130px;
      opacity: 0;
       transform:scale(1);
    }
    50%{
      margin-left: -100px;
      opacity: .4;
      transform:scale(4);
    }
    100%{
      margin-left: 33px;
      transform:scale(1);
      opacity: 1;
    }
  }
  @keyframes rts{
    0%{
      margin-right: -130px;
      opacity: 0;
      transform:scale(1);
    }
    50%{
      margin-right: -100px;
      opacity: .4;
      transform:scale(4);
    }
    100%{
      margin-right: 33px;
      opacity: 1;
      transform:scale(1);
    }
  }
</style>
