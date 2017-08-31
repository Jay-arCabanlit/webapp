		$(document).ready(function(){

		
		$("#mySidenav").hide();
			$("#secund-page").hide();
			$("#third-page").hide();
			$("#easy-page").hide();
			$("#content").hide();
			$("#question").hide();
			$("#submit").hide();
			$("#score").hide();
		$("#first-page").show();


		$(".all").on('click',function(){
			sample = $(this).attr('id');
			console.log(sample);
			askQuestion();
			$("#easy-page").show();
			$("#choices").show();
			$("#score").show();
			$("#question").show();
			$("#submit").show();
			$("#content").show();
		});


$("#button1").click(function(){
		$("#first-page").hide();
		$("#third-page").hide();
		$("#secund-page").fadeIn("slow");

});

$("#button3").click(function(){
		$("#first-page").hide();
		$("#secund-page").hide();
		$("#third-page").fadeIn();
});

// $("#easy").click(function(){
// 		$("#first-page").hide();
// 		$("#secund-page").hide();
// 		$("#third-page").hide();
// 		$("#easy-page").fadeIn();
// 		$("#submit").show();
// 		$("#question").show();
// 		$("#choices").show();
// 		$("#score").show();

// });
});
