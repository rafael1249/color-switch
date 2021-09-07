var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;
var parede1, parede2, parede3, parede4;

function preload(){
   music = loadSound("music.mp3");
}

function setup(){
 createCanvas(800,600);

    bloco1 = createSprite(305,580,200,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(95,580,200,30);
    bloco2.shapeColor = "orange";

    bloco3 = createSprite(510,580,200,30);
    bloco3.shapeColor = "red";

    bloco4 = createSprite(715,580,200,30)
    bloco4.shapeColor = "purple";

  //  bloco3 = createSprite()

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4

    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    bola.velocityY = 5;
    bola.velocityX = 4;
    //escreva o código para adicionar velocityX e velocityY

    parede1 = createSprite(810,300,20,600);
    parede2 = createSprite(-10,300,15,600);
    parede3 = createSprite(400,-10,800,10);
    parede4 = createSprite(400,810,800,10);
 
    

}

function draw() {
    background("black");
  //  arestas=createArestasprites();

   // bola.bounceOff(parede1);
 


    //escreva o código de ricochete de bola para bloco1 

  
   // bola.bounceOff(bloco1);
   // bola.bounceOff(bloco2);
   // bola.bounceOff(bloco3);
   // bola.bounceOff(bloco4);

    bola.bounceOff(parede1);
    bola.bounceOff(parede2);
    bola.bounceOff(parede3);
    bola.bounceOff(parede4);


    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
      bola.shapeColor = "blue";
      music.play();
  }

  if(bloco2.isTouching(bola) && bola.bounceOff(bloco2)){
    bola.shapeColor = "orange";
    music.play();
}

  if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
  bola.shapeColor = "red";
  music.play();
 }

 if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
  bola.shapeColor = "purple";
  music.play();
}
   drawSprites();
}

