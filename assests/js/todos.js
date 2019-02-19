$("ul").on("click", "li", function(){
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	color: "black",
	// 	textDecoration:"none",
	// });
	// }
	// else {
	// $(this).css({
	// 	color: "gray",
	// 	textDecoration:"Line-through",
	// });
	// }
	$(this).toggleClass("completed");
});

//Click on trashcan icon to delete Todo
 $("ul").on("click", "span", function(event){
//In order to apply on all "ul", use "on"
 	$(this).parent().fadeOut(500, function(){ 
 		//parent() - to correctly select the <li> element 
 		$(this).remove();
 	});
 	event.stopPropagation(); //Stop bubbling up to other elements
 });

 $("input[type='text']").keypress(function(event){
 	if(event.which === 13) {
 		//grabbing new todo text from input
 		var todoText = $(this).val();
 		$(this).val("");
 		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
 	}
 });

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});