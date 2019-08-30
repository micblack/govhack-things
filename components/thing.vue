<template>
	<div class="card">
		<img v-bind:src="'https://source.unsplash.com/300x200/?' + keyword | csv" v-bind:alt="keyword">
	  	<div class="card-content">
	  		<h3>{{ keyword }}</h3>
	  		<p><small>{{ keyword | csv }}</small></p>
		</div>
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

		csv: function (sentence) {
			let keywords = sentence.split(' ')
			let conjunctions = ['on','with','and','that','up','in','my','the','their','into','stay']

			keywords = keywords.filter((word) => !conjunctions.includes(word))
			return keywords.join(',')
		}
	}
}
</script>

<style scoped>
.card {
	padding: 1em;
	border-radius: .5em;
	border: 1px solid silver;
	width:300px;
	margin-right:1em;
	margin-bottom:1em;
	display:inline-block;
}
.card img {
	border-radius: .5em;
	width:300px;
	height:200px;
	backgound:#fefefe;
}
.card-content {
	padding: 1em;
}
.card-content h3 {
	text-transform: capitalize;
}
</style>