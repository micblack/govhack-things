const load = (component) => { 
	return window.httpVueLoader('components/' + component + '.vue')
}

const vm = new window.Vue({

	el: '#app',

	components: {
		'thing': load('thing'),
	},

	data() {
		return {
			salutation: 'Hello',
			things: [
				'raindrops on roses',
				'whiskers on kittens',
				'bright copper kettles', 
				'warm woolen mittens',
				'brown paper packages tied up with strings',
				'cream coloured ponies',
				'crisp apple strudels',
				'doorbells and sleigh bells',
				'schnitzel with noodles',
				'wild geese that fly with the moon on their wings',
				'girls in white dresses with blue satin sashes',
				'snowflakes that stay on my nose and eyelashes',
				'silver white winters that melt into springs'
			]
		}
	},

	methods: {

		salutationByTimeOfDay() {
			let hour = new Date().getHours()
			let response = 'Hello'

			if (hour < 12) {
			  response = 'Good morning'
			} else if (hour < 18) {
			  response = 'Good afternoon'
			} else {
			  response = 'Good evening'
			}

			return response
		}

	},

	created() {

		this.salutation = this.salutationByTimeOfDay()

	}

})