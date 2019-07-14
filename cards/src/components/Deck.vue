<template>
	<div>
		<button @click="shuffle">
			<span v-if="reshuffle == false">Shuffle Deck</span>
			<span v-else>Re-Shuffle Deck</span>
		</button>
	  	<div class="grid">
	  		<div class="deck">
	  			<h2>Unused Pile - {{unusedPile.length}}</h2>
	  			<button v-if="currentHand.length <= 0" @click="drawCard">Draw Card</button>
		  		<div class="stack">
		  			<div class="stack-contain">
		  				<card 
				  		v-for="(card, index) in unusedPile" 
				  		v-bind:style="{bottom: (-179) + 'px', zIndex: (unusedPile.length - index) }"
				  		:key="index" 
				  		:suit="card.suit" 
				  		:value="card.value"
				  		:color="colors" />
		  			</div>
		  		</div>
		  		<button>View Unused Pile</button>
			</div>
			<div class="deck">
				<h2>Currently Drawn Card</h2>
				<button v-if="currentHand.length > 0" @click="addToUnused">Add To Unused Pile</button>
				<button v-if="currentHand.length > 0" @click="addToUsed">Add To Used Pile</button>
				<card 
					v-for="(card, index) in currentHand"
					v-bind:style="{marginBottom: (-179) + 'px' }"
					:key="index" 
			  		:suit="card.suit" 
			  		:value="card.value"
			  		:color="colors" />
			</div>
			<div class="deck">
				<h2>Used Pile - {{usedPile.length}}</h2>
				<div class="stack">
					<card 
						v-for="(card, index) in usedPile"
						v-bind:style="{marginBottom: (-179) + 'px', zIndex: (usedPile.length - index) }"
						:key="index" 
				  		:suit="card.suit" 
				  		:value="card.value"
				  		:color="colors" />
			  	</div>
				<button v-if="usedPile.length > 0">View Used Pile</button>
			</div>
	  	</div>
	</div>
</template>


<script>
import card from './Card'

export default {
	name: 'Deck',
	data () {
		return {
			suits: ["hearts", "diamonds", "clubs", "spades"],
			values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",],
			colors: ["red", "black"], 
			unusedPile: [],
			usedPile: [],
			currentHand: [],
			reshuffle: false
		}
	},
	computed: {

	}, 
	methods: {
		shuffle() {
			this.usedPile.forEach((uP) => {
				this.unusedPile.push(uP)
			})
			this.currentHand.forEach((cH) => {
				this.unusedPile.push(cH)
			})
			this.unusedPile = this.unusedPile.sort(() => Math.random() - 0.5)
			this.usedPile = []
			this.currentHand = []
			this.reshuffle = true
		},
		drawCard() {
			if (this.unusedPile.length > 0) {
				this.currentHand.push(this.unusedPile.shift())
			}
		},
		addToUnused() {
			this.unusedPile.unshift(this.currentHand.shift())
		},
		addToUsed() {
			this.usedPile.unshift(this.currentHand.shift())
		},
		createCards() {
			this.suits.forEach((s) => {
				this.values.forEach((v) => {
					this.unusedPile.push({
						'suit': s,
						'value': v
					})
				})
			})
		}
	},
	mounted() {
		this.createCards()
	},
	components: {
		card
	}
}
</script>


<style scoped>
	.grid {
		display:grid; 
		grid-template-columns:repeat(3, [row] 1fr);
	}
	.stack {
		position:relative;
		width:100%;
		min-height:300px;
		margin:auto;
		overflow:hidden;
	}
	.stack-contain {
		position:relative;
		top:-175px;
	}
</style>
