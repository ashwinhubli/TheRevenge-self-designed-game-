var gameState ="start";
var player,backG;
var bodyguard1,bodyguard2,bodyguard3,bodyguard4;
var distance;
var shurikenCount = 5;
var score;
var fireGroup,shurikenGroup;
var boss;
function preload(){
  backImg = loadImage("New Folder/backImg.jpg");

  playerImg = loadImage("New Folder/playerImg (1).png");
  bodyguard1Img = loadImage("New Folder/bodyG1.png");
  bodyguard2Img = loadImage("New Folder/bodyG2.png");
  bodyguard3Img = loadImage("New Folder/bodyG3.png");
  bodyguard4Img = loadImage("New Folder/bodyG4.png");
  bodyguard5Img = loadImage("New Folder/bodyG5.png");
  bossImg = loadImage("New Folder/(B)img.gif");
  shurikenImg = loadAnimation("New Folder/0021.gif");
  speechBox1IMG = loadImage("New Folder/speech-25914_960_720.png");
  speechBox2IMG = loadImage("New Folder/speech-bubble-145975__340.png");
  fireballs = loadImage("New Folder/fire-ball.png");
  shieldImg = loadImage("rock-tamers-heat-shield-side-angle.png");
  shurikenButtonImg = loadImage("New Folder/shuriken.png");
   iceball = loadAnimation("New Folder/iceball.gif");
   backImg2 = loadImage("New Folder/finalBackG2.gif");
   darkOrb = loadImage("New Folder/3c6538ba3b02eef3a458869a6c230fa9.gif")
   lifeImg = loadImage("New Folder/OIP.png");
   halfLifeImg = loadImage("New Folder/OIP(1).png");

   soundFormats('mp3', 'ogg');
   bodyguardDying = loadSound('sounds/Scream And Die Fx-SoundBible.com-299479967.mp3');
   playerPower = loadSound('sounds/Woosh-Mark_DiAngelo-4778593.mp3');
   bossPower = loadSound('sounds/spear_throw-Mike_Koenig-2064202968.mp3');
   
  }

function setup() {
  canvas = createCanvas(1200,600);

  backG = createSprite(3500,200,100,65);
  backG.addImage(backImg);
  backG.scale  = 15;
  backG.velocityX = -2;
  backG.x = backG.width/2;

  player = createSprite(50,460,50,50);
  player.scale = 0.5;
  player.addImage(playerImg);
  player.velocityX = 1;

  shuriken = createButton("shuriken");
  shuriken.position(player.x,30); 
  shuriken.mousePressed(addShuriken);
  
 bodyguard1 = createSprite(1560,440,10,10);
 bodyguard1.addImage(bodyguard1Img);
 bodyguard1.scale = 0.9;
 bodyguard1.visible = false;
 bodyguard1.setCollider("circle",-290,-94,10);
 bodyguard1.debug = true;


 bodyguard2 = createSprite(1790,440,10,10);
 bodyguard2.addImage(bodyguard2Img);
 bodyguard2.scale = 0.9;
 bodyguard2.velocityX = -0.05;
 bodyguard2.visible = true;
 bodyguard2.setCollider("circle",0,0,10);
 bodyguard2.debug = true;

 bodyguard3 = createSprite(1880,440,10,10);
 bodyguard3.addImage(bodyguard3Img);
 bodyguard3.scale = 0.9;
 bodyguard3.velocityX = -0.015;
 bodyguard3.visible = false;

 bodyguard3.setCollider("circle",0,0,10);
 bodyguard3.debug = true;

 bodyguard4 = createSprite(2050,300,10,10);
 bodyguard4.addImage(bodyguard4Img);
 bodyguard4.scale = 0.9;
 bodyguard4.visible = false;
 bodyguard4.velocityX = -0.015;
 bodyguard4.setCollider("circle",0,0,10);
 bodyguard4.debug = true;

 fireGroup = new Group();
 iceGroup = new Group();
  shurikenGroup = new Group();
 }


function draw() {
  background(255,255,0);
  distance = player.x;   
   image(shurikenButtonImg,player.x,30,150,50);
    
    if(backG.x<0){
      backG.x = backG.width/2;
     } 
     backG.velocityX = -4;
   
         if(keyDown(RIGHT_ARROW)){
     player.velocityX = 2.5;
   
   }  
  if(distance>350){
    bodyguard1.visible = true;  
   

    Fireball();
    
       
  
    backG.y = 150;
    player.velocityX = 0.2;
    image(speechBox1IMG,500,300,200,80);
    if(keyDown("w")){
     player.velocityY = player.velocityY-1;
     player.velocityY = player.velocityY+0.5;
    }
    if(keyDown("s")){
     player.velocityY = player.velocityY+1;

    }
    
    if(shurikenGroup.isTouching(bodyguard1)){
      player.velocityX = 2.5;
      fireGroup.destroyEach();
      bodyguardDying.play();
    }
  }

  if(distance>350){
    bodyguard2.visible = true;  
   

    Fireball();
    
   
  
    backG.y = 150;
    player.velocityX = 0.2;
    image(speechBox1IMG,500,300,200,80);
    if(keyDown("w")){
     player.velocityY = player.velocityY-1;
     player.velocityY = player.velocityY+0.5;
    }
    if(keyDown("s")){
     player.velocityY = player.velocityY+1;

    }
    
    if(shurikenGroup.isTouching(bodyguard1)){
      player.velocityX = 2.5;
      fireGroup.destroyEach();
      bodyguardDying.play();
    }
  }

  if(distance>370){
    bodyguard3.visible = true;
     
    
    backG.y = 150;
    player.velocityX = 0.2;
    image(speechBox1IMG,500,300,200,80);
    if(keyDown("w")){
     player.velocityY = player.velocityY-1;
     player.velocityY = player.velocityY+0.5;
    }
    if(keyDown("s")){
     player.velocityY = player.velocityY+1;

    }
    
    if(shurikenGroup.isTouching(bodyguard3)){
      player.velocityX = 2.5;
      fireGroup.destroyEach();
      bodyguardDying.play();

    }
  }

  if(distance>380){
    bodyguard4.visible = true;
     

    backG.y = 150;
    player.velocityX = 0.2;
    image(speechBox1IMG,500,300,200,80);
    if(keyDown("w")){
     player.velocityY = player.velocityY-1;
     player.velocityY = player.velocityY+0.5;
    }
    if(keyDown("s")){
     player.velocityY = player.velocityY+1;

    }
    
    if(shurikenGroup.isTouching(bodyguard4)){
      player.velocityX = 2.5;
      fireGroup.destroyEach();
      bodyguardDying.play();

    }
  }


  
   if(player.x>3000){
     console.log(player.x);
     player.velocityX = 0;
   }

   for (var i = 0; i < fireGroup.maxDepth(); i++) {
  
    var fireball = fireGroup.get(i);
    
    if (fireball != null && fireball.isTouching(player)) {
      score = score-2;
      fireGroup.destroyEach();
      player.scale = player.scale-0.05;
      text("score:"+score,300,300);
    } 
  }
    for (var i = 0; i < iceGroup.maxDepth(); i++) {
  
      var ice = iceGroup.get(i);
      
      if (ice != null && ice.isTouching(player)) {
       player.scale = 0.015; 
      }   
    }
  
    image(speechBox1IMG,500,300,200,80);
   
  
    for (var i = 0; i < shurikenGroup.maxDepth(); i++) {
   
     var shuriken = shurikenGroup.get(i);
     
     if (shuriken != null && shuriken.isTouching(bodyguard1)) {
      
       shuriken.destroy();
       bodyguard1.destroy();
       player.velocityX = 3;

      } 
      if (shuriken != null && shuriken.isTouching(bodyguard2)) {
      
        shuriken.destroy();
        bodyguard2.destroy();
        player.velocityX = 3;
 
       } 
       if (shuriken != null && shuriken.isTouching(bodyguard3)) {
      
        shuriken.destroy();
        bodyguard3.destroy();
        player.velocityX = 3;
 
       } 
       if (shuriken != null && shuriken.isTouching(bodyguard4)) {
      
        shuriken.destroy();
        bodyguard4.destroy();
       gameState  = "play";
       backG.destroy();

 
       } 
       
      
    }
     


   //if(player.x = 1200){
     // canvas = (400,400);

camera.position.x = player.x+520;  
  text("score:"+score,300,300);
  stroke("red")
if(gameState === "play"){
  boss = createSprite(player.x+1000,250,200,10,10);
  boss.addImage(bossImg);
  boss.scale = 0.55;
  //boss.setCollider("circle",0,0,40);
  //boss.debug = true;

  // dhs = createSprite(boss.x-200,boss.y,50,50);
  if(shurikenGroup.isTouching(boss)){
    console.log("boss");
    boss.position.x = -200
  }
  player.velocityX = 0;
  image(backImg2,player.x-100,0,1300,600);
  if(player.scale<0.25){
   player.destroy();
   boss.destroy();
    }
    if(keyWentUp(RIGHT_ARROW)){
     player.velocityX = 1
    }
    if(keyWentDown(RIGHT_ARROW)){
     player.velocityX = 0;
    }
    camera.position.x = backG.x+950;
  obstacles();
}
if(player.scale<0.25){
  fill("red");
  textSize(25);
  text("Game Over!!!!!",player.x+460,200);
  text("You Lose",player.x+499,225);
  player.destroy();
  bodyguard1.destroy();
  bodyguard2.destroy();
  bodyguard3.destroy();
  bodyguard4.destroy();
  shurikenGroup.destroyEach();
  fireGroup.destroyEach();
  iceGroup.destroyEach();
  backG.velocityX = 0;
}

   drawSprites();
   fill("red")
   textSize(25);
   text("press the left arrow to play",20,20);
   text("hit the green marks to defeat the bodyguards",400,20);
  }

 
    function Fireball(){
  if (frameCount % 60 === 0) {
    var fireball = createSprite(900,175,40,10);
    fireball.x =(random(160,1000));
    fireball.addImage(fireballs);
    fireball.scale = 0.2;
    fireball.velocityY = 2.5;
    fireball.velocityX = -4.5;
    fireball.lifetime = 250;
    fireGroup.add(fireball)
    if(shurikenGroup.isTouching(bodyguard1)){
      fireball.lifetime = -1;
    }

  }

   

  } 

    function addShuriken(){
     
     var shuriken = createSprite(player.x,player.y,20,20);
     shuriken.addAnimation("throwing",iceball);
     shuriken.scale = 0.17;
     shuriken.velocityX = 5;
     shurikenCount = shurikenCount-1;
     if(shurikenCount<=0){
         shuriken.lifetime = -1;
     }
     if(shuriken.isTouching(bodyguard1)){
      player.velocityX = 2.5;
     }
     shuriken.lifetime = 350;
     shurikenGroup.add(shuriken);
     playerPower.play();
    }    function obstacles(){
 

      if(frameCount % 50 === 0){
        var ice = createSprite(player.x+1000,player.y,10,10);
        ice.addImage(darkOrb);
        ice.velocityX = -3.4;
        ice.scale = 0.6;
        backG.velocityX = 0;
        backG.scale = 9;
        ice.lifetime = 350;
        iceGroup.add(ice)
        bossPower.play();
         
      }
    }  