function bla(){
  document.getElementById('test').style.backgroundColor = "pink";
  document.getElementById('btn').innerText = "Press me";
  document.getElementById('title').innerHTML = "Hello <span>world</span>";
  document.getElementById('lastname').value = "Something";
}


function bla2(){
  var colorOfTheDiv = document.getElementById('test').style.backgroundColor;
  var btnText = document.getElementById('btn').innerText;
  alert(btnText);
}


/*
write a program that will copy text from one input to another on click
 */