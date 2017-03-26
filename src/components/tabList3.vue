<template>
  <div class="tanslate">不再</div>
</template>
<style scope>
  .tanslate{
     animation: slate 0.4s linear 1;
  }
  @keyframes slate{
    0%{
      transform: rotate(0deg) scale(0);
    }
    30%{
      transform: rotate(90deg) scale(1.2);
    }
    60%{
      transform: rotate(180deg) scale(2);
    }
    100%{
      transform: rotate(360deg) scale(1);
    }
  }
</style>
