<template>
<div id="body" class="container-fluid mt-3">
  <div id="header">
		<h1>The Great <br>
			<span id="colorDisplay">RGB</span>
			<br>
			Guessing Game</h1>
	</div>
	
	<div id="navigator">
    <button id="reset" @click="restartButtonClick()">New colors</button>
		<span id="message"> </span>

    <button :class="{'selected':!isHard}" @click="setHard()">easy</button>
    <button :class="{'selected':isHard}" @click="setEasy()">hard</button>
	</div>

	<div id="container">
		<div class="square"	@click="squareClick(0)"></div>
		<div class="square"	@click="squareClick(1)"></div>
		<div class="square"	@click="squareClick(2)"></div>
		<div class="square"	@click="squareClick(3)"></div>
		<div class="square"	@click="squareClick(4)"></div>
		<div class="square"	@click="squareClick(5)"></div>
	</div>

</div>
</template>

<script>
export default {
  	name: 'ColorsGame',
  	props: {
  	},
  	mounted () {
  	},
	computed: {
    	squares() {
    	    return document.querySelectorAll(".square")
    	},
		colorDisplay() {
    	    return document.getElementById("colorDisplay")
    	},
		messageDisplay() {
    	    return document.getElementById("message")
    	},
		pickedColor: {
			get()
        	{
        	    return this.colors[this.PickColor()]
        	},
        	set()
        	{
        	    return this.colors[this.PickColor()]
        	}
    	},
		h1() {
    	    return document.querySelector("h1")
    	},
		restartButton() {
    	    return document.querySelector("#reset")
    	},
		header() {
    	    return document.querySelector("#header")
    	}
	},
  	data() {
    	return {
      		colorCount: 6,
      		isHard: true,
      		colors: []
    	}
  	},
  	methods: {
    	init(){
    		for(let i = 0; i <this.squares.length; i++) {
    	  		console.log(this.colors[i])
    	  		this.squares[i].style.backgroundColor = this.colors[i];
    	}
     	this.restart();
    },
	squareClick(index){
		let clickedColor = this.squares[index].style.backgroundColor

    	if (clickedColor === this.pickedColor) {
    		this.messageDisplay.textContent = "You Picked Right!"
    		this.setAllColorsTo(this.pickedColor)
    		this.restartButton.textContent = "Play Again!"
    		this.header.style.backgroundColor = this.pickedColor
    	} else {
    		this.squares[index].style.backgroundColor = "#232323"
    		this.messageDisplay.textContent = "Try Again!"
    		this.messageDisplay.style.color = "#000000"
		}
	},
    setAllColorsTo(color) {
    	this.squares.forEach(function (square){square.style.backgroundColor = color})
    },
    PickColor(){
    	let quantity;
    	if (this.isHard) {
    		quantity = 6
    	} else {
    		quantity = 3
    	}
    	return Math.floor(Math.random() * quantity);
    },
    createNewColors(numbers){
    	let arr = [];
    	for (let i = 0; i < numbers; i++) {
    		arr.push(this.createRandomStringColor())
    	}
      	return arr;
    },

    createRandomStringColor(){
    	let newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" 
    	return newColor;
    },
    randomInt(){
    	return Math.floor(Math.random() * 256)
    },
    restart(){
    	this.colors = this.createNewColors(this.colorCount)
    	this.pickedColor = this.colors[this.PickColor()]
    	this.colorDisplay.textContent = this.pickedColor
    	this.textContent = "Pick New Colors!"
    	this.header.style.backgroundColor = "steelblue"
    	this.messageDisplay.textContent = ""
    	this.restartButton.textContent = "New Colors!"
    	for (let i = 0; i <this.squares.length; i++) {
    		this.squares[i].style.backgroundColor = this.colors[i]
    	}
    },
    setHard(){
    	if (this.isHard) {
    		this.isHard = false
    		this.colorCount = 3
    		for (let i = 0; i < this.colorCount; i++) {
    			this.squares[(i+3)].style.display = "none"
    		}
    		this.restart()
    	}
    },
    setEasy(){
    	if (!this.isHard) {
    		this.isHard = true
    		this.colorCount = 6
    		this.restart()
    		for (let i = 3; i < 6; i++) {
    			this.squares[i].style.display = "block"
    		}
    	}
    },
    restartButtonClick(){
    	this.restart()
    }
  }
}
</script>


<style scoped>
#body {
	background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}

h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}
#navigator {

	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;

}
#header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	
}
#this {
	font-size: 200%;
}

.square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;

}
#container {
	margin: 20px auto;
	max-width: 600px;
}
#message {
	color: #ffffff;
	display: inline-block;
	width: 20%;
}

.selected {
	background-color: steelblue;
	color: white;
}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}

</style>
