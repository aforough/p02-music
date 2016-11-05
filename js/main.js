//This is a comment
console.log("JavaScript is running.");

//telling it that we are using clean and strict code
'use strict'; 


// var width = $(window).width();

// if (width < 500){
// 	$("#nav-toggle").removeClass("hidden");
// 	$("#nav-items").addClass("hidden");

// 	$("#nav-toggle").attr("aria-hidden", "false");
// 	$("nav-items").attr("aria-hidden", "true");

// }

$("#load_more").click( function() {
	$("#load_modules").toggleClass("hidden");

	if ($("load_modules").hasClass("hidden")){
		// $("nav-items").attr("aria-hidden", "true");
	// } else {
		$("load_modules").attr("aria-hidden", "false");
	// }
});

