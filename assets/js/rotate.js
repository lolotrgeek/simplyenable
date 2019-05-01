//<![CDATA[ 
$(window).load(function(){
	var terms = $("#rotatees li");

	function rotateTerm() {

	 var ct = $("#rotate").data("term") || 0;

	//  console.log(terms.eq([ct]).text());
	 
	  $("#rotate").data("term", 
	  	ct == terms.length -1 ? 0 : ct + 1).text(terms.eq([ct]).text())
	  .fadeIn().delay(2000).fadeOut(200, rotateTerm);

	}
	$(rotateTerm);

});//]]>  