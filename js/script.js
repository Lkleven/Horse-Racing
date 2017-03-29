//script.js

$(function  () {

	$("#go").click(function(){
		$(this).attr("disabled", true).addClass("disabled");
		

		var positionsArray = ["first", "second", "third", "fourth"];
		var position = 0;
		var place ="";

		function checkPositionAtFinish(){
			place = positionsArray[position];
			position++;

			//Enables the reset button once all horses have finished
			if(position == positionsArray.length){
				$("#reset").attr("disabled", false).removeClass("disabled");
			}
		}
		
		var horseWidth = $(".horse").width();
		var racetrackWidth =$(window).width() - horseWidth;

		var raceTime1 = Math.floor((Math.random() * 5000) +1000);
		var raceTime2 = Math.floor((Math.random() * 5000) +1000);
		var raceTime3 = Math.floor((Math.random() * 5000) +1000);
		var raceTime4 = Math.floor((Math.random() * 5000) +1000);

		var isFinished = false;

		//animations
		//greenHorse
		$("#greenHorse").animate({
			left: racetrackWidth
		}, raceTime1, function(){
			checkPositionAtFinish();
			$("#raceInfo1 span").text("Finished in " + place + " place and clocked in at " + raceTime1 + " milliseconds!");
		});

		
		//greenHorse END

		//orangeHorse
		$("#orangeHorse").animate({
			left: racetrackWidth
		}, raceTime2, function(){
			checkPositionAtFinish();
			$("#raceInfo2 span").text("Finished in " + place + " place and clocked in at " + raceTime2 + " milliseconds!");
		});

		
		//orangeHorse END

		//redHorse
		$("#redHorse").animate({
			left: racetrackWidth
		}, raceTime3, function(){
			checkPositionAtFinish();
			$("#raceInfo3 span").text("Finished in " + place + " place and clocked in at " + raceTime3 + " milliseconds!");
		});

		
		//redHorse END


		//blueHorse
		$("#blueHorse").animate({
			left: racetrackWidth
		}, raceTime4, function(){
			checkPositionAtFinish();
			$("#raceInfo4 span").text("Finished in " + place + " place and clocked in at " + raceTime4 + " milliseconds!");
		});

		
		//blueHorse END

		$("#reset").click(function(){
			$(".horse").css("left", "0");
			$(".raceInfo span").text("");
			$("#go").attr("disabled", false).removeClass("disabled");
			$(this).attr("disabled", true).addClass("disabled");
		})
	});

});

