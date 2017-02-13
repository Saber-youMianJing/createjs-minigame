<template>
	<div class="kindly">
		<canvas id="view" width="750" height="1183">Not surpport.</canvas>
		<span id="restart">RESTART</span>
	</div>
</template>

<script>
	// config
	import P from '../assets/config/pos.js'
	import L from '../assets/config/list.js'
	
	export default {
		name: 'kindly',
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
	
</script>

<style scoped>
	.kindly {
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: url(../assets/img/kindly/bg.jpg) 50% 50%;
		background-size: 100% 100%;
	}
	#restart {
		display:inline-block;
		width: 160px;
		height: 64px;
		line-height: 64px;
		text-align: center;
		font-size: 24px;
		position: absolute;
		left: 0;
		bottom: 0;
		color: #fff;
		font-family: 'Microsoft Yahei';
		z-index: 2;
	}
</style>