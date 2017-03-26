<template>
  <div class="scale">
    阅读
  </div>
</template>
<style scope>
   .scale{
     animation: scale .6s linear 1;
   }
   @keyframes scale{
      0%{
        transform: scale(0);
        opacity: 0;
      }
      50%{
        transform: scale(2);
        opacity:1;
      }
      100%{
        transform: scale(1);
         opacity:1;
      }

   }
</style>
