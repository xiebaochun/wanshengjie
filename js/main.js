$(function () {
  $('#buttom_img').eraser({
          progressFunction: function(p) {
            if(p>=0.6){
              $('#buttom_img').eraser('clear');
            }
          }
        });   
});