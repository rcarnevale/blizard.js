


   //blizard.js version 0.4 BETA by Rohan Samra-O'Neill
/* 
uses the atomo.css library created by Rohan Samra-O'Neill
*/
"use strict";
//inspired by jquery and p5.js :), thanks to p5.js and the processing team for featuring blizard.js on there site
var sl = {};
var id;
var storage;
//just a little message to anyone who goes onto a website that uses blizard.js
console.info("This project uses blizard.js for more info go to https://github.com/Slitherlizard/blizard.js");
//with sl.ready the parameter is the function that will run when the page is loaded, i needed to add this in version 0.4 because it's a DOM library and functions wheren't working because the elements couldn't be found because they werent loaded yet
sl.ready = function(sel) {
   window.onload = function() {
      // basically just runs whatever function that the selector is equal to
      window.setTimeout(sel, 0);
   }
      
   
}
//with sl.print the first parameter is the id of the element you want to change the second is the text you want to change it to
sl.print = function (sel, txt) {
   
    
   document.getElementById(sel).innerHTML = txt;
    
};
//with sl.hide the parameter is the id of the element you want to hide
sl.hide = function (sel) {
     id = document.getElementById(sel);
     id.style.display = "none";
  };
  //with sl.show the parameter is the id of the element you want to show
  sl.show = function (sel) {
    id = document.getElementById(sel);
    id.style.display = "block";
 };
 //with sl.col the first parameter is the id of the element you want to change the color of, the second parameter is the color you want to change it to
 sl.col = function(sel, col) {
    document.getElementById(sel).style.color = col;
 } 
 //with sl.family the first parameter is the id of the element you want to change the font-family of, the second parameter is the font family you want to change it to
 sl.family = function(sel, sel2) {
    document.getElementById(sel).style.fontFamily = sel2;
 }
 //with sl.size the first parameter is the id of the element you want to change the size of, the second parameter is the size you want to change it to these are the sizes you can use
/*
xx-small
x-small
small
medium
large
x-large
xx-large
smaller	
larger
*/

sl.size = function(sel, sel2) {
   document.getElementById(sel).style.fontSize = sel2;
}
//with sl.wait the first parameter is where you call the function you want to run, the second parameter is the amount of milliseconds you want towait to call that function
sl.wait = function(sel, sel2) {
    window.setTimeout(sel, sel2);
    
}

// with sl.setlocalstorage the first parameter is the name of your localstorge item so that you can refer to it later, the second parameter is the value of your item.
sl.setlocalstorage = function(sel, sel2) {
   localStorage.setItem(sel, sel2);
}
// with sl.printlocalstorage the first parameter is the name of the localstorge item you want to print the value of, the second parameter is the id of the element you want to print the item's value to.

sl.printlocalstorage = function(sel, sel2) {
 
   
     
   
   document.getElementById(sel).innerHTML = localStorage.getItem(sel2);
   
}
// with sl.click the first parameter is the id of the element you want to add an onclick attribute to, the second parameter is the function that will be ran when that element gets clicked
sl.click = function(sel, sel2) {
document.getElementById(sel).onclick = function() { window.setTimeout(sel2, 0); };
}
// with sl.id the first parameter is the id of the element you want to change the id of, the second parameter is the new id of that element
sl.id = function(sel, sel1) {
   document.getElementById(sel).id = sel1;
}
//from line 92 - 124 i think i liked inporting other librarys too much
//just loads the atomo.css library for styles
sl.atomo = function () {
   var head = document.getElementsByTagName('HEAD')[0];  
  
   // Create new link Element 
   var link = document.createElement('link'); 

   // set the attributes for link element  
   link.rel = 'stylesheet';  
 
   link.type = 'text/css'; 
 //load atomo.css library
   link.href = "http://atomo.ueuo.com/atomo.css";  

   // Append link element to HTML head 
   head.appendChild(link);  
}
//sl.import does not work yet :(
sl.import = function(sel) {
   var head = document.getElementsByTagName('HEAD')[0];  
  
   // Create new link Element 
   var link = document.createElement('link'); 

   // set the attributes for link element  
   link.rel = 'stylesheet';  
 
   link.type = 'text/css'; 
 
   link.href = sel;  

   // Append link element to HTML head 
   head.appendChild(link);  
} 

//I have wanted to add this since version 0.0.1 but didn't know how but now i do know how so i'll add it.

//with sl.createElement() the first parameteris the element you want to create like P be sure to wright it in capital letters and the second parameter is the element you want to append it to the third parameter is the id you would like to give that element
sl.createElement = function (sel, sel1, sel2) {
   var father = document.getElementsByTagName(sel1)[0];  
  
   // Create new Element 
   var elem = document.createElement(sel); 
//give the element an id
   elem.id = sel2;
 
    

   // Append link element to HTML head 
   father.appendChild(elem);  
}
sl.changeBackgroundColor = function(sel, sel1) {
   document.getElementById(sel).style.backgroundColor = sel1;
}
