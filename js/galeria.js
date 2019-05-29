 $(document).on("ready",function(){

 	for(var i=1 ; i<8 ; i++){
 		for(var j=1 ; j<5 ; j++){
 			var animals_items = '<div class="animal" id="0'+i+'0'+j+'"><img id="0'+i+'0'+j+'" src="img/0'+i+'0'+j+'.jpg"></div>';
 			$(".animals_container").append(animals_items);
 		}
 	}
 	$(".animal").on("click", function(){
 		var animal_id = $(this).attr("id");
 		var animalIdx = animal_id.substring(0, 2);
 		console.log(animalIdx);
 		var animal_title = witchAnimal(parseInt(animalIdx));
 		var url = "url('../img/"+animal_id+".jpg')";
 		console.log(url);
 		console.log(animal_title);
 		$(".animal_info").toggle();
 		$(".big_image").css("backgound-image",url);
 		$("#animal_title").html(animal_title);
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
 			break;
 		case 2:
 			animal_title = "Canguro";
 			break;
 		case 3:
 			animal_title = "Koala";
 			break;
 		case 4:
 			animal_title = "Cocodrilo";
 			break;
 		case 5:
 			animal_title = "Tiburón";
 			break;
 		case 6:
 			animal_title = "Pingüino";
 			break;
 		case 7:
 			animal_title = "Loro";
 			break;
 	}
 	return animal_title;
 }