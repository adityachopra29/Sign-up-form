//the regex
const namePattern =/^[A-Za-z]*$/
const emailPattern = /^[A-Za-z0-9]+@[a-z]{2,5}.(in|com)$/
const agePattern = /^[1-9]$|^[1-9][0-9]$|^(100)$/;
const cityPattern = /^[A-Za-z]+$/
const phonePattern = /^((0)|(\+91))|(([5-9]{1})([0-9]{9}))$/
const passwordPattern = /.{8,}/;

function changeDisplay(id){
  let x = document.getElementById(id);
  x.style.display = "block";
}

document.getElementById("submitButton").addEventListener("click" , function () {

  //the declarations
  let age = document.getElementById("Age").value;
let gender = document.getElementById("gender").value;
let email = document.getElementById("Email").value;
let first_name = document.getElementById("first-name").value;
let last_name = document.getElementById("last-name").value;
let password = document.getElementById("password").value;
let confirm_password = document.getElementById("confirm_password").value;
let city = document.getElementById("city").value;
let edu_qual = document.getElementById("Educational_Qualification").value;

if(edu_qual == "Select") {
  changeDisplay("no-edu_qual");
}

if(gender == "Select") {
  changeDisplay("no-gender");
}

  if(age == "") {
    changeDisplay("no-age");
}else if(!agePattern.test(age)){
  changeDisplay("wrong-age")
}

  if(email == "") {
    changeDisplay("no-email");
}else if(!emailPattern.test(email)){
  changeDisplay("wrong-email")
}

if(first_name == "") {
  changeDisplay("no-first-name");
}else if(!namePattern.test(first_name)){
changeDisplay("wrong-first-name");
}

if(last_name == "") {
  changeDisplay("no-last-name");
}else if(!namePattern.test(last_name)){
changeDisplay("wrong-last-name");
}

if(password == "") {
  changeDisplay("no-password");
}else if(!passwordPattern.test(password)){
changeDisplay("wrong-password")
}

if(confirm_password == null){
  changeDisplay("no-confirm-password")
}else if (confirm_password != password){
  changeDisplay("wrong-confirm-password");
}

console.log(city == null);
if(city == ""){
  changeDisplay("no-city");
}else if(!cities.test(city)){
  changeDisplay("wrong-cities");
}

setTimeout(function(){ window. location. reload(); }, 2000); //why did i have to wrap the setTimeout in a function? not working without it

})


