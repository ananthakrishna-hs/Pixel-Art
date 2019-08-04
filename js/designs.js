/**
*@description Executes jQuery/JS statements after load
*@param {function} - The function to be executed after load
*/ 
$(function() {
	/**
	*@description jQuery event listener on a submit button
	*@param {event} - The event triggered
	*/
	$("#sizePicker").submit(function( event ) {
		var height = $("#inputHeight").val();
		var width = $("#inputWidth").val();
		var table = $("#pixelCanvas");
		table.empty();
		for(var i = 0;i < height;i++) {
			var row = $("<tr></tr>");
			for(var j = 0;j < width;j++) {
				var cell = $("<td class='block'></td>");
				row.append(cell);
			}
			table.append(row);
		}
		event.preventDefault();
	});

	/**
	 * @description jQuery event handler to reset the canvas
	 */
	$("#sizePicker").on("reset", function() {
		var table = $("#pixelCanvas"); 
		table.empty();
	});

	var colorx = $("#colorPicker");
	var block = $("table");
	/**
	*@description Function to paint a grid cell using jQuery event delegation
	*/
	block.on("click","td",function() {
		$(this).css("background-color",colorx.val());
	});
});

