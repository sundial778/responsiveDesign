 $(document).ready(function() {
	/*
	** add new item to the list
	*/
	function addNewItem()
	{
		// get the user's entered item from the text box
		var item = $("#newItem").val(); 
		console.log ("user entered item is " + item);

		// if entered item is not blank, echo it and add it to the item list div
    	if (item != "")
    	{
    		// create html to add to the div including the item the user added
    		var div = "<div id=\"listItemDiv\"" + "\>";
    		var listItem="<p id=\"listItem\">" + item + "</p></div>";
    		
    		var list = div + listItem;

    		// add the item to the list div
    		$("#itemListDiv").append($(list));

    		// clear the user's text entry by setting it to an empty string
    		$("#newItem").val("");

    	}
	}

	// this is a callback function. it is triggered when the addItemButton is pressed
	/* add new item after add button pressed */
	$('#addItemButton').click(function() {
    	console.log("mousedown add item button");
    	addNewItem();
	});


function clearItems()
	{
//this checks to see if the parent element and the child exists. If it does, it removes the parent element.
		if($("#listItemDiv").length && $("#listItem").length) {
   $("#listItemDiv").remove();

}
else{
	console.log("list item doesnt exist")
}
}

	// this is a callback function. it is triggered when the clear Button is pressed
	/* clears  items after clear button pressed */
	$('#clearButton').click(function() {
    	console.log("mousedown clear item button");
    	clearItems();
	
});
});
