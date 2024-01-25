// const students ={
//     fullname:'ashish kumar',
//     age:20,
//     cgpa:8.0,
//     isPass:true
// };
// students['name']='Rahul Sharma';
// students['age']=students['age']+1;
// console.log(students["age"]);
// console.log(students.name);

// let age=18;
// if(age >= 18){
//     console.log("You can vote");
// }
// else{
//   console.log("You cannot vote");
// }
// let marks = prompt("Enter your score to know the possible grade");
// let garde;
// if (marks >= 80 && marks <= 100) {
//   grade = "A";
// } else if (marks >= 70 && marks <= 79) {
//   grade = "B";
// } else if (marks >= 60 && marks <= 69) {
//   grade = "C";
// } else if (marks >= 50 && marks <= 59) {
//   grade = "D";
// } else {
//   console.log("F");
// }
// console.log(grade);
// let sum=0;
// for(let i=0;i<=5;i++){
//   sum+=i;
// }
// console.log("sum =",sum);
// for(let i=1;i<=5;i++){
//   console.log("i=",i);
// }
// let sum=0;
// let i=1;
// while(i<=5){
//   sum+=i;
//   i++;
// }
// console.log(sum);
// do{
//   console.log("i=",i);
//   i++
// }while(i<=10);
// let str="JavaScript";
// let len=0;
// for(let i of str){
//   console.log("i=",i);
//   len++;
// }
// console.log(len);

// let students = {
//   name:"ashish",
//   age:23,
//   marks:80,
// };
// for(let key in students){
//   console.log("key=",key, "value=",students[key]);
// }
// let count=0;
// for(let i=0;i<=100;i++){
//   if(i%2==0){
//     count++
//   }
// }
// console.log(count)
// let usrNum = prompt("Guess the number: ");
// let gameNumber=25;
// while(usrNum != gameNumber){
// usrNum=  prompt("You have entered the wrong Number: ");
// }
// console.log("Congratulations!!!!");
// let str ="     Apna College        ";
// let str1=str.trim();
// console.log(str1);
// let str="Apna college";
// let str1="JavaScript"
// console.log(str.slice(1,4));
// console.log(str.concat(" ",str1));
// console.log(str.charAt(2));
// console.log(str.replace("JavaScript", "Coding"))
// console.log(str + str1);
// let fullName=prompt("Enter yout full Name");
// let len=fullName.length;
// console.log("@"+fullName+len);
// let array = [56,78,98,23,45];
// array[0]=89;
// console.log(array)
// console.log(array.length);
// let heroes = ["ironman", "thor", "spiderman","shaktiman","panther"];
// for(let i of heroes){
//   console.log(i);
// }
// for(let i=0;i<heroes.length;i++){
//   console.log(heroes[i]);
// }
// for(let i in heroes){
//   console.log(heroes[i]);
// }
// let marks=[85,97,44,37,76,60];
// let len=marks.length;
// let sum=0;
// for(let i=0;i<len;i++){
//  sum+=marks[i];
// }
// let avg=sum/len;
// console.log(`avg marks of the class= ${avg}`);
//let items=[250,645,300,900,50];
// let idx=0;
// for(let val of items){
//   console.log(`value at index ${idx}=${val}`);
//   let offer=val/10;
//   items[idx]=items[idx]-offer;
//   console.log(`value after offfer=${items[idx]}`);
//   idx++;
// }
// let fooditems=['potato','mango','orange','litchi'];
// fooditems.push("chips","burger","tomatoes");
// console.log(fooditems);
// console.log(fooditems.toString());
// let marvel = ["thor", "spiderman","ironman"];
// let dcHeroes = ["superman","batman"];
// let heroes=marvel.concat(dcHeroes);
// console.log(heroes);
// marvel.unshift("antman");
// let val=marvel.shift()
// let arr=[1,2,3,4,5,6,7,8,9]; 
// arr.splice(3,1);
// console.log(arr);
// function myFunction(){
//     console.log("Welcome to apna college");
//     console.log("We are learning JavaScript");
// }
// myFunction();
// function sum(x,y){ 
//local variables --> scope
//     s = x+y;
//    return s;
// }
// let val=sum(34,56);
// console.log(val);
// function sum(a,b){
//     return a+b;
// }

// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }

// const arrowMultiplication=(a,b) => {
//   return a*b;
// }
// function multiplication(a,b){
//     return a*b;
// }

// function countVowels(str){
//     let count=0;
//     for(let char of str){
//         if(char ==="a"|| char==='e'|| char==="i"||char==="o"||char==="u"){
//             count++;
//         }

//     }
//     return count;
// }
// let countsVowels =(str) =>{
//     let count =0;
//     for(let char of str){
//          if (
//            char === "a" ||
//            char === "e" ||
//            char === "i" ||
//            char === "o" ||
//            char === "u"
//          ) {
//            count++;
//          }
//     }
//     return count;
// }
// let arr=[1,2,3,4,5,6];
// arr.forEach(function printVal(val){
//     console.log(val);
// });
// let arr1=[7,8,9,10,11,12,13];
// arr1.forEach((val,idx) =>{
//     console.log(val,idx);
// }); 

// let nums = [1,2,3,4,5,6];

// let calcSquare =(val) =>{
//     console.log(val**2);
// };

// nums.forEach(calcSquare);

// nums.map((val)=>{
//     console.log(val);
//     console.log(val*2);
// })
// let newArr=nums.map((val)=>{
//     return val*2;
// });
// console.log(newArr)
//let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13]
// let evenArr=arr.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenArr);
// const initialValue=0;
// const sum=arr.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
// }
// );
// console.log(sum);
// let marks=[97,89,32,45,97,98,95]
// let newArr=marks.filter((val)=>{
//     return val>90;
// });
// console.log(newArr);
// let num=prompt("Enter a number: ");
// let arr=[];
// for(let i=1;i<=num;i++){
//     arr[i-1]=i;
// }
// console.log(arr);

// let sum=arr.reduce((res, currentValue)=>{
//     return res + currentValue;
// });
// console.log(sum);
//console.log(window.document.body);
// console.dir(document.body.firstChild);
// let div=document.querySelector("div");
// console.log("div");
// let heading=document.querySelector("h2");

// console.dir(heading.innerText);

// heading.innerText = heading.innerText + " from Apna College";
// let divs=document.querySelectorAll('div');
// // divs[0].innerText="DIV 1"
// // divs[1].innerText = "DIV 2";
// // divs[2].innerText = "DIV 3";
// let idx=1;
// for(div of divs){
//     div.innerText=`new Unique value ${idx}`;
//     idx++;
// }
// let newBtn=document.createElement("button");
// newBtn.innerText="Click me!";
// console.log("newBtn");

// let div= document.querySelector('div');
// div.before(newBtn);

// let newButton = document.createElement("button");
// newButton.innerText = "Click Me!";

// newButton.style.color = "white";
// newButton.style.backgroundColor = "red";

// document.querySelector("body").prepend(newButton)

// let para = document.querySelector('p');
// para.classList.add("newClass");
//let btn1 = document.querySelector('button')

// btn1.onclick = (e) =>{
//     console.log(e);
// };

//btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked");
// })

// let modeBtn=document.querySelector('#mode');
// let body=document.querySelector("body");
// let currMode="light";
// modeBtn.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
//     else{
//         currMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currMode);
// });
// const student={
//     fullName : "Ashish",
//     marks : 97,
//     printMarks : function(){
//         console.log("marks",this.marks);
//     },
// };
// let arr=["apple","mango","orange"];
// const employee ={
//     calcTax(){
//         console.log("tax is 10%");
//     },
// };
// const karanArjun={
//     salary:50000,
// };
// karanArjun.__proto__=employee;
// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setbrand(brand){
//         this.brand=brand;
//     }
// }
// let fortuner = new ToyotaCar("fortuner",10);
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus",20);
// console.log(lexus);

// class Person {
//     constructor(){
//         this.species="homo sapiens";
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     constructor(branch){
//         super();//to invoke parent class constructor
//         this.branch=branch;
//     }
//     work(){
//         console.log("solve problem");
//     }
// }
// let engObj = new Engineer("Checmical eng");
// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("website Data");
//     }
// }
// class admin extends User{
//     constructor(name,email){
//         super(name, email);
//     }
//     editData(){
//         console.log("new Data");
//     }
// }
// let admin1 = new admin("aayush","aa@gmail.com")
// let stu1=new User("ashish","s@email.com");
// let stu2 = new User("aman","a@gmail.com");
// let stu3 = new User("akhil","b@gmail.com");
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000); //timeout=>2s=2000ms
// setTimeout(()=>{
//     console.log("hello");
// },4000);
const hello = ()=>{
    console.log("hello");
}
setTimeout(hello,2000);