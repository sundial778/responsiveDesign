$(document).ready(function() {
	
	function showText(id)
	{
		$(id).find("p").slideToggle()

    }
	
	$('#projects').click(function() {
    	
    	showText("#projects");
	});


$('#life').click(function() {
    	
    	showText("#life");
	});
$('#work').click(function() {
    	
    	showText("#work");
	});
$('#play').click(function() {
    	
    	showText("#play");
	});
function fadeIn(id)
	{
		
$(id).animate()
    }
    $('#plink').click(function() {
    	
    	fadeIn("#projects");
	});
	$('#playLink').click(function() {
    	
    	fadeIn("#play");
	});
	$('#wlink').click(function() {
    	
    	fadeIn("#work");
	});
	$('#llink').click(function() {
    	
    	fadeIn("#life");
	});
});

