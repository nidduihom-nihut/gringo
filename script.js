var option1= document.querySelector("#option1");
var option2=document.querySelector("#option2");
var option3=document.querySelector("#option3");
var add=document.querySelector("#add");
var body=document.body

var btn=document.querySelector("#btn");



var optionArray = [];


btn.addEventListener('click', function(){
    optionArray.push(option1.value);
    optionArray.push(option2.value);
    optionArray.push(option3.value);
    const result = Math.floor(Math.random()*optionArray.length);
    // console.log(result, optionArray[result]);
    var final=document.querySelector("#final").innerHTML = "You should: " +(result, optionArray[result]);
})






