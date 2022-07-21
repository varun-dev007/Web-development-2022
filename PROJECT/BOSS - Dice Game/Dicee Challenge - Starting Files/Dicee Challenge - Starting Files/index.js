
var randNum1=Math.floor((Math.random()*6))+1;
var randNum2=Math.floor((Math.random()*6))+1;

var src1="images/dice"+randNum1+".png";
var src2="images/dice"+randNum2+".png";

document.querySelector(".img1").setAttribute("src",src1);
document.querySelector(".img2").setAttribute("src",src2);


if(randNum1>randNum2)
{
  document.querySelector(" h1").innerHTML="Player 1 wins...!";
}
else if(randNum1<randNum2)
{
    document.querySelector("  h1").innerHTML="Player 2 wins...!";
}
else
{
    document.querySelector(" h1").innerHTML="Draw...!";
}
