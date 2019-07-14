<template>
	<div>
		<header>
			<img id="logo" src="../assets/logo.png">
			<h1>Coding Challenge</h1>
			<button @click="showActions">{{actionButtonText}}</button>
		</header>

		<button @click="shuffle">
			<span v-if="reshuffle == false">Shuffle Deck</span>
			<span v-else>Re-Shuffle Deck</span>
		</button>
		<p v-if="shuffleCount > 0">Shuffled: <strong>{{shuffleCount}}</strong> many times</p>

	  	<div class="grid">

	  		<div class="deck">
	  			<h2>Unused Pile - {{unusedPile.length}}</h2>
	  			<button @click="shuffleUnused">Shuffle Unused Pile</button>
		  		<div class="stack">
		  			<div class="stack-contain">
		  				<card 
				  		v-for="(card, index) in unusedPile" 
				  		v-bind:style="{
				  			bottom: (-179) + 'px', 
				  			zIndex: (unusedPile.length - index) }"
				  		:key="index" 
				  		:suit="card.suit" 
				  		:value="card.value"
				  		:color="colors" />
		  			</div>
		  		</div>
		  		<button v-if="currentHand.length <= 0" @click="drawCard">Draw Card</button>
			</div>

			<div class="deck">
				<h2>Currently Drawn Card</h2>
				<div v-if="currentHand.length > 0">
					<h3>{{namedSuit}} of {{currentHand[0].suit}}</h3>
				</div>
				
				<div class="single-card" v-for="(card, index) in currentHand">
					<card 
						v-bind:style="{marginBottom: (-179) + 'px' }"
						:key="index" 
				  		:suit="card.suit" 
				  		:value="card.value"
				  		:color="colors" />
				</div>
				<div v-if="currentHand.length > 0">
					<h4 >Add to:</h4>
				  	<button @click="addToUnused">
				  		Unused Pile
				  	</button>
					<button @click="addToUsed">
						Used Pile 
					</button>
				</div>
				<button v-if="currentHand.length == 0" @click="drawCard">Draw New Card</button>
			</div>

			<div class="deck">
				<h2>Used Pile - {{usedPile.length}}</h2>
				<div class="stack">
					<card 
						v-for="(card, index) in usedPile"
						v-bind:style="{
							marginBottom: (-179) + 'px', 
							zIndex: (usedPile.length - index) }"
						:key="index" 
				  		:suit="card.suit" 
				  		:value="card.value"
				  		:color="colors" />
			  	</div>
			</div>

	  	</div>


	  	<aside v-if="displayActions == true">
			<h2>Actions</h2>
			<ol>
				<li v-for="action in actionHistory">{{action.action}}</li>
			</ol>
	  	</aside>

	</div>
</template>


<script>
import card from './Card'

export default {
	name: 'Deck',
	data () {
		return {
			suits: ["Hearts", "Diamonds", "Clubs", "Spades"],
			values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A",],
			colors: ["red", "black"], 
			unusedPile: [],
			usedPile: [],
			currentHand: [],
			reshuffle: false,
			shuffleCount: 0,
			actionHistory: [],
			displayActions: false,
			actionButtonText: 'Show Actions'
		}
	},
	computed: {
		namedSuit() {
			if (this.currentHand.length > 0) {
				switch(this.currentHand[0].value) {
					case 'J': 
						return 'Jack'
						break;
					case 'Q': 
						return 'Queen'
						break;
					case 'K': 
						return 'King'
						break;
					case 'A': 
						return 'Ace'
						break;
					default:
						return this.currentHand[0].value
				}
			}
		}
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
			this.addToActionHistory('All cards shuffled')
			this.increaseShuffleCount()
		},
		shuffleUnused() {
			this.unusedPile = this.unusedPile.sort(() => Math.random() - 0.5)
			this.reshuffle = true
			this.addToActionHistory('Unused Deck shuffled')
			this.increaseShuffleCount()
		},
		drawCard() {
			if (this.unusedPile.length > 0) {
				this.addToActionHistory(this.unusedPile[0].value+' of '+this.unusedPile[0].suit+' drawn')
				this.currentHand.push(this.unusedPile.shift())
			}
		},
		addToUnused() {
			this.unusedPile.unshift(this.currentHand.shift())
			this.addToActionHistory(this.unusedPile[0].value+' of '+this.unusedPile[0].suit+' added back to the Unused Pile')
		},
		addToUsed() {
			this.addToActionHistory(this.currentHand[0].value+' of '+this.currentHand[0].suit+' added to the Used Pile')
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
		},
		increaseShuffleCount() {
			this.shuffleCount++
		},
		addToActionHistory(action) {
			let date = new Date()
			this.actionHistory.push({
				action: action,
				timestamp: date.getTime()
			})
		},
		showActions() {
			if (this.displayActions == false) {
				this.displayActions = true
				this.actionButtonText = 'Hide Actions'
			} else {	
				this.displayActions = false
				this.actionButtonText = 'Show Actions'
			}
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
	.stack-contain {
		position:relative;
		top:-175px;
	}
	.single-card {
		height:200px;
	}
</style>
