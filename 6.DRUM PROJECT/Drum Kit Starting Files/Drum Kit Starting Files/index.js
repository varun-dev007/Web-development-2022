// alert("Hello World");

// an eventListener is something which calls a function when some event is delivered to an object
//METHOD 1
// var i=0;
// while(true)
// {
//   document.querySelectorAll("button")[i].addEventListener("click",handClicked);
//   i++;
//   if(i==7)break;
// }
//
// // herewe are not calling a function, bit instead sending the name of the function which has to be called when clicked
// function handClicked()
// {
//   var audio=new Audio("sounds/crash.mp3");
//   audio.play();
// }

var length = document.querySelectorAll(".drum").length;

//FOR CLICK EVENT
for (var i = 0; i < 7; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var select = this.innerHTML;
    makeSound(select);

    blink(select);
  })
}

//KEYPRESS EVENT
document.addEventListener("keypress", function(event) {
  //event - is a callBack function ths it waits till something has occured
  var c = event.key;
  makeSound(c);

  blink(c);
})

//SOUNDING FUNCION
function makeSound(value) {
  switch (value) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      var audio = new Audio("sounds/kick-bass.mp3");
  }
}


function blink(c)
{
  var select=document.querySelector("."+c);
  select.classList.add("pressed");

  setTimeout(function()
{
  select.classList.remove("pressed");
},300);
}


//METHOD 2
//
// var length = document.querySelectorAll(".drum").length;
//
// for (var i = 0; i < length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//
//     var select = this.innerHTML;
//
//     switch (select) {
//       case "w":
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//         break;
//
//       case "a":
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//         break;
//
//       case "s":
//         var audio = new Audio("sounds/tom-2.mp3");
//         audio.play();
//         break;
//
//       case "d":
//         var audio = new Audio("sounds/tom-3.mp3");
//         audio.play();
//         break;
//
//       case "j":
//         var audio = new Audio("sounds/tom-4.mp3");
//         audio.play();
//         break;
//
//       case "k":
//         var audio = new Audio("sounds/crash.mp3");
//         audio.play();
//         break;
//
//       case "l":
//         var audio = new Audio("sounds/snare.mp3");
//         audio.play();
//         break;
//
//       default:
//         vsr audio = new Audio("sounds/kick-bass.mp3");
//     }
//   })
// }
