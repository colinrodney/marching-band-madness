/*$(document).ready(function(){
    $(".header").height($(window.height));
});*/


// set attributes
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
