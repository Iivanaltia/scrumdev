var animal = {
	title: "",
	class: ""
}
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
 		var idxPhoto = animal_id.substring(2, 4);
 		console.log(animalIdx);
 		var animal = witchAnimal(parseInt(animalIdx), parseInt(idxPhoto));
 		var url = "url('../img/"+animal_id+".jpg')";
 		console.log(url);
 		console.log(animal.title);
 		console.log(animal.class);
 		$(".animal_info").toggle();
 		//$(".big_image").css("background-image",url);
 		$(".animal_photo_container").children().removeAttr('class');
 		$(".animal_photo_container").children().addClass("big_image "+ animal.class);

 		$("#animal_title").html(animal.title);
 	});

 	$(".close_info").on("click", function(){
 		var animal_id = $(this).attr("id");
 		console.log(animal_id);
 		$(".animal_info").toggle();
 	})
 });

 function witchAnimal(animalIdx,idxPhoto){
 	console.log(idxPhoto);
 	switch(animalIdx){
 		case 1:
 			animal = {
 				title : "León",
 				class : "Leon"+idxPhoto
 			}
 			break;
 		case 2:
 			animal = {
 				title : "Canguro",
 				class : "Canguro"+idxPhoto
 			}
 			break;
 		case 3:
 			animal = {
 				title : "Koala",
 				class : "Koala"+idxPhoto
 			}
 			break;
 		case 4:
 			animal = {
 				title : "Cocodrilo",
 				class : "Cocodrilo"+idxPhoto
 			}
 			break;
 		case 5:
 			animal = {
 				title : "Tiburón",
 				class : "Tiburón"+idxPhoto
 			}
 			break;
 		case 6:
 			animal = {
 				title : "Pingüino",
 				class : "Pingüino"+idxPhoto
 			}
 			break;
 		case 7:
 			animal = {
 				title : "Loro",
 				class : "Loro"+idxPhoto
 			}
 			break;
 	}
 	return animal;
 }