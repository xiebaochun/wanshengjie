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
 $("#next_img").css({"height":device_height+"px","width":device_width+"px"});

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
          if(direction=="left"){
            $("#next_img").css({"left":device_width+"px","z-index":"2"});
          }else{
             $("#next_img").css({"top":device_height+"px","z-index":"2"});
          }
            $("#next_img").attr("src","images/"+index+".jpg");
            $("#next_img").show();
            $("#next_img").animate({
          
              left: "0px",
              top:"0px"
              }, 1000, function() {
              // Animation complete.

              $("#bottom_img").css({"z-index":"1"});
                        //$(this).attr("src","images/tu"+index+"_left-sheet0.png");
              // $("#img_left_next").css("z-index","1");
              //       $("#img_right_next").css("z-index","1");
            
                         isSwiping=false;
                         //end();
          });

          

          //     $("#img_right").animate({
            
          //   left: "+=50%",
          //   top: "60%"
          // }, 1000, function() {
          //   $(this).css({"left":"15%","top":"20%","z-index":"0"});
          //   $(this).attr("src","images/tu"+index+"_right-sheet0.png");
          // });
        }
        if((direction=="right"||direction=="down")&&index>=3){
            if(isSwiping)return;
            isSwiping=true;
            
            console.log("You swiped " + direction );
            index-=1;

          //       count++;
          //       $("#count_number").html(count);
          //   if(!isStart){
          //     isStart=true;
          //     timeCallBack=setInterval(playGame,2000);
          //   }
           $("#bottom_img").css({"z-index":"1"});
          $("#next_img").attr("src","images/"+index+".jpg");
          if(direction=="right"){
            $("#next_img").css({"left":-device_width+"px","z-index":"2"});
          }else{
             $("#next_img").css({"top":-device_height+"px","z-index":"2"});
          }
            
            $("#next_img").show();
            $("#next_img").animate({
          
              left: "0px",
              top:"0px"
              }, 1000, function() {
              // Animation complete.
              $("#bottom_img").css({"z-index":"1"});
                        //$(this).attr("src","images/tu"+index+"_left-sheet0.png");
              // $("#img_left_next").css("z-index","1");
              //       $("#img_right_next").css("z-index","1");
            
                         isSwiping=false;
                         //end();
          });
        }
      }
    });

$("#next_img").swipe({
      swipe:function(event, direction, distance, duration, fingerCount) {
          
          if((direction=="left"||direction=="up")&&index<=6){

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
          $("#next_img").css({"z-index":"1"});
          if(direction=="left"){
            $("#bottom_img").css({"left":device_width+"px","z-index":"2"});
          }else{
             $("#bottom_img").css({"top":device_height+"px","z-index":"2"});
          }
            $("#bottom_img").attr("src","images/"+index+".jpg");
            $("#bottom_img").show();
            $("#bottom_img").animate({
          
              left: "0px",
              top:"0px"
              }, 1000, function() {
              // Animation complete.
              $("#next_img").css({"z-index":"1"});
                        //$(this).attr("src","images/tu"+index+"_left-sheet0.png");
              // $("#img_left_next").css("z-index","1");
              //       $("#img_right_next").css("z-index","1");
            
                         isSwiping=false;
                         //end();
          });

          

          //     $("#img_right").animate({
            
          //   left: "+=50%",
          //   top: "60%"
          // }, 1000, function() {
          //   $(this).css({"left":"15%","top":"20%","z-index":"0"});
          //   $(this).attr("src","images/tu"+index+"_right-sheet0.png");
          // });
        }
        if((direction=="right"||direction=="down")&&index>=3){
            if(isSwiping)return;
            isSwiping=true;
            
            console.log("You swiped " + direction );
            index-=1;

          //       count++;
          //       $("#count_number").html(count);
          //   if(!isStart){
          //     isStart=true;
          //     timeCallBack=setInterval(playGame,2000);
          //   }
          $("#next_img").css({"z-index":"1"});
          $("#bottom_img").attr("src","images/"+index+".jpg");
          if(direction=="right"){
            $("#bottom_img").css({"left":-device_width+"px","z-index":"2"});
          }else{
             $("#bottom_img").css({"top":-device_height+"px","z-index":"2"});
          }
            
            $("#bottom_img").show();
            $("#bottom_img").animate({
          
              left: "0px",
              top:"0px"
              }, 1000, function() {
              // Animation complete.
              $("#next_img").css({"z-index":"1"});
                        //$(this).attr("src","images/tu"+index+"_left-sheet0.png");
              // $("#img_left_next").css("z-index","1");
              //       $("#img_right_next").css("z-index","1");
            
                         isSwiping=false;
                         //end();
          });
        }
      }
    });
  function preload() {
          for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
          }
        }
});