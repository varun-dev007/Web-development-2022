//ARRAY TO HOLD COLOURS
var buttonColours=["red","blue","green","yellow"];
//TO STORE USER CLICKED BUTTONS PATTERN
var userClickedPattern=[];
//TO STORE PATTERN OF COLOURS
var gamePattern=[];

//RETURNS RANDOM NUMBER
function nextSequence()
{
  var randomNumber=Math.floor(Math.random()*4);
return randomNumber;
}

//SELECT RANDOM NUMBER
var randomChosenColour=buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

//To produce sound
makeSound(randomChosenColour);
animate(randomChosenColour);
//TO PUSH IN gamePattern
gamePattern.push(randomChosenColour);


//WHEN USER CLICKS
$(".btn").click(function()
{
  handler(this.id);
})

function handler(userClicked)
{
  makeSound(userClicked);
  animate(userClicked);
  var userChosenColour=userClicked;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
}


//To make the animation
function animate(randomChosenColour)
{
  $("#"+randomChosenColour).animate({opacity:0})
  $("#"+randomChosenColour).delay(50);
  $("#"+randomChosenColour).animate({opacity:1})
}


function makeSound(s)
{
  switch(s)
  {
    case "blue":
    var audio=new Audio("sounds/blue.mp3");
    audio.play()
    break;

    case "red":
    var audio=new Audio("sounds/red.mp3");
    audio.play()
    break;

    case "yellow":
    var audio=new Audio("sounds/yellow.mp3");
    audio.play()
    break;

    case "green":
    var audio=new Audio("sounds/green.mp3");
    audio.play()
    break;

    default:
    var audio=new Audio("sounds/wrong.mp3");
    audio.play()
    break;


  }
}
