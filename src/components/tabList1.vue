<template>
  <div class="tip1">
  	你
  </div>
</template>
<style scoped>
	 .tip1{
      animation: slid .6s linear 1;
	 }
	 @keyframes slid{
	 	 0%{
	 	 	 margin-right:-80px;
	 	 	 opacity: 0;
	 	 }
	 	 50%{
	 	 	 opacity: .5;
	 	 }
	 	 100%{
	 	 	 margin-right:0px;
	 	 	 opacity: 1;
	 	 }
	 }
</style>
