$(document).ready(function(){
    var count=document.getElementsByClassName("slider_images").length-1;
    for(i=0;i<=count;i++){
      document.getElementsByClassName("slider_images")[i].style.display='none';  
    }
    document.getElementsByClassName("slider_images")[0].style.display='block';
    current_slide=0;
});

function slide(n){
    var count=document.getElementsByClassName("slider_images").length-1;
    current_slide=current_slide+n;
    for(i=0;i<=count;i++){
      document.getElementsByClassName("slider_images")[i].style.display='none';  
    }
    if(current_slide>=0 && current_slide<=count){
        document.getElementsByClassName("slider_images")[current_slide].style.display='block';
    }
    else if(current_slide>count){
        current_slide=0;
        document.getElementsByClassName("slider_images")[0].style.display='block';
    }
    else{
        current_slide=count;
        document.getElementsByClassName("slider_images")[count].style.display='block';
    }
}