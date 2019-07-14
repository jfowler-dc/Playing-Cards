<template>
  <div class="card" :class="colorClass">
  	<div class="top">
  		<div class="left">
  			<div class="suit">{{value}}</div>
  			<div class="suit">{{suitIcon}}</div>
  		</div>
  		<div class="right">
  			<div class="suit">{{value}}</div>
  			<div class="suit">{{suitIcon}}</div>
  		</div>
  	</div>
  	<div class="middle">
  		{{suitIcon}}
  	</div>
  	<div class="bottom">
  		<div class="left">
  			<div class="suit">{{suitIcon}}</div>
  			<div class="suit">{{value}}</div>
  		</div>
  		<div class="right">
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
  			case 'hearts':
  				this.colorClass = this.color[0]
  				return '♥' 
  				break
  			case 'diamonds':
  				this.colorClass = this.color[0]
  				return '♦'
  				break
			case 'clubs':
				this.colorClass = this.color[1]
				return '♣'
				break
			case 'spades':
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
		display:flex;
		justify-content:space-between;
	}
	.card .top .left, .card .top .right {
		display:flex;
		flex-wrap:wrap;
		flex-direction:row;
	}
	.card .bottom {
		width:100%;
		margin-top:auto;
		display:flex;
		justify-content:space-between;
	}
	.card .bottom .left, .card .bottom .right {
		display:flex;
		flex-wrap:wrap;
		flex-direction:row;
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
	}
	.card .bottom .left .suit, .card .bottom .right .suit {
		transform:rotate(180deg);
	}
	.card.red {
		color:red;
	}
	.card.black {
		color:black;
	}
</style>
