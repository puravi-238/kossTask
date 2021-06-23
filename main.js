$(function()
{ 
     var imgsrc = [
	               "img/2.jpg",
				   "img/1.jpeg",
	               "img/3.jpeg",
				   "img/4.jpg",
				   "img/5.jpg",
				   "img/6.jpg",
				   "img/7.jpg",
				   "img/8.jpg",
				   "img/9.jpg",
				   "img/10.jpg",
				   "img/11.jpg",
				   "img/12.png"
	              ];

     $storage = $(".storage");
	 $viewer = $(".viewer");
	 $index =0;
	 
	 for(var x=0 ;x<imgsrc.length;x++)
	 {
		  $storage.append("<div class= 'image"+ x +"' ></div>");
		  $(".image" + x).append("<img src = "+imgsrc[x]+"></img>");
		  $viewer.append("<img class = 'myslides' src = "+imgsrc[x]+"></img>");
	 }		 


     $(".myslides:eq(0)").css("display","block");
	 $(".storage img:eq(0)").addClass("active");
	 
	 $myslides=$(".myslides");
	 $stimg = $(".storage img");
	 
	 $(document).on("keydown",()=>{
			  $myslides.css("display","none");
			  
			  $stimg.removeClass("active");
			  $index = show($index);
			  
			  if($index > imgsrc.length-1)
			  {
				   $index =0;
			  }
			  else if($index<0)
			  {
				  $index = imgsrc.length-1;
			  }
			  
			  $(".myslides:eq("+$index+")").css("display","block");
			  $(".storage img:eq("+$index+")").addClass("active");
			  
		  });
		  
     function show($index)
	 {
		  if(event.key == "ArrowRight")
		  { 
	         $index++;   
		  }
		  if(event.key == "ArrowLeft")
		  { 
	         $index--;   
		  }
		  return $index;
	 }
});