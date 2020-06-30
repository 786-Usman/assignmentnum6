/// chapter no 21 to 25///

/// chapter no 21 to 25 Task no 01 /// 
// var a = prompt("Enter First Name " + "<br>")
// var b = prompt("Enter Last Name")
// var c = a + b 
// alert(c + " " +  "Well Come")

// /// chapter no 21 to 25 Task no 02 ///
// var text = prompt("Enter Your Favorite Mobile with Model");
// var b = text.length;
// document.write("My favorite phone is:" + text + "<br>" + "Length of string" + " " + b ) 

// // /// chapter no 21 to 25 Task no 03 ///
// var text = "Pakistani"
// var indexnum =  text.indexOf("n")
// document.write( text, "<br>" , "Index Of n :", indexnum )

// // /// chapter no 21 to 25 Task no 04 ///
// var text = "Hello World"
// var indexnum =  text.lastIndexOf("l")
// document.write( text, "<br>" , "Last Index Of n :", indexnum )


// /// chapter no 21 to 25 Task no 05 ///
// var a ="Pakistani"
// document.write("Character at Index  3:" + a.charAt(3)) 


// /// chapter no 21 to 25 Task no 06 ///
/// same Question01

// /// chapter no 21 to 25 Task no 07 ///
////task no 7 method 01
// var city = ["Hyderabad"]
// city.splice(0,1, "Islamabd")
// var a = "City = Hyderabad"
// var b = "After replacing"
// var c = city
// document.write(a, "<br>", b , " ", city)

//// chapter no 21 to 25 task no 7 method 02
// var city = "Hyderabad"
// var city1 = city.replace("Hyderabad","Islamabad")
// document.write(city, "<br>", city1)


// // /// chapter no 21 to 25 Task no 08 ///
// var para =  "“Ali and Sami are best friends. They play cricket and football together.”" 
// var para2 = para.replace(/and/g,"&")
// document.write(para2)


/// chapter no 21 to 25 Task no 09 ///
// var numberAsNumber = 472;
// var numberAsString = numberAsNumber.toString();
//   document.write("Value: 472" , "<br>", "Type  string:",  numberAsString ,"<br>")
  
// var floatingNumString = "472";
//  var num = Number(floatingNumString);
// document.write("Value: 472" , "<br>", "Type num:", num)


// /// chapter no 21 to 25 Task no 10 ///
// var a = prompt("Write peanuts")
// var b = a.toUpperCase();
// document.write(b)

// /// chapter no 21 to 25 Task no 11 ///
// var text = prompt("write javascript");
// var first = text.slice(0,1);
// var two = text.slice(1);
// first= first.toLocaleUpperCase();
// two = two.toLowerCase();
// var text = first + two;
// document.write(text)

// /// chapter no 21 to 25 Task no 12 ///
// var num = 35
// var string = "36"
// var result = num + string
// document.write(result)


// // /// chapter no 21 to 25 Task no 13 ///
// var a = prompt("Enter Username")
// if(a === 33){
//     alert("Please enter a valid username")
// }

// var a = a
// alert(a.charCode())



// // /// chapter no 26 to 25 Task no 14 ///

// var item = ["cake", "apple pie", "cookie", "chips", "patties" ]
// var search = prompt("Welcome To GaBA Bakery","Enter Item" )
// if(item.indexOf(search) !== -1){
//     alert("Yes" + " " + search + " " +  "is available in our bakery")
// }else{
//     alert("We  are  sorry" + " " + search + " " + "is not  availabe in our bakery")
// }

// // /// chapter no 21 to 25 Task no 15 ///
// var a = prompt("enter Password")
// if(a === 123456){
//     alert("password can not begin with a number")
// }
// else{
//     alert("Please enter a valid password")
// }

// // // /// chapter no 21 to 25 Task no 16 ///
// // var text = "University of Karachi"
//  String[]=text.split(" ")


// // // /// chapter no 21 to 25 Task no 17 ///

// var a = prompt("Write Pakistani")
// var b = a.indexOf("n");
// document.write(b)


// // // ///  chapter no 21 to 25 Task no 18 ///
// var a = "“The quick brown fox jumps over the lazy dog”"
// var b = a.indexOf("the")
// document.write(b)

// var text = "“The quick brown fox jumps over the lazy dog”"
// for (var i = 0; i < text.length; i++) {
//  if(text.slice(i, i + 12) === "The") {
//       text = text.slice(0, i) + "THE" + text.slice(i + 12);
//  }
// }


/// chapter no 26 to 30 ///
// // // ///  chapter no 26 to 30 Task no 01 ///

// var num =3.45214
// var round = Math.round(num)
// var floor = Math.floor(num)
// var ceil = Math.ceil(num)
// document.write("num:3.45214" + "<br>"+ "round off value:" +  round + "<br>") 
// document.write("floor  value:" +  floor + "<br>") 
// document.write("ceil  value:" +  ceil)


// // // /// chapter no 26 to 30 Task no 02 ///
// var num = prompt("Enter negative sign with num")
// var round = Math.round(num)
// var floor = Math.floor(num)
// var ceil = Math.ceil(num)
// document.write("num" + num + "<br>"+ "round off value:" +  round + "<br>") 
// document.write("floor  value:" +  floor + "<br>") 
// document.write("ceil  value:" +  ceil)



// // // /// chapter no 26 to 30 Task no 03 ///
// var num = 10.5
// var ceil = Math.ceil(num)
// document.write( ceil + "<br>"  ) 
// var num = 4.9
// var ceil = Math.ceil(num)
// document.write( ceil ) 


 // // // // chapter no 26 to 30 Task no 04 ///
// var a = Math.random() * 2
// var count = Math.floor(a)
// if(count === 0){
//     document.write(4)
// }
// else{
//     document.write(6)
// }


// // // // chapter no 26 to 30  Task no 05 ///
// var b = Math.random() * 2
// var c = Math.ceil(b);
// if(c === 2){
//     document.write(c + " " + "random  coin  value  Head")
// }else{
//     document.write(c + " " + "random  coin  value Tail")
// }


// // // // chapter no 26 to 30 Task no 06 ///
// var a = Math.random() * 100
// var b = a.toFixed()
// document.write("random number between 1 and 100:" + b)


// // // // chapter no 26 to 30 Task no 07 ///
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


// // // // chapter no 26 to 30  Task no 08 ///
// var num = prompt("Enter a number between 1 to 10")
// if(num == 4){
//     document.write("<h1>  Congratulate  </h1>" )
// }else{
//     document.write(" <h1>  Try gain! </h1>")
// }



/// chapter no 31 to 34///

// // // // chapter no 31 to 34  Task no 01 ///
// var a = new Date()
// document.write(a)


// // // // chapter no 31 to 34 Task no 02 ///
// var a = new Date()
// var b = a.toString();
// var c = b.slice(3,7) 
// document.write("Current month :" + c)


// // // // chapter no 31 to 34  Task no 03 ///
// var a = new Date()
// var b = a.toString();
// var c = b.slice(0,3) 
// document.write("Today is :" + c)


// // // // chapter no 31 to 34 Task no 04 ///
///// 01 method

// var dayOfWk = new Date

// switch (dayOfWk){
// case "Sat" :
//   alert("“It’s Fun day” if");
//     break;
//  case "Sun" :
//     alert("“It’s Fun day” if");
//  break;
//      default :
// alert(dayOfWk);
// }


// // // // chapter no 31 to 34  Task no 04 ///
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


// // // // chapter no 31 to 34  Task no 05 ///
// var b = new Date();
// var a = getDay();
// document.write(a)



// // // // chapter no 31 to 34  Task no 06 ///
//  var today = new Date()
//  var todayMili = today.getTime()
//  var Minute = today * 60
//  document.write("Curent Date:" + " " + today + "<br>" + "Milisecond:" + " " +  todayMili + "<br>" +  "Minutes:" + " " + Minute)
 


// // // // chapter no 31 to 34 Task no 07 ///
// var a = new Date()
//  var b = a.toString()
//  var c = b.slice(15.20)
//  if(c === "00:01:01"){
//      alert("am")
//  }else{
//      alert("PM")
//  }

// // // // chapter no 31 to 34 Task no 08 ///
// var a = new Date("Dec 31, 2020")
// document.write("Later Date:" + a)


// // // // chapter no 31 to 34 Task no 09 ///
// var wasram = new Date("June 18, 2015")
// var x = wasram.getDay() 
// var a = new Date()
// var b = a.getDay()
// var c = b - x 
// document.write(c)


// // // // chapter no 31 to 34 Task no 10 ///
// var a = new Date("Dec 05 , 2015")
// var b = a.getTime()
// var c = new Date ("Jan 01 , 2015")
// var d = c.getTime();
// var e = b - d;
// var sec = e/ (1000) 
// document.write("On reference date" +  a + "<br>" + sec + " "+ "second had passed since" + c) 


// // // // chapter no 31 to 34 Task no 11 ///
// var a = new Date()
// document.write(a);
// var b = new Date()
// b.setHours(11)
// document.write("<br>"+b);

// // // // chapter no 31 to 34 Task no 12 ///
// var d= new Date()
// var c = new Date("Jun 28 , 1920")
// document.write("TODAY : " + d + "<br>" + "BEFORE 100 YEARS: " + c )




// var d = Date.parse("March 21, 2012");
// var minutes = 1000 * 60;
// var hours = minutes * 60;
// var days = hours * 24;
// var years = days * 365;
// var y = Math.round(d / years);





// // // chapter no 31 to 34 Task no 13 ///

// ///   Task no 13  Method 01
// var a = prompt("Enter age")
// var b = new Date();
// var c= b.getFullYear()-a;
// document.write("Your age is  "+ a +"<br>" + "Your birth year is "+ c)

// ///   Task no 13  Method 02
// var dob = new Date (prompt("Enter Date of birth"))
// var dobMili= dob.getTime()
// var today = new Date();
// var todayMili = today.getTime()
// var diff = todayMili - dobMili
// var diffYear = diff/ (1000 *60*60*24*30*12)
// var accAge = Math.floor(diffYear)
// var year = dob.getFullYear()
// document.write("You age is" + accAge + "<br>" + "Your birth year is" + year)



// // // chapter no 31 to 34 Task no 14 ///

// var Month = prompt("Enter Month")
// var unit= 410
// var p=16
// var n = unit*p;
// var l=350;
// var late=n+l;
// document.write("Customer Name: ABC customer"+"<br>"+"Month: "+Month+"<br>"+"No. of Units: "
// +unit+"<br>"+"No. of charges per unit: "+p+"<br>"+"<br>"+"<br>"+"Net Amount Payable (within Due Date): "+n
// +"<br>"+"Late Payment Surcharge: "+l+"<br>"+"Gross Amount Payable (after Due Date): "+ late); 



// // // chapter no 35 to 38 Task no 1 ///
// var a = new Date()
// document.write(a)

// // // chapter no 35 to 38 Task no 2 ///
// function greet(){
//     var a=window.prompt("Enter your first name: ")
//     var b= window.prompt("Enter your last name: ")
//     var c = a.toUpperCase()
//     var d= b.toUpperCase()
//     document.write("Your Name is: " +c+d)
// }
// greet();

// // // chapter no 35 to 38 Task no 3 ///
// function addNum(){
//     var a = + prompt("Enter Number")
//     var b = + prompt("Enter Number")
//     var c = a+b
//     document.write("sum of your number" + c)
// }
// addNum();


// // // chapter no 35 to 38 Task no 4 ///
// function clac(num1,opr,num2){
//            if(opr === "+" ) {
//                return num1 + num2
//            }
//           else if(opr === "-"){
//             return num1 - num2
//         }
//         else if(opr === "*"){
//             return num1 * num2
//         }
//         else if(opr === "/"){
//             return num1 / num2
//         }else{
//           return("Incorrect opr!")
//         }
//        }
//     var result = clac(8, "-", 2)
//     document.write(result)



// // // chapter no 35 to 38 Task no 5 ///
// function squares(a){
    
//     document.write(a*a);

// }
// squares(9);

// // // chapter no 35 to 38 Task no 6 ///
// function factorial(a,b,c,d){
//     document.write(a*b*c*d  + "!")
// }
// factorial(4,3,2,1,)

// // // chapter no 35 to 38 Task no 7 ///
// function Count(a,b){
//     var a = prompt("Enter starting number")
//     var b = prompt("Enter end number")
//     for(var a = 1; a <= b; a++){
//         document.write(a)
// }
// }

// Count();


// // // // chapter no 35 to 38 Task no 9 ///
/////// part 1
// function rectangle(w,l){
// document.write(w*l)

// }
// rectangle(2,5)

/////// part 2
// function rectangle(w,l){
// document.write(15*2)

// }
// rectangle()



