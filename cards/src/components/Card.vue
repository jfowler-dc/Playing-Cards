<template>
  <div class="card">
  	{{suit}} - {{value}}
  </div>
</template>


<script>
export default {
  name: 'Card',
  props: ['suit', 'value'],
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  }
}
</script>


<style scoped>

</style>
