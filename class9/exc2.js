var screenW = window.innerWidth;


var myInterval = setInterval(function(){

  var current  = document.getElementById('mydiv').style.left; //10px
  current = parseInt(current);

  if( current >= (screenW - 100) ) {
    //then stop
    clearInterval(myInterval);
  }


  current = current + 1;
  document.getElementById('mydiv').style.left = current + "px";
}, 10)