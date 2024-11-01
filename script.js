var signup = document.querySelector("#sign-up");
var part = document.querySelector("#part1");
var btn = document.querySelector("#btn button");
var cross= document.querySelector("nav #close");
var sell = document.querySelector("#btn #sell");
var part2 = document.querySelector("#part2");
var selled = document.querySelector("  .box2 #sell2");
var part3 = document.querySelector("#part3");
var footer = document.querySelector("#footer")

btn.addEventListener("click", function(){
    signup.style.display = "block";
    part.style.display = "none";
    part2.style.display = "none";
    part3.style.display = "none";
     footer.style.opacity = "0"
    console.log("hello")
})

cross.addEventListener("click", function(){
    signup.style.display = "none";
    part.style.display = "block";
    part2.style.display = "block";
     part3.style.display = "block";
     footer.style.opacity= "1"
    console.log('closed')
})

sell.addEventListener("click", function(){
    signup.style.display = "block";
    part2.style.display = "none";
    part.style.display = "none";
    part3.style.display = "none";
     footer.style.opacity = "0"
    console.log("hello")
})

selled.addEventListener("click", function(){
    signup.style.display = "block";
    part.style.display = "none";
    part2.style.display = "none";
    part3.style.display = "none";
    footer.style.opacity= "0"
})


// animation 

var tl = timeline();

gsap.from(" #sign-up nav",{
       opacity: 0,
        duration: 2,
        y:20,
        delay: 1,
        
       })