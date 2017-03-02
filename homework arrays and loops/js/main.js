// // Arrays Homevork

// // arrays 1
// var fruits = ['lemon','strawbery','orange', 'banana','apple'];
// console.log(fruits);
// // arrays 2
// fruits.unshift('blackberry','blueberry');
// console.log(fruits);	
// // arrays 3
// fruits.pop();
// console.log(fruits);
// // arrays 4
// fruits.push('kiwi','peach');
// console.log(fruits);
// // arrays 5
// fruits.splice(2,2,"anotherfruit","anotherfruit2");
// console.log(fruits);
// // arrays 6
// for(var i=0; i < fruits.length; i++){
// 	console.log(fruits[i]);
// }

// Loops Homework

    // loops 1

function chechIfNum() {
   var a = parseInt(prompt("Please enter number"));
   if(isNaN(a)) {
    chechIfNum();
   } else {
    return a;
   }

}
var niz = [],
	nizMin = Infinity; 
	for(var i=0; i < 5; i++){
    	 var a = chechIfNum(); 
         niz[i] = a;

    	 if(niz[i] < nizMin) {
    	 	nizMin = niz[i];
    	 }
         
         
    }
 console.log(niz);
 console.log(nizMin);



    // loops 2

var number = 1,
    zeroes = 11;
for(i=0; i<zeroes;i++ ){
    number = number + "0";
    console.log(number);
    var el = document.createElement('p');
    el.innerHTML= number;
    document.body.appendChild(el);
}

    	// factorial 
   
   function factorial(){
        var N = chechIfNum();
            // var M = N;
            for(i=(N-1); i>0; i--){
               N *= i;
            }
         
             var el2 = document.createElement('p');
             el2.innerHTML = N;
             document.body.appendChild(el2);
        }

    	



