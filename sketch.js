var wall,thickness
var bullet,weight,speed

function setup() {
    createCanvas(1536,400)
    speed=random(55,90)
    weight=random(400,1500 )
    bullet=createSprite(50,200,50,5)
    bullet.velocityX=speed

    thickness=random(22,83)
    wall=createSprite(1300,200,thickness,height/2)
}

function draw() {
    background(0)
    if (hasCollided(bullet,wall)) {
        bullet.velocityX=0
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

        if (damage>10) {
            wall.shapeColor="red"
        }
        if (damage<10) {
            wall.shapeColor="green"
        }
    }

    drawSprites()
}
function hasCollided(lbullet,lwall) {
    bulletRightEdge=lbullet.x+lbullet.width
    wallLeftEdge=lwall.x
    if (bulletRightEdge>=wallLeftEdge) {
        return true
    }
    return false
}