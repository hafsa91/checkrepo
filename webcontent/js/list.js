$(document).ready(function(){
	
	$(":text").keyup(function(e){
		if(e.which== 13){
		
		var x=$(":text").val();
		$("#list1 ul").append("<li>"+"<input type = 'checkbox'>"+ x +"<button id='delete'> Delete </button></li>");
		$(":text").val("");
		}
		
	
	
	$("#delete:last-child").click(function(){
	
		$(this).parent().remove();
	});
   $(":checkbox").click(function(){
	   if(this.checked) {
	        
		   $(this).parent("li").appendTo("#add");
		   this.checked=true;
	   }
	   
		   else {
	    	$(this).parent("li").appendTo("#list1")
	    	this.check=false;
	    	
	    		
	    		
	    
	    }
	   /*$("#add").append("<li>"+"<input type = 'checkbox'>"+ x +"<button id='delete'> Delete </button></li>");
	   $("#delete:last-child").click(function(){
			
			$(this).parent().remove();*/
   });
   });
	
	
	
});