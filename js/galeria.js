 $(document).on("ready",function(){

 	$(".animal").on("click", function(){
 		console.log("Animal");
 		$(".animal_info").toggle();
 	});
 	$(".close_info").on("click", function(){
 		var animal_id = $(this).attr("id");
 		console.log(animal_id);
 		$(".animal_info").toggle();
 	})
 });