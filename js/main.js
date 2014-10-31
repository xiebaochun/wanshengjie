$(function () {
  var index=2;
  var isSwiping=false;

  $('#index_img').eraser({
    progressFunction: function(p) {
      if(p>=0.3){
        //$('#index_img').eraser('clear');
        $('#index_img').addClass("animated fadeOut");
        $("#index_img").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){    
          $("#index_img").removeClass("animated fadeOut");
          $('#index_img').hide();
        });
      }
    },
    size:80
  });
  var device_height=jQuery(window).height();
  var device_width=jQuery(window).width();
  console.log(device_height);
  $("#index_img").load(function(){$("#loader").hide();});
  $("#index_img").css({"height":device_height+"px","width":device_width+"px"});
  $("#bottom_img").css({"height":device_height+"px","width":device_width+"px"});

  $("#tip_01").css({"height":device_height+"px","width":device_width+"px"});

 $("#tip1_01").css({"height":"100%","width":"100%"});
 $("#tip1_02").css({"max-width":"800px","width":"80%"});
 $(".tips").css({"height":device_height+"px","width":device_width+"px"});

 $(".bg").css({"height":"100%","width":"100%"});
 //$("#tip2_03").css({"max-width":"640px","width":"100%"});
 $("#tip2_02").css({"max-width":"900px","width":"80%"});


 $("#tip5_02").css({"max-width":"1200px","width":"100%"});
 $("#tip5_02").load(function(){

  $("#tip5_02").css({"left":(device_width-$("#tip5_02").width())/2+"px","top":(device_height-$("#tip5_02").height())/2+"px"});
});

 $("#tip5_02").css({"left":(device_width-$("#tip5_02").width())/2+"px","top":(device_height-$("#tip5_02").height())/2+"px"});
 $("#tip5_03").css({"max-width":"640px","width":"100%"});
 $("#tip5_03").load(function(){
  $("#tip5_03").css({"left":(device_width-$("#tip5_03").width())/2+"px","top":(device_height-$("#tip5_03").height())/2+"px"});
});

 $("#tip5_04").css({"max-width":"271px","width":"50%"});
 $("#tip5_04").css({"left":"45%","top":"15%"});
 $("#tip5_05").css({"max-width":"372px","width":"50%"});
 $("#tip5_05").css({"left":(device_width-$("#tip5_05").width())/2+"px","bottom":"5%"});


 $("#bottom_img").swipe({
  swipe:function(event, direction, distance, duration, fingerCount) {

    if(direction=="left"||direction=="up"){

      if(isSwiping){
        return false;
      }
      isSwiping=true;
      index+=1;
      console.log("You swiped " + direction );
      

          $("#bottom_img").css({"z-index":"1"});

          $("#tip_01").css({"z-index":"2"});

          if(direction=="left"){
            $("#tip_01").addClass("animated fadeInRight");
            $("#bottom_img").addClass("animated fadeOutLeft");
            // $("#bottom_img").addClass("animated bounceOutLeft");
          }else{
           $("#tip_01").addClass("animated fadeInUp");
           $("#bottom_img").addClass("animated fadeOutUp");
             // $("#bottom_img").addClass("animated bounceOutRight");
           }
           $('#tip_01').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
             isSwiping=false;
             $("#tip1_03").show();
             $("#tip1_03").addClass("animated fadeInDown");
             $("#tip1_02").show();
             $("#tip1_02").addClass("animated fadeInLeft");
             $("#tip1_05").show();
             $("#tip1_05").addClass("animated fadeInUp");
             $("#tip1_06").show();
             $("#tip1_06").addClass("animated fadeIn");

             $("#tip_01").removeClass("animated fadeInUp");
             $("#tip_01").removeClass("animated fadeInRight");

             $("#bottom_img").removeClass("animated fadeOutUp");
             $("#bottom_img").removeClass("animated fadeOutLeft");

             $("#bottom_img").css({"z-index":"0"});
             
           });
         }
       }
     });

  $("#tip_01").swipe({
    swipe:function(event, direction, distance, duration, fingerCount) {

      if((direction=="left"||direction=="up")&&index<=6){

      if(isSwiping){
        return false;
      }
        isSwiping=true;

        console.log("You swiped " + direction );
        index+=1;


        $("#tip_01").css({"z-index":"1"});
        $("#tip_02").css({"z-index":"2"});
        if(direction=="left"){
          $("#tip_02").addClass("animated fadeInRight");
          $("#tip_01").addClass("animated fadeOutLeft");
        }else{
         $("#tip_02").addClass("animated fadeInUp");
         $("#tip_01").addClass("animated fadeOutUp");
       }

       $('#tip_02').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
         isSwiping=false;
         $("#tip2_03").show();
         $("#tip2_03").addClass("animated fadeInDown");
         $("#tip2_02").show();
         $("#tip2_02").addClass("animated fadeInRight");
         $("#tip2_05").show();
         $("#tip2_05").addClass("animated fadeInUp");
         $("#tip2_06").show();
         $("#tip2_06").addClass("animated fadeIn");

         $("#tip_02").removeClass("animated fadeInUp");
         $("#tip_02").removeClass("animated fadeInRight");

         $("#tip_01").removeClass("animated fadeOutLeft");
         $("#tip_01").removeClass("animated fadeOutUp");

         $("#tip_01").css({"z-index":"0"});


       });

     }
     if((direction=="right"||direction=="down")&&index>=3){
      if(isSwiping){
       return false;
      }
      isSwiping=true;

      console.log("You swiped " + direction );
      index-=1;


      $("#tip_01").css({"z-index":"1"});
      $("#bottom_img").css({"z-index":"2"});
      if(direction=="right"){
        $("#bottom_img").addClass("animated fadeInLeft");
        $("#tip_01").addClass("animated fadeOutRight");
      }else{
       $("#bottom_img").addClass("animated fadeInDown");
       $("#tip_01").addClass("animated fadeOutDown");
     }
     $('#bottom_img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
       isSwiping=false;


       $("#bottom_img").removeClass("animated fadeInDown");
       $("#bottom_img").removeClass("animated fadeInLeft");

       $("#tip_01").removeClass("animated fadeOutRight");
       $("#tip_01").removeClass("animated fadeOutDown");
       $("#tip_01").css({"z-index":"0"});
     });

   }
 }
});

$("#tip_02").swipe({
  swipe:function(event, direction, distance, duration, fingerCount) {

    if((direction=="left"||direction=="up")&&index<=6){

      if(isSwiping){
      return false;
      }
      isSwiping=true;

      console.log("You swiped " + direction );
      index+=1;


      $("#tip_02").css({"z-index":"1"});
      $("#tip_03").css({"z-index":"2"});
      if(direction=="left"){
        $("#tip_03").addClass("animated fadeInRight");
        $("#tip_02").addClass("animated fadeOutLeft");
      }else{
       $("#tip_03").addClass("animated fadeInUp");
       $("#tip_02").addClass("animated fadeOutUp");
     }
     $('#tip_03').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
       isSwiping=false;
       $("#tip3_03").show();
       $("#tip3_03").addClass("animated fadeInDown");
       $("#tip3_02").show();
       $("#tip3_02").addClass("animated fadeInRight");
       $("#tip3_05").show();
       $("#tip3_05").addClass("animated fadeInUp");
       $("#tip3_06").show();
       $("#tip3_06").addClass("animated fadeIn");
       $("#tip_03").removeClass("animated fadeInRight");
       $("#tip_03").removeClass("animated fadeInUp");

       $("#tip_02").removeClass("animated fadeOutLeft");
       $("#tip_02").removeClass("animated fadeOutUp");
       $("#tip_02").css({"z-index":"0"});

     });
   }
   if((direction=="right"||direction=="down")&&index>=3){
   if(isSwiping){
      return false;
    }
    isSwiping=true;

    console.log("You swiped " + direction );
    index-=1;


    $("#tip_02").css({"z-index":"1"});
    $("#tip_01").css({"z-index":"2"});
    if(direction=="right"){
      $("#tip_01").addClass("animated fadeInLeft");
      $("#tip_02").addClass("animated fadeOutRight");
    }else{
     $("#tip_01").addClass("animated fadeInDown");
     $("#tip_02").addClass("animated fadeOutDown");
   }
   $('#tip_01').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
     isSwiping=false;
     $("#tip_01").removeClass("animated fadeInDown");
     $("#tip_01").removeClass("animated fadeInLeft");

     $("#tip_02").removeClass("animated fadeOutRight");
     $("#tip_02").removeClass("animated fadeOutDown");
     $("#tip_02").css({"z-index":"0"});

   });

 }
}
});

$("#tip_03").swipe({
  swipe:function(event, direction, distance, duration, fingerCount) {

    if((direction=="left"||direction=="up")&&index<=6){

      if(isSwiping){
       return false;
      }
      isSwiping=true;

      console.log("You swiped " + direction );
      index+=1;


      $("#tip_03").css({"z-index":"1"});
      $("#tip_04").css({"z-index":"2"});
      if(direction=="left"){
        $("#tip_04").addClass("animated fadeInRight");
        $("#tip_03").addClass("animated fadeOutLeft");
      }else{
       $("#tip_04").addClass("animated fadeInUp");
       $("#tip_03").addClass("animated fadeOutUp");
     }
     $('#tip_04').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
       isSwiping=false;
       $("#tip4_03").show();
       $("#tip4_03").addClass("animated fadeInDown");
       $("#tip4_02").show();
       $("#tip4_02").addClass("animated fadeInRight");
       $("#tip4_05").show();
       $("#tip4_05").addClass("animated fadeInUp");
       $("#tip4_06").show();
       $("#tip4_06").addClass("animated fadeIn");

       $("#tip_04").removeClass("animated fadeInRight");
       $("#tip_04").removeClass("animated fadeInUp");

       $("#tip_03").removeClass("animated fadeOutLeft");
       $("#tip_03").removeClass("animated fadeOutUp");
       $("#tip_03").css({"z-index":"0"});

     });
   }
   if((direction=="right"||direction=="down")&&index>=3){
   if(isSwiping){
      return false;
   }
    isSwiping=true;

    console.log("You swiped " + direction );
    index-=1;


    $("#tip_03").css({"z-index":"1"});
    $("#tip_02").css({"z-index":"2"});
    if(direction=="right"){
      $("#tip_02").addClass("animated fadeInLeft");
      $("#tip_03").addClass("animated fadeOutRight");
    }else{
     $("#tip_02").addClass("animated fadeInDown");
     $("#tip_03").addClass("animated fadeOutDown");
   }
   $('#tip_02').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
     isSwiping=false;
     $("#tip_02").removeClass("animated fadeInDown");
     $("#tip_02").removeClass("animated fadeInLeft");

     $("#tip_03").removeClass("animated fadeOutDown");
     $("#tip_03").removeClass("animated fadeOutRight");
     $("#tip_03").css({"z-index":"0"});

   });

 }
}
});

$("#tip_04").swipe({
  swipe:function(event, direction, distance, duration, fingerCount) {

    if((direction=="left"||direction=="up")&&index<=6){

      if(isSwiping){
        return false;
      }
      isSwiping=true;

      console.log("You swiped " + direction );
      index+=1;


      $("#tip_04").css({"z-index":"1"});
      $("#tip_05").css({"z-index":"2"});
      if(direction=="left"){
        $("#tip_05").addClass("animated fadeInRight");
        $("#tip_04").addClass("animated fadeOutLeft");
      }else{
       $("#tip_05").addClass("animated fadeInUp");
       $("#tip_04").addClass("animated fadeOutUp");
     }
     $('#tip_05').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
       isSwiping=false;
       $("#tip5_03").show();
       $("#tip5_03").addClass("animated fadeInDown");
       $("#tip5_02").show();
       $("#tip5_02").addClass("animated fadeIn");

       $("#tip5_04").show();
       $("#tip5_04").addClass("animated fadeInRight");
       $("#tip5_05").show();

       $("#tip5_05").addClass("animated fadeInUp");

       $("#tip_05").removeClass("animated fadeInRight");
       $("#tip_05").removeClass("animated fadeInUp");

       $("#tip_04").removeClass("animated fadeOutUp");
       $("#tip_04").removeClass("animated fadeOutLeft");
       $("#tip_04").css({"z-index":"0"});

     });
   }
   if((direction=="right"||direction=="down")&&index>=3){
    
    if(isSwiping){
      return false;
    }

    isSwiping=true;

    console.log("You swiped " + direction );
    index-=1;


    $("#tip_04").css({"z-index":"1"});
    $("#tip_03").css({"z-index":"2"});
    if(direction=="right"){
      $("#tip_03").addClass("animated fadeInLeft");
      $("#tip_04").addClass("animated fadeOutRight");
    }else{
     $("#tip_03").addClass("animated fadeInDown");
     $("#tip_04").addClass("animated fadeOutDown");
   }
   $('#tip_03').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
     isSwiping=false;
     $("#tip_03").removeClass("animated fadeInDown");
     $("#tip_03").removeClass("animated fadeInLeft");

     $("#tip_04").removeClass("animated fadeOutDown");
     $("#tip_04").removeClass("animated fadeOutRight");
     $("#tip_04").css({"z-index":"0"});

   });

 }
}
});

$("#tip_05").swipe({
  swipe:function(event, direction, distance, duration, fingerCount) {


    if((direction=="right"||direction=="down")&&index>=3){
      if(isSwiping){
      return false;
      }
      isSwiping=true;

      console.log("You swiped " + direction );
      index-=1;


      $("#tip_05").css({"z-index":"1"});
      $("#tip_04").css({"z-index":"2"});
      if(direction=="right"){
        $("#tip_04").addClass("animated fadeInLeft");
        $("#tip_05").addClass("animated fadeOutRight");
      }else{
       $("#tip_04").addClass("animated fadeInDown");
       $("#tip_05").addClass("animated fadeOutDown");
     }
     $('#tip_04').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
       isSwiping=false;
       $("#tip_04").removeClass("animated fadeInDown");
       $("#tip_04").removeClass("animated fadeInLeft");

       $("#tip_05").removeClass("animated fadeOutDown");
       $("#tip_05").removeClass("animated fadeOutRight");
       $("#tip_05").css({"z-index":"0"});

     });

   }
 }
});

});