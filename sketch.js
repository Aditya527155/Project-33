var background

var kid1
var kid2
var kid3

var kid
function preload(){
backgroundImg1 = loadImage("snow1.jpg")
backgroundImg2 = loadImage("snow2.jpg")
backgroundImg3 = loadImage("snow3.jpg")

kid1Img = loadImage("boy.png")
kid2Img = loadImage("download1.png")
}
function setup() {
  createCanvas(1500,800);
  
  background = createSprite(750,400)
  background.addImage(backgroundImg1)   
  background.scale=2.9

  kid  = createSprite(750,640)
  kid.addImage(kid1Img)
  kid.scale=0.1
}

function draw() {
  
  drawSprites();
if(keyCode === 49){
  background.addImage(backgroundImg1)
  background.scale=2.9
  kid.addImage(kid1Img)
  kid.scale=0.1
  kid.visible=true
}
if(keyCode === 50){
background.addImage(backgroundImg2)
background.scale = 1.2
kid.visible=false
}  
if(keyCode === 51){
  background.addImage(backgroundImg3)
  background.scale = 1.5
  kid.visible=false
}
}

