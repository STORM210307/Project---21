var canvas;
var music;
var box;
var surface1, surface2, surface3, surface4;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1 = createSprite(690,580,200,5);
    surface1.shapeColor = "red";

    surface2 = createSprite(490,580,200,5);
    surface2.shapeColor = "blue";

    surface3 = createSprite(290,580,200,5);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(90,580,200,5);
    surface4.shapeColor = "green";


    //create box sprite and give velocity

    box = createSprite(random(20,750));
    box.velocityX = 3;
    box.velocityY = 3;
    box.shapeColor = "grey";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();


    //add condition to check if box touching surface and make it box




    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
     box.shapeColor = "red";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = "blue";
       }

       if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = "yellow";
       }

       if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "green";
       }

       box.bounceOff(edges);

       drawSprites();
}
