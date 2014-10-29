$(function () {
var index=2;
var isStart=false;
var time=0;
var count=0;
var isSwiping=false;
var timeCallBack;
   var images=[];
  preload(
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg"
  );
  $('#index_img').eraser({
          progressFunction: function(p) {
            if(p>=0.1){
              $('#index_img').eraser('clear');
              $('#index_img').hide();
            }
          }
  });
  var device_height=jQuery(window).height();
  var device_width=jQuery(window).width();
  console.log(device_height);
 $("#index_img").css({"height":device_height+"px","width":device_width+"px"});
 $("#bottom_img").css({"height":device_height+"px","width":device_width+"px"});

 $("#tip_01").css({"height":device_height+"px","width":device_width+"px"});
 
 // $("#tip_01").css({"left":device_width+"px","z-index":"1"});
 $("#tip1_01").css({"height":"100%","width":"100%"});
 $("#tip1_03").css({"max-width":"640px","width":"100%"});
 $("#tip1_02").css({"max-width":"480px","width":"60%"});

 $(".tips").css({"height":device_height+"px","width":device_width+"px"});

  $(".bg").css({"height":"100%","width":"100%"});
 $("#tip2_03").css({"max-width":"640px","width":"100%"});
 $("#tip2_02").css({"max-width":"480px","width":"60%"});


  $("#tip5_02").css({"max-width":"640px","width":"100%"});
  $("#tip5_02").css({"left":(device_width-$("#tip5_02").width())/2+"px","top":"16%"});
  $("#tip5_03").css({"max-width":"640px","width":"100%"});
  $("#tip5_03").css({"left":(device_width-$("#tip5_03").width())/2+"px","top":"35%"});
  $("#tip5_04").css({"max-width":"271px","width":"50%"});
  $("#tip5_04").css({"left":"70%","top":"15%"});
  $("#tip5_05").css({"max-width":"372px","width":"50%"});
  $("#tip5_05").css({"left":(device_width-$("#tip5_05").width())/2+"px","bottom":"5%"});
  

$("#bottom_img").swipe({
      swipe:function(event, direction, distance, duration, fingerCount) {
          
          if(direction=="left"||direction=="up"){

            if(isSwiping)return;
            isSwiping=true;
            
            console.log("You swiped " + direction );
            index+=1;

          //       count++;
          //       $("#count_number").html(count);
          //   if(!isStart){
          //     isStart=true;
          //     timeCallBack=setInterval(playGame,2000);
          //   }
           $("#bottom_img").css({"z-index":"1"});
           
           $("#tip_01").css({"z-index":"2"});

           if(direction=="left"){
            $("#tip_01").addClass("animated bounceInRight");
            // $("#bottom_img").addClass("animated bounceOutLeft");
          }else{
             $("#tip_01").addClass("animated bounceInUp");
             
             // $("#bottom_img").addClass("animated bounceOutRight");
          }
          $('#tip_01').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
             isSwiping=false;
             $("#tip1_03").show();
             $("#tip1_03").addClass("animated fadeInDown");
             $("#tip1_02").show();
             $("#tip1_02").addClass("animated bounceInLeft");
             $("#tip1_05").show();
             $("#tip1_05").addClass("animated fadeInUp");

             $("#tip_01").removeClass("animated bounceInUp");
             $("#tip_01").removeClass("animated bounceInRight");

            $("#bottom_img").css({"z-index":"0"});
           
           
             // $("#bottom_img").removeClass("animated bounceOutLeft");
             // $("#bottom_img").removeClass("animated bounceOutRight");
             
          });
        }
      }
    });
// function addEventTip_01(){

  $("#tip_01").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            
            if((direction=="left"||direction=="up")&&index<=6){

              if(isSwiping)return;
              isSwiping=true;
              
              console.log("You swiped " + direction );
              index+=1;

          
            $("#tip_01").css({"z-index":"1"});
            $("#tip_02").css({"z-index":"2"});
             if(direction=="left"){
              $("#tip_02").addClass("animated bounceInRight");
            }else{
               $("#tip_02").addClass("animated bounceInUp");
            }

             $('#tip_02').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                 isSwiping=false;
                 $("#tip2_03").show();
                 $("#tip2_03").addClass("animated fadeInDown");
                 $("#tip2_02").show();
                 $("#tip2_02").addClass("animated bounceInRight");
                 $("#tip2_05").show();
                 $("#tip2_05").addClass("animated fadeInUp");
                2
               $("#tip_02").removeClass("animated bounceInRight");
               $("#tip_02").removeClass("animated bounceInRight");
                
               $("#tip_01").css({"z-index":"0"});
               
            
            });
            
          }
          if((direction=="right"||direction=="down")&&index>=3){
              if(isSwiping)return;
              isSwiping=true;
              
              console.log("You swiped " + direction );
              index-=1;

           
            $("#tip_01").css({"z-index":"1"});
            $("#bottom_img").css({"z-index":"2"});
             if(direction=="right"){
              $("#bottom_img").addClass("animated bounceInLeft");
            }else{
               $("#bottom_img").addClass("animated bounceInDown");
            }
            $('#bottom_img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
               isSwiping=false;
               

             $("#bottom_img").removeClass("animated bounceInDown");
             $("#bottom_img").removeClass("animated bounceInLeft");
            $("#tip_01").css({"z-index":"0"});
          });
           
          }
        }
      });

 $("#tip_02").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            
            if((direction=="left"||direction=="up")&&index<=6){

              if(isSwiping)return;
              isSwiping=true;
              
              console.log("You swiped " + direction );
              index+=1;

          
            $("#tip_02").css({"z-index":"1"});
            $("#tip_03").css({"z-index":"2"});
             if(direction=="left"){
              $("#tip_03").addClass("animated bounceInRight");
            }else{
               $("#tip_03").addClass("animated bounceInUp");
            }
             $('#tip_03').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
               isSwiping=false;
                 $("#tip3_03").show();
                 $("#tip3_03").addClass("animated fadeInDown");
                 $("#tip3_02").show();
                 $("#tip3_02").addClass("animated bounceInRight");
                 $("#tip3_05").show();
                 $("#tip3_05").addClass("animated fadeInUp");
             $("#tip_03").removeClass("animated bounceInRight");
             $("#tip_03").removeClass("animated bounceInUp");
             $("#tip_02").css({"z-index":"0"});
            
          });
          }
          if((direction=="right"||direction=="down")&&index>=3){
              if(isSwiping)return;
              isSwiping=true;
              
              console.log("You swiped " + direction );
              index-=1;

           
            $("#tip_02").css({"z-index":"1"});
            $("#tip_01").css({"z-index":"2"});
             if(direction=="right"){
              $("#tip_01").addClass("animated bounceInLeft");
            }else{
               $("#tip_01").addClass("animated bounceInDown");
            }
            $('#tip_01').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
               isSwiping=false;
             $("#tip_01").removeClass("animated bounceInDown");
             $("#tip_01").removeClass("animated bounceInLeft");
             $("#tip_02").css({"z-index":"0"});
            
          });
           
          }
        }
      });

 $("#tip_03").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            
            if((direction=="left"||direction=="up")&&index<=6){

              if(isSwiping)return;
              isSwiping=true;
              
              console.log("You swiped " + direction );
              index+=1;

          
            $("#tip_03").css({"z-index":"1"});
            $("#tip_04").css({"z-index":"2"});
             if(direction=="left"){
              $("#tip_04").addClass("animated bounceInRight");
            }else{
               $("#tip_04").addClass("animated bounceInUp");
            }
             $('#tip_04').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
               isSwiping=false;
                 $("#tip4_03").show();
                 $("#tip4_03").addClass("animated fadeInDown");
                 $("#tip4_02").show();
                 $("#tip4_02").addClass("animated bounceInRight");
                 $("#tip4_05").show();
                 $("#tip4_05").addClass("animated fadeInUp");
             $("#tip_04").removeClass("animated bounceInRight");
             $("#tip_04").removeClass("animated bounceInUp");
             $("#tip_03").css({"z-index":"0"});
            
          });
          }
          if((direction=="right"||direction=="down")&&index>=3){
              if(isSwiping)return;
              isSwiping=true;
              
              console.log("You swiped " + direction );
              index-=1;

           
            $("#tip_03").css({"z-index":"1"});
            $("#tip_02").css({"z-index":"2"});
             if(direction=="right"){
              $("#tip_02").addClass("animated bounceInLeft");
            }else{
               $("#tip_02").addClass("animated bounceInDown");
            }
            $('#tip_02').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
               isSwiping=false;
             $("#tip_02").removeClass("animated bounceInDown");
             $("#tip_02").removeClass("animated bounceInLeft");
             $("#tip_03").css({"z-index":"0"});
            
          });
           
          }
        }
      });

 $("#tip_04").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            
            if((direction=="left"||direction=="up")&&index<=6){

              if(isSwiping)return;
              isSwiping=true;
              
              console.log("You swiped " + direction );
              index+=1;

          
              $("#tip_04").css({"z-index":"1"});
              $("#tip_05").css({"z-index":"2"});
              if(direction=="left"){
                $("#tip_05").addClass("animated bounceInRight");
              }else{
                 $("#tip_05").addClass("animated bounceInUp");
              }
               $('#tip_05').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                   isSwiping=false;
                   $("#tip5_03").show();
                   $("#tip5_03").addClass("animated fadeInDown");
                   $("#tip5_02").show();
                   $("#tip5_02").addClass("animated bounceInRight");

                   $("#tip5_04").show();
                   $("#tip5_04").addClass("animated bounceInRight");
                   $("#tip5_05").show();

                   $("#tip5_05").addClass("animated fadeInUp");

                 $("#tip_05").removeClass("animated bounceInRight");
                 $("#tip_05").removeClass("animated bounceInUp");
                 $("#tip_04").css({"z-index":"0"});
            
              });
          }
          if((direction=="right"||direction=="down")&&index>=3){
              if(isSwiping)return;
              isSwiping=true;
              
              console.log("You swiped " + direction );
              index-=1;

           
            $("#tip_04").css({"z-index":"1"});
            $("#tip_03").css({"z-index":"2"});
             if(direction=="right"){
              $("#tip_03").addClass("animated bounceInLeft");
            }else{
               $("#tip_03").addClass("animated bounceInDown");
            }
            $('#tip_03').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
               isSwiping=false;
             $("#tip_03").removeClass("animated bounceInDown");
             $("#tip_03").removeClass("animated bounceInLeft");
             $("#tip_04").css({"z-index":"0"});
            
          });
           
          }
        }
      });

$("#tip_05").swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            
            
          if((direction=="right"||direction=="down")&&index>=3){
              if(isSwiping)return;
              isSwiping=true;
              
              console.log("You swiped " + direction );
              index-=1;

           
            $("#tip_05").css({"z-index":"1"});
            $("#tip_04").css({"z-index":"2"});
             if(direction=="right"){
              $("#tip_04").addClass("animated bounceInLeft");
            }else{
               $("#tip_04").addClass("animated bounceInDown");
            }
            $('#tip_04').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
               isSwiping=false;
             $("#tip_04").removeClass("animated bounceInDown");
             $("#tip_04").removeClass("animated bounceInLeft");
             $("#tip_05").css({"z-index":"0"});
            
          });
           
          }
        }
      });
// }
  function preload() {
          for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
          }
        }
});