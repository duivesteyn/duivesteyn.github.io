function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}


function blinkyStraight() {
   
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//COLOUR - Each colour is denoted in hex triplet: #xxxxxx [sRGB]
//-------------
var straightBlue    = "#1244b3"; //blue
var straightYellow  = "#ffd505"; //yellow
var straightRed     = "#b82c09"; //red
var straightColours = [straightBlue, straightYellow, straightRed];


//IMAGE RENDERING
//-------------
//Implementation Notes, this is designed with a white background, vertical lines placed, then filled in with the smaller squares

//Image Dimensions & Artwork Specific Ratios
var columns     = 26;                                           //main coloured strips (default 13)
var yratio      = 1.3;                                          //x:y ratio, >1 makes y>x (portrait)





ctx.fillStyle = straightColours[0];
ctx.fillRect(0,0,150,75);
    

    
}
