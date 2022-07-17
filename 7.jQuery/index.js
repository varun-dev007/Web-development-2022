$("h1").css("color","red");//THIS IS A SHORTCUT INSTEAD OF WRITING DOCUMENT.QUERYsELECTOR
//
//
// for safety purpose
// to check whether jQuery is linked
// we can type

// $(document).ready(function{
//   $("h1").css("color","red");
// })

$("h1").on("click",function()
{
$("body").css("background-color","red");
})


$("body").keyup(function(event)
{
  $("h1").text(event.key);
})


$("h1").mouseover(function()
{
  $("h1").css("color","purple");
})


$("h1").before("Bloody......!");
