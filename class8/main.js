var name = "John",
    lastname = "Doe";


function makeFullName(firstname, lastname) {
  var fullname = firstname + " " + lastname;
  return fullname;
}


//lets make a function that will alert if user is allowed to drink

function callCheck(){
  var allowed = checkIfAllowedToDrink();
  if(allowed) {
    document.getElementById('answer').innerText  = "Yes";
  } else {
    document.getElementById('answer').innerText = "No";
  }
}


function checkIfAllowedToDrink(){
  var age = document.getElementById("age").value;
  if (age < 18) {
    alert('You are not allowed to drink!');
    return false;
  } else {
    alert('You are allowed to drink');
    return true;
  }
}









