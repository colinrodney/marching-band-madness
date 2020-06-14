/*$(document).ready(function(){
    $(".header").height($(window.height));
});*/


// set attributes @ all <a> tags
function attributeSetter() {
    let myNodeList = document.querySelectorAll('a');
    //set loop
    for (var i = 0; i < myNodeList.length; i++) {
        myNodeList[i].setAttribute('target', '_blank');
        console.log(myNodeList[i]);
    };
    return myNodeList
};
// result = attributeSetter();


// set text content of band-section buttons
function textContent(){
    let myNodeList = document.querySelectorAll(".btn");
    for(var i = 0; i < myNodeList.length; i++){
        myNodeList[i].textContent = "Learn More"
        console.log(myNodeList[i])
    };
    return myNodeList
};
result = textContent();