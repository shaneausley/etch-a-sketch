$(document).ready(function() {
	
	//Function to create sketch pad based off number of squares
	function getSketcher(squares) {

		//get size of unit side
		var unitSize = (800/squares)
		
		//reset container
		$('#container').empty();

		//make grid of squares
		for(x=0; x<squares; x++) {
			for(y=0; y<squares; y++) {
				$('#container').append("<div class='unit'></div>");
			};
		};

		//change size of squares
		$('.unit').width(unitSize);
		$('.unit').height(unitSize);

		//darken square on hover
		$('.unit').hover(
			function() {
				$(this).addClass("unit-hover");
		}
	);

	};

	//make gird of squares that is 16x16
	getSketcher(16)
	


	//highlight button on hover
	$('button').hover(
		function() {
			$(this).addClass("button-hover");
		},
		function() {
			$(this).removeClass("button-hover");
		}
	);

	
	$("button").click(
		function(){
			$(this).effect("highlight", {color:"##2874A6"}, 300);
		});

	//prompt for new number of squares on button click and clear sketch
	$('button').on('click', 
		function(){
			$(".unit").removeClass('unit-hover');
			var newSquares = Number(prompt("How many squares per side do you want?"));
			getSketcher(newSquares)
		});
});