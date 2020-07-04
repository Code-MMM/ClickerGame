var enemy, cursor, cursorImg, score, speed, difficulty, missCount, gameState;

function setup() {
    speed = 200
    gameState = "play";
    missCount=0;
    score = 0
    difficulty = 100;
    createCanvas(600, 600)
    frameRate(60)
    cursor = createSprite(mouseX, mouseY, 5, 5)
    cursorImg = loadImage("cursorImg.png")
    cursor.addAnimation("cursor", cursorImg)
}

function draw() {
    if (gameState === "play") {
    cursor.x = mouseX;
    cursor.y = mouseY;
    background("black")
    if (frameCount%speed===0) {
        enemy = createSprite(random(10, 590), random(50, 400), 30, 30)
        enemy.shapeColor = "red";
        enemy.lifetime = difficulty;
    }

    if (score > 5 && score <= 10) {
        speed = 150;
        difficulty = 150;
    }

    else if(score > 10 && score <= 20) {
        speed = 100;
        difficulty = 100;
    }
    
    else if(score > 20 && score <= 30) {
        speed = 60
        difficulty = 60;
    }

    else if (score > 30) {
        speed = 40
        difficulty = 40;
    }

    if (missCount >=5) {
        gameState = "end"
    }

    fill("white")
    text("Score: " + score, 285, 100)
    drawSprites();
}

    else {
        fill("red")
        textSize(50)
        text("GAME OVER", 150, 300)
    }

}

function mouseClicked() {
    if (cursor.collide(enemy)) {
        enemy.destroy();
        score+=1
        missCount = 0;
    }

    else {
        if (score !=0) {
            score-=1
        }

        missCount+=1
        
    }
}