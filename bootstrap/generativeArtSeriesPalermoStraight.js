
function straight() {

//COLOUR - Each colour is denoted in hex triplet: #xxxxxx [sRGB]
//-------------
var straightBlue    = "1244b3"; //blue
var straightYellow  = "ffd505"; //yellow
var straightRed     = "b82c09"; //red
var straightColours = [straightBlue, straightYellow, straightRed];

//IMAGE RENDERING
//-------------
//Implementation Notes, this is designed with a white background, vertical lines placed, then filled in with the smaller squares

//Image Dimensions & Artwork Specific Ratios
var xDimension  = 4096;                                         //x pixels. ydimension controlled by number of rows (see below)
var columns     = 26;                                           //main coloured strips (default 13)
var rows        = 34;                                           //main coloured horizontal strips, consisting of little coloured sqares! (default 17)
var yratio      = rows/columns;                                 //x:y ratio, >1 makes y>x (portrait)
var yDimension  = math.round(xDimension*yratio) ;               //Automatic  height ref correct ratio #also needs to be int, not float
var squareDimension = math.ceil(xDimension/(columns*2)) ;       // 2048/13/2 =78.76px

//Artwork Colours
var colourArrayLines = straightColours;

//TODO: CONVERT FROM PYTHON FROM HERE DOWN
// helper page: https://stackoverflow.com/questions/49807779/drawing-square-using-canvas-javascript


/*
//Generate
//Create Canvas
im = Image.new('RGB', (xDimension,yDimension), "ffffff")
dr = ImageDraw.Draw(im)


//Create Lines
print ("Creating Palermo Straight Artwork with Rows " + str(rows) + " and Columns: " + str(columns))
xSpacer = squareDimension
ySpacer = squareDimension
xOrigin = 0

print ("Drawing Columns")
for c in range(0, columns):
    if (c != 0): //no spacer on first column
        xOrigin = xOrigin + 2*xSpacer //add space between consecutive lines
    yOrigin = 0
    colourToDraw = colourArrayLines[c % 3] //select the right colour
    dr.rectangle(( (xOrigin,yOrigin),(xOrigin+squareDimension,yDimension) ), fill=colourToDraw)
    print ("Origin x,y: (" + str(xOrigin) + "," + str(yOrigin) + ") Destination x,y: (" + str(xOrigin+squareDimension) + "," + str(yDimension) + ") squareDimension: " + str(squareDimension) + ", colour: " + colourToDraw)

//Create Squares
print ("Drawing Squares")
xOrigin = 0 //reset x-cord to start
yOrigin = 0
for r in range(0, rows):
    for c in range(0, columns):
        xOrigin = squareDimension*(2*c)+xSpacer;
        yOrigin = squareDimension*(2*r);
        colourToDraw = colourArrayLines[(c+1+r%3)% 3] //select the right colour
        dr.rectangle(( (xOrigin,yOrigin),(xOrigin+squareDimension,yOrigin+squareDimension) ), fill=colourToDraw)
        print ("Origin x,y: (" + str(xOrigin) + "," + str(yOrigin) + ") Destination x,y: (" + str(xOrigin+squareDimension) + "," + str(yOrigin+squareDimension) + ") squareDimension: " + str(squareDimension) + ", colour: " + colourToDraw)


} *//
}
function drawSquare(canvas, context, color){
    var x= Math.floor(Math.random()*canvas.width);
    var y= Math.floor(Math.random()*canvas.height);    
    context.fillStyle = color;
    context.fillRect (x,y, canvas.width, canvas.height)
 }
 
