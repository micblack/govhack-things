const load = (component) => { 
	return window.httpVueLoader('components/' + component + '.vue')
}

const vm = new window.Vue({

	el: '#app',

	components: {
		'my-component': load('my-component'),
	},

	data() {
		return {

		}
	},

	methods: {

	},

	created() {

	}

})