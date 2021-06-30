<template>
    <div class="square" :style="{ background: color }" v-on:click="handleClick">

    </div>
</template>

<script lang="js">

  export default  {
    name: 'Square',
    props: {
        color: String,
        i: Number,
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
        handleClick(){ 
            if(this.color === this.$store.state.pickedColor){
                 this.$store.dispatch('setMessage', 'You Picked Right!')
                 this.$store.dispatch('changeColors')
            }
            else{
                this.color = "#232323"
                this.$store.dispatch('setMessage', 'Try Again!')
                this.$store.dispatch('changeColor', this.i, "#232323")
            }
        },
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
#colorDisplay {
	font-size: 200%;
}


.square {
	width: 30%;
	background: blueviolet;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;

}
</style>