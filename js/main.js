
var pages = document.querySelectorAll("div[id$='page']");
var allPagesID = [];
for(var i=0;i<pages.length;i++){
    allPagesID.push("#" + pages[i].id);
}
var navLinks = document.querySelectorAll("a[id$='nav-link'");

var navLinksID = [];
for(var i =0;i<navLinks.length;i++){
    navLinksID.push("#" + navLinks[i].id);
}

goToPage("#home-page");
$("#home-page-nav-link").addClass("selected");

$(".home-page-link").click(function(){
    goToPage("#home-page");
    $("#home-page-nav-link").addClass("selected");
})

$(".webapp-page-link").click(function(){
    goToPage("#webapp-page");
    $("#webapp-page-nav-link").addClass("selected");
})

$(".email-button").click(function(){
    $(this).text("eucheng.c@gmail.com");
})

//close navbar when clicked
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

function goToPage(page){
    //hidePages
    for(var i =0;i<allPagesID.length;i++){
        var hidePage = document.querySelector(allPagesID[i]);
        hidePage.style.display = "none";
    }
    for(var i=0;i<navLinksID.length;i++){
        $(navLinksID[i]).removeClass("selected");
    }
    //show Page
    var showPage = document.querySelector(page);
    showPage.style.display = "block";
}

//https://css-tricks.com/snippets/css/typewriter-effect/
document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "I'm a Software Developer.", "I build pretty functional websites.", "copy pasting code is my job.", "I'm a Google search expert.","I'm the tech guy.", "I'm a Software Developer."];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h5").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 50);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 1000);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 10000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });