

//************* Home Page *******//

//Hover Zoom Logo
$("img.logo").hover(function(){
  $(this).addClass("logoClicked");
}, function(){
  $(this).removeClass("logoClicked");
});

//Hover Zoom IconicWhite
$("img.iconicWhite").hover(function(){
  $(this).addClass("iconicWhiteClicked");
}, function(){
  $(this).removeClass("iconicWhiteClicked");
});


//************* Contact Page *******//

//Hover Zooming the BC_Back
$("img.BC_Back").hover(function(){
  $(this).addClass("BC_Back_Hover");
},function(){
  $(this).removeClass("BC_Back_Hover");
});

//Hover zooming the BC_Front
$("img.BC_Front").hover(function(){
  $(this).addClass("BC_Front_Hover");
}, function(){
  $(this).removeClass("BC_Front_Hover");
});
