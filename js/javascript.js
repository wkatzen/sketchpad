var size = 16;
var gridSize = 20;

$(document).ready(function() {
  	createGrid()
    $('button').click(function() {
      $('div').removeClass("active");
      prompt("Pick a new grid size:");
    })
// makes initial grid
   function createGrid() {
   	 for(i = 1; i <= size * size; i++) {
 			 $("#container").append('<div class="square"></div>');
   };
 };

 // when mouse enters the grid div changes class to show new color
    $(document).on("mouseenter", ".square", function() {
      $(this).addClass("active");
    });

});
