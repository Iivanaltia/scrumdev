 $(document).on("ready",function(){

 	for(var i=1 ; i<8 ; i++){
 		for(var j=1 ; j<5 ; j++){
 			var animals_items = '<div class="animal" id="0'+i+'0'+j+'"><img src="img/0'+i+'0'+j+'.jpg"></div>';
 			$(".animals_container").append(animals_items);
 		}
 	}
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