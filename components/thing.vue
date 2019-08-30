<template>
	<div>
		<p>{{ keyword }}</p>
	</div>
</template>

<script>
module.exports = {
	
	props: {
		keyword: {
			default: 'random',
		}
	},

	data: function () {
		return {}
	},

	filters: {
		
	}
}
</script>

<style>
</style>