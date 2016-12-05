function defaults(){
    var count=document.getElementsByClassName("slider_images").length;
    for(i=0;i<count;i++){
      document.getElementsByClassName("slider_images")[i].style.display='none';  
    }
    document.getElementsByClassName("slider_images")[0].style.display='block';
    current_slide=1;
};


function slide(n){
   var count=document.getElementsByClassName("slider_images").length;     
   current_slide=current_slide+n;   
   for(i=1;i<=count;i++){
      document.getElementsByClassName("slider_images")[i-1].style.display='none';  
    }
   if(current_slide>=1 && current_slide<=count){
         document.getElementsByClassName("slider_images")[current_slide-1].style.display='block';                 
   }
   else{   
        current_slide=1;
        document.getElementsByClassName("slider_images")[0].style.display='block';         
        console.log(current_slide); 
  }  
};