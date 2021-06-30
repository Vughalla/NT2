<template>

  <div id="navigator">
		<button id="reset" v-on:click="reset"> {{ getResetBtnTxt }} </button>
		<span id="message"> {{ $store.state.message }} </span>

		<button id="easy" v-on:click="handleDificultyChanged(false)" :class="!$store.state.isHard ? 'selected' : ''">easy</button>
		<button id="hard" v-on:click="handleDificultyChanged(true)" :class="$store.state.isHard ? 'selected' : ''">hard</button>
	</div>

</template>

<script lang="js">

  export default  {
    name: 'Navigator',
    data () {
      return {
      }
    },
    methods: {
		handleDificultyChanged(isHard){
			if(this.$store.state.isHard !== isHard){
				this.$store.dispatch('restart', isHard)
			}
		},
		reset(){
			this.$store.dispatch('restart', this.$store.state.isHard)
		}
    },
    computed: {
        getResetBtnTxt: function () {
            return this.$store.state.message === 'You Picked Right!' ? 'Play Again!' : 'New colors!'  
        }
    }
}


</script>

<style scoped lang="css">
#navigator {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;

}

button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: blueviolet;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: blueviolet;
}

#message {
	display: inline-block;
	width: 20%;
}

.selected {
	background-color: blueviolet;
	color: white;
}
</style>