import Vue from 'vue'
import Router from 'vue-router'
import Deck from '@/components/Deck'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Deck',
			component: Deck
		}
	]
})
