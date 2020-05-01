<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import Grid from './static/css/grid.css'
export default {
	name: 'app',
	data () {
		return {
			
		}
	},
	components: {
		Grid
	}
}
</script>

<style>
body{
	margin: 0;
	padding: 0;
}
html{
	box-sizing: border-box;
}
</style>
