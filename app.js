/// chapter no 21 to 25///

/// Task no 01 /// 
// var a = prompt("Enter First Name ")
// var b = prompt("Enter Last Name")
// var c = a + b 
// alert(c + " " +  "As Salam Walaikum")

// /// Task no 02 ///
// var text = prompt("Enter Your Favorite Mobile with Model");
// var b = text.length;
// document.write("My favorite phone is:" + text + "<br>" + "Length of string" + " " + b ) 

// // /// Task no 03 ///
// var text = "Pakistani"
// var indexnum =  text.indexOf("n")
// document.write( text, "<br>" , "Index Of n :", indexnum )

// // /// Task no 04 ///
// var text = "Hello World"
// var indexnum =  text.lastIndexOf("l")
// document.write( text, "<br>" , "Last Index Of n :", indexnum )


// /// Task no 05 ///
// var a ="Pakistani"
// document.write("Character at Index  3:" + a.charAt(3)) 


// /// Task no 06 ///
/// same Question01

// /// Task no 07 ///
////task no 7 method 01
// var city = ["Hyderabad"]
// city.splice(0,1, "Islamabd")
// var a = "City = Hyderabad"
// var b = "After replacing"
// var c = city
// document.write(a, "<br>", b , " ", city)

////task no 7 method 02
// var city = "Hyderabad"
// var city1 = city.replace("Hyderabad","Islamabad")
// document.write(city, "<br>", city1)


// // /// Task no 08 ///
// var para =  "“Ali and Sami are best friends. They play cricket and football together.”" 
// var para2 = para.replace(/and/g,"&")
// document.write(para2)


/// Task no 09 ///
// var numberAsNumber = 472;
// var numberAsString = numberAsNumber.toString();
//   document.write("Value: 472" , "<br>", "Type  string:",  numberAsString ,"<br>")
  
// var floatingNumString = "472";
//  var num = Number(floatingNumString);
// document.write("Value: 472" , "<br>", "Type num:", num)


// /// Task no 10 ///
// var a = prompt("Write peanuts")
// var b = a.toUpperCase();
// document.write(b)

// /// Task no 11 ///
// var text = prompt("write javascript");
// var first = text.slice(0,1);
// var two = text.slice(1);
// first= first.toLocaleUpperCase();
// two = two.toLowerCase();
// var text = first + two;
// document.write(text)

// /// Task no 12 ///
// var num = 35
// var string = "36"
// var result = num + string
// document.write(result)


// // /// Task no 13 ///
// var a = prompt("Enter Username")
// if(a === 33){
//     alert("Please enter a valid username")
// }

// var a = a
// alert(a.charCode())



// // /// Task no 14 ///

// var item = ["cake", "apple pie", "cookie", "chips", "patties" ]
// var search = prompt("Welcome To GaBA Bakery","Enter Item" )
// if(item.indexOf(search) !== -1){
//     alert("Yes" + " " + search + " " +  "is available in our bakery")
// }else{
//     alert("We  are  sorry" + " " + search + " " + "is not  availabe in our bakery")
// }

// // /// Task no 15 ///
// var a = prompt("enter Password")
// if(a === 123456){
//     alert("password can not begin with a number")
// }
// else{
//     alert("Please enter a valid password")
// }

// // // /// Task no 16 ///
// // var text = "University of Karachi"
//  String[]=text.split(" ")


// // // /// Task no 17 ///

// var a = prompt("Write Pakistani")
// var b = a.indexOf("n");
// document.write(b)


// // // /// Task no 18 ///
// var a = "“The quick brown fox jumps over the lazy dog”"
// var b = a.indexOf("the")
// document.write(b)

// var text = "“The quick brown fox jumps over the lazy dog”"
// for (var i = 0; i < text.length; i++) {
//  if(text.slice(i, i + 12) === "The") {
//       text = text.slice(0, i) + "THE" + text.slice(i + 12);
//  }
// }


/// chapter no 21 to 26///
// // // /// Task no 01 ///

// var num =3.45214
// var round = Math.round(num)
// var floor = Math.floor(num)
// var ceil = Math.ceil(num)
// document.write("num:3.45214" + "<br>"+ "round off value:" +  round + "<br>") 
// document.write("floor  value:" +  floor + "<br>") 
// document.write("ceil  value:" +  ceil)


// // // /// Task no 02 ///
// var num = prompt("Enter negative sign with num")
// var round = Math.round(num)
// var floor = Math.floor(num)
// var ceil = Math.ceil(num)
// document.write("num" + num + "<br>"+ "round off value:" +  round + "<br>") 
// document.write("floor  value:" +  floor + "<br>") 
// document.write("ceil  value:" +  ceil)



// // // /// Task no 03 ///
// var num = 10.5
// var ceil = Math.ceil(num)
// document.write( ceil + "<br>"  ) 
// var num = 4.9
// var ceil = Math.ceil(num)
// document.write( ceil ) 


 // // // // /// Task no 04 ///
// var a = Math.random() * 2
// var count = Math.floor(a)
// if(count === 0){
//     document.write(4)
// }
// else{
//     document.write(6)
// }


// // // // /// Task no 05 ///
// var b = Math.random() * 2
// var c = Math.ceil(b);
// if(c === 2){
//     document.write(c + " " + "random  coin  value  Head")
// }else{
//     document.write(c + " " + "random  coin  value Tail")
// }


// // // // /// Task no 06 ///
// var a = Math.random() * 100
// var b = a.toFixed()
// document.write("random number between 1 and 100:" + b)


// // // // /// Task no 07 ///
// var weight =  prompt("Enter you weight in kilogram")
// if(weight === "50"){
//     document.write("The weight of user is 58.3")
// }
// else if(weight === "50kgs"){
//     document.write("The weight of user is 58.3")
// }
// else if(weight === "50.2kgs"){
//     document.write("The weight of user is 58.3")
// }
// else if(weight === "50.2kilograms"){
//     document.write("The weight of user is 58.3")
// }


// // // // /// Task no 08 ///
// var num = prompt("Enter a number between 1 to 10")
// if(num == 4){
//     document.write("<h1>  Congratulate  </h1>" )
// }else{
//     document.write(" <h1>  Try gain! </h1>")
// }



/// chapter no 31 to 34///

// // // // /// Task no 01 ///
// var a = new Date()
// document.write(a)


// // // // /// Task no 02 ///
// var a = new Date()
// var b = a.toString();
// var c = b.slice(3,7) 
// document.write("Current month :" + c)


// // // // /// Task no 03 ///
// var a = new Date()
// var b = a.toString();
// var c = b.slice(0,3) 
// document.write("Today is :" + c)


// // // // /// Task no 04 ///
///// 01 method
// var a = prompt("Enter today")
// if(a === "saturday" || a === "sunday"){
//     alert("“It’s Fun day” if")
// }
// else{
//     alert(a)
// }

// // // // /// Task no 04 ///
///// 02 method
// var a = ["Sun","Mon", "Tue" , "Wed", "Thu", "Fri", "Sat"]
// var b = new Date();
// var c= b.getDay();
// var d= a[c];
// if(d === "saturday" || d === "sunday"){
//   document.write("“It’s Fun day” if")
// }
//  else{
//     document.write(a)
// }


// // // // /// Task no 05 ///

