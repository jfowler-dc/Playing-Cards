<template>
  <div class="card">
  	<div class="top">
  		<div class="left">
  			<div class="suit">{{value}}</div>
  			<div class="suit">{{suitModifier}}</div>
  		</div>
  		<div class="right">
  			<div class="suit">{{value}}</div>
  			<div class="suit">{{suitModifier}}</div>
  		</div>
  	</div>
  	<div class="middle">
  		{{suitModifier}}
  	</div>
  	<div class="bottom">
  		<div class="left">
  			<div class="suit">{{suitModifier}}</div>
  			<div class="suit">{{value}}</div>
  		</div>
  		<div class="right">
  			<div class="suit">{{suitModifier}}</div>
  			<div class="suit">{{value}}</div>
  		</div>
  	</div>
  </div>
</template>


<script>
export default {
  name: 'Card',
  props: ['suit', 'value'],
  data () {
    return {
      
    }
  },
  computed: {
  	suitModifier() {
  		switch(this.suit) {
  			case 'hearts':
  				return '♥' 
  				break
  			case 'diamonds':
  				return '♦'
  				break
			case 'clubs':
				return '♣'
				break
			case 'spades':
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
		margin-bottom:10px;
		background:#fff;
		margin:auto;
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
</style>
