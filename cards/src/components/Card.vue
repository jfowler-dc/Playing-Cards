<template>
  <div class="card" :class="colorClass">
  	<div class="top">
  		<div class="suitContainer">
  			<div class="suit">{{value}}</div>
  			<div class="suit">{{suitIcon}}</div>
  		</div>
  		<div class="suitContainer">
  			<div class="suit">{{value}}</div>
  			<div class="suit">{{suitIcon}}</div>
  		</div>
  	</div>

  	<div class="middle">
  		{{suitIcon}}
  	</div>

  	<div class="bottom">
  		<div class="suitContainer">
  			<div class="suit">{{suitIcon}}</div>
  			<div class="suit">{{value}}</div>
  		</div>
  		<div class="suitContainer">
  			<div class="suit">{{suitIcon}}</div>
  			<div class="suit">{{value}}</div>
  		</div>
  	</div>
  </div>
</template>


<script>
export default {
  name: 'Card',
  props: ['suit', 'value', 'color'],
  data () {
    return {
      colorClass: ''
    }
  },
  computed: {
  	suitIcon() {
  		switch(this.suit) {
  			case 'Hearts':
  				this.colorClass = this.color[0]
  				return '♥' 
  				break
  			case 'Diamonds':
  				this.colorClass = this.color[0]
  				return '♦'
  				break
			case 'Clubs':
				this.colorClass = this.color[1]
				return '♣'
				break
			case 'Spades':
				this.colorClass = this.color[1]
				return '♠'
				break	
  		}
  	}
  },
  methods: {

  }
}
</script>


<style scoped>
	.card.red {
		color:red;
	}
	.card.black {
		color:black;
	}
</style>
