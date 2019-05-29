 $(document).on("ready",function(){

 	for(var i=1 ; i<8 ; i++){
 		for(var j=1 ; j<5 ; j++){
 			var animals_items = '<div class="animal" id="0'+i+'0'+j+'"><img id="0'+i+'0'+j+'" src="img/0'+i+'0'+j+'.jpg"></div>';
 			$(".animals_container").append(animals_items);
 		}
 	}
 	$(".animal").on("click", function(){
 		var animal_id = $(this).attr("id");
 		var url = "url('../img/"+animal_id+".jpg')";
 		console.log(url);
 		$(".animal_info").toggle();
 		$(".big_image").css("backgound-image",url);
 		$("#animal_title").html("KOALA");
 	});

 	$(".close_info").on("click", function(){
 		var animal_id = $(this).attr("id");
 		console.log(animal_id);
 		$(".animal_info").toggle();
 	})
 });

 function witchAnimal(animalIdx){
 	switch(animalIdx){
 		case 1:
 			animal_title = "León";
 	}
 	return animal_title;
 }