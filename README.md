# blizard.js
the brand new javascript library.
# This library is not fully finished and you are welcome to help with it
# tutorial
the code below is the link to the blizard.js library
        `<script src="http://blizardjs.ueuo.com/blizard.js"></script>`
–––––
        with sl.print the first parameter is the id of the element you want to change the second is the text you want to change it to
`sl.print("p", "hi")`
with sl.hide the parameter is the id of the element you want to hide
`sl.hide("p1");`
  with sl.show the parameter is the id of the element you want to show
  `sl.show("p1");`
 with sl.col the first parameter is the id of the element you want to change the color of, the second parameter is the color you want to change it to
` sl.col("p1", "red");`
 with sl.family the first parameter is the id of the element you want to change the font-family of, the second parameter is the font family you want to change it to
` sl.family("p1", "Impact,Charcoal,sans-serif");`
 with sl.size the first parameter is the id of the element you want to change the size of, the second parameter is the size you want to change it to these are the sizes you can use

. xx-small
. x-small
. small
. medium
. large
. x-large
. xx-large
. smaller	
. larger

` sl.size("p1", "medium");`
 
with sl.wait the first parameter is where you call the function you want to run, the second parameter is the amount of milliseconds you want towait to call that function
 `sl.wait("f1()", "1000");
 function f1() {
    alert('i love blizard.js');
 }`
  with sl.setlocalstorage the first parameter is the name of your localstorge item so that you can refer to it later, the second parameter is the value of your item.
`sl.setlocalstorage("name", "smith");`
 with sl.printlocalstorage the second parameter is the name of the localstorge item you want to print the value of, the first parameter is the id of the element you want to print the item's value to.
`sl.printlocalstorage("p1", "name")`
With sl.click the first parameter is the id of the element you would like to add an onclick event to, the second parameter is the function you want to run when that element is clicked.
` sl.click("p", "click()");`
With sl.id the first parameter is the id of the element you want to change the id of, the second parameter is the new id you would like to give that element, this can be used to change styles over time without using javascript.
with sl.createElement() the first parameteris the element you want to create like P be sure to wright it in capital letters and the second parameter is the element you want to append it to the third parameter is the id you would like to give that element
` sl.createElement("P", "HEAD", "id")`
With sl.changeBackgroundColor() the first parameter is the elememt you wish to change the background color of. The second parameter is the 
color you would like to give that element such as "blue" or "red".
# please report any issues you have with the tutorial or just with the library at all and the blizard.js team(me) will fix it to make your experiense with blizard.js better.
