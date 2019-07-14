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
	.card {
		width:120px; 
		height:180px; 
		border:1px solid; 
		border-radius:5px; 
		background:#fff;
		margin:auto;
		margin-bottom:-180px;
		position:relative;
		display:flex;
		flex-wrap:wrap;
	}
	.card .top {
		width:100%;
		margin-bottom:auto;
		margin-top:5px;
		display:flex;
		justify-content:space-between;
	}
	.card .top .suitContainer {
		display:flex;
		flex-wrap:wrap;
		flex-direction:row;
	}
	.card .bottom {
		width:100%;
		margin-top:auto;
		margin-bottom:5px;
		display:flex;
		justify-content:space-between;
	}
	.card .bottom .suitContainer {
		display:flex;
		flex-wrap:wrap;
		flex-direction:row;
		min-width:18px;
		max-width:18px;
	}
	.card .middle {
		margin:auto;
		font-size:60px;
	}
	.card .suit {
		display:flex;
		align-items:center;
		justify-content:center;
		flex:0 0 100%;
		font-size:14px;
	}
	.card .bottom .suitContainer .suit {
		transform:rotate(180deg);
	}
	.card.red {
		color:red;
	}
	.card.black {
		color:black;
	}
</style>
