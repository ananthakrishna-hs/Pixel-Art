/**
*@description Executes jQuery/JS statements after load
*@ param {function} - The function to be executed after load
*/ 
$(function() {
	/**
	*@description jQuery event listener on a submit button
	*@param {event} - The event triggered
	*/
	$("#sizePicker").submit(function( event ) {
		let height=$("#inputHeight").val();
		let width=$("#inputWidth").val();
		let table=$("#pixelCanvas");
		table.empty();
		for(let i=0;i<height;i++) {
			let row=$("<tr></tr>");
			for(let j=0;j<width;j++) {
				let cell=$("<td class='block'></td>");
				row.append(cell);
			}
			table.append(row);
		}
		event.preventDefault();
	});
	let colorx=$("#colorPicker");
	let block=$("table");
	/**
	*@description Function to paint a grid cell using jQuery event delegation
	*/
	block.on("click","td",function() {
		$(this).css("background-color",colorx.val());
	});
});

