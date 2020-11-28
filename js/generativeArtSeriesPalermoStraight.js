function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function canvasDownload() {
    //var canvas = document.getElementById("canvas");
    //var img    = canvas.toDataURL("image/png");
    //document.write('<img src="'+img+'"/>');
	
	var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); 
	window.location.href=image; // it will save locally
}


function blinkyStraight(colour1, colour2, colour3) {
    var theInput = document.getElementById("color1").value;
    //var theColor = theInput.value;


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//COLOUR - Each colour is denoted in hex triplet: #xxxxxx [sRGB]
//-------------
//var straightBlue    = "#1244b3"; //blue
//var straightYellow  = "#ffd505"; //yellow
//var straightRed     = "#b82c09"; //red
//var straightColours = [straightBlue, straightYellow, straightRed];
var straightColours = [colour1,colour2,colour3]


//IMAGE RENDERING
//-------------
//Implementation Notes, this is designed with a white background, vertical lines placed, then filled in with the smaller squares

//Image Dimensions & Artwork Specific Ratios
var columns     = 26;                                           //main coloured strips (default 13)
var yratio      = 1.3;                                          //x:y ratio, >1 makes y>x (portrait)
var rows        = columns*yratio
console.log("Creating Palermo Straight Artwork with Rows" + " CCC" + theInput);
var squareDimension = Math.round(width/columns) //math.ceil(xDimension/(columns*2)) 		// 2048/13/2 =78.76px

//Demo Lines
//ctx.fillStyle = straightColours[0];
//ctx.fillRect(0,0,150,75);

var xSpacer = squareDimension;
var ySpacer = squareDimension;
var xOrigin = 0;
var yOrigin = 0;
var colourToDraw;

//Columns
console.log("Drawing Columns");
for (c = 0; c < columns/2; c++) {
  xOrigin = c*squareDimension*2;
  colourToDraw = straightColours[c % 3]  						//select the right colour
  //console.log(c + " " + c % 3 + " " + colourToDraw);
  ctx.fillStyle = colourToDraw;
  ctx.fillRect(xOrigin,yOrigin,squareDimension,height);
}

//Squares between Columns

//Create Squares
console.log("Drawing Squares");
xOrigin = 0; 													//reset x-cord to start
yOrigin = 0;

for (r = 0; r < rows/2; r++) {
	for (c = 0; c < columns; c++) {
  	xOrigin = squareDimension*(2*c)+xSpacer;
	yOrigin = squareDimension*(2*r);
    colourToDraw = straightColours[(c+1+r%3)% 3]; 						//select the right colour
    //console.log(r + " " + c);
    ctx.fillStyle = colourToDraw;
    ctx.fillRect(xOrigin,yOrigin,squareDimension,squareDimension);
    }
}


// for r in range(0, rows):
//     for c in range(0, columns):
//         xOrigin = squareDimension*(2*c)+xSpacer;
//         yOrigin = squareDimension*(2*r);
//         colourToDraw = straightColours[(c+1+r%3)% 3] #select the right colour
//         dr.rectangle(( (xOrigin,yOrigin),(xOrigin+squareDimension,yOrigin+squareDimension) ), fill=colourToDraw)
//         print ("Origin x,y: (" + str(xOrigin) + "," + str(yOrigin) + ") Destination x,y: (" + str(xOrigin+squareDimension) + "," + str(yOrigin+squareDimension) + ") squareDimension: " + str(squareDimension) + ", colour: " + colourToDraw)

    

    
}
