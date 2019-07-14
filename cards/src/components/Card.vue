<template>
  <div class="card">
  	{{suitModifier}} - {{value}}
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
	}
	.deck .card {
		position:absolute;
	}
</style>
