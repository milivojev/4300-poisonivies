var ime = "Jane";
var age = 19;

//oba moraju da budu tacna
// if(age > 18 && age < 65) {
//  console.log('moze da pije');
// }


//ili - jedan samo mora da bude tacan

// var permission = false; 

// if(age > 18 || permission ) {
//   console.log('moze da pije');
// }

//&& ||

/*
if(ime == "John") {
  console.log('jeste, ime je John');
} else {
  console.log('neko drugo ime je');
}

if(age <= 18) {
  console.log('ti si maloletan');
} else if(age > 18 && age < 65) {
 console.log('ti si punoletan'); 
} else  {
  console.log('ti si penzioner'); 
}

var dan = "Monday"; 

if (dan == "Ponedeljak") {
  console.log('huh, poce nedelja');  
} else if (dan == "Utorak") {
  console.log('huh nije ponedeljak, ali petak je daleko'); 
} else if (dan == "Sreda") {
  //do something
} else {
  console.log('nisam cuo za taj dan'); 
}
*/
/*
var day = "Wednesday";

switch(day) {
  case "Monday":
    console.log('it is monday');
  break;
    
  case "Tuesday":
    console.log('it is tuesday');
  break;
    
  default:   
    console.log('it is some other day');
  break;
    
}
*/
/*
if (age < 20) {
  console.log('it is less than 20');
} else if (age < 30) {
  console.log('it is less than 30');
}*/

var answer = confirm("do you want to change the color of background?");

if(answer) {
  document.getElementById("all").style.backgroundColor = "green";

} else {
  alert('no color is changed');
  
}

var driving, gasoline = 1;

if (gasoline > 0.5) {
  driving = true;
} else {
   driving = false ;
}

// ternary 
driving = (gasoline > 0.5) ? true :  false;

age = ("john" == name) ? 34 : 29; //yoda condition




//console.log('dva');
//console.log('tri');
