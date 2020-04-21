namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const projectile2 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 8 8 8 8 8 . . 
. . . . . . 8 8 8 8 8 8 8 8 8 . 
. . . . . . 8 8 8 8 8 8 8 8 8 . 
. . . . . . 8 8 8 8 8 8 8 8 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, space_plane_2, 200, 0)
    projectile.setKind(SpriteKind.projectile2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . . 2 2 2 2 2 2 2 2 2 . 
. . . . . . 2 2 2 2 2 2 2 2 2 . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, space_plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    if (space_plane == sprite) {
        info.changeLifeBy(-1)
    } else {
        info.player2.changeLifeBy(-1)
    }
    if (info.life() == 0) {
        for (let index = 0; index < 4; index++) {
            game.splash("PLAYER 2 WIN")
        }
        game.over(false, effects.splatter)
    } else if (info.player2.life() == 0) {
        for (let index = 0; index < 4; index++) {
            game.splash("PLAYER 1 WIN")
        }
        game.over(false, effects.melt)
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 500)
    info.player2.changeScoreBy(1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let space_plane_2: Sprite = null
let space_plane: Sprite = null
space_plane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . a . . . . . . . . . . 
. . . . . . a . . . . . . . . . 
. . . . . . a a a . . . . . . . 
. . . . . . . a a . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 7 7 7 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . a a . . . . . . 
. . . . . . . . a a . . . . . . 
. . . . . . . a . . . . . . . . 
. . . . . . a . . . . . . . . . 
`, SpriteKind.Player)
space_plane_2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 8 . . . . . . . . . . 
. . . . . . 8 . . . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
. . . . . . . 5 5 . . . . . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 2 2 2 
8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . . . . . 5 5 . . . . . . 
. . . . . . . . 5 5 . . . . . . 
. . . . . . . 8 . . . . . . . . 
. . . . . . 8 . . . . . . . . . 
`, SpriteKind.Player)
space_plane.setFlag(SpriteFlag.StayInScreen, true)
space_plane_2.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
info.player2.setLife(3)
controller.moveSprite(space_plane, 200, 200)
controller.player2.moveSprite(space_plane_2)
info.startCountdown(20)
effects.starField.startScreenEffect()
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c c c c 
. . . . . . . . . c c 7 7 7 6 c 
. . . . . . . . c c 7 7 7 c c . 
. . . . . . . . c 6 7 7 c . . . 
. . . . . . . . c 6 6 6 c . . . 
. . . c c c c c c 6 6 6 c c . . 
. . c 6 7 7 7 7 6 c c 6 6 6 c . 
. c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
f 7 c 5 6 6 5 c 7 7 7 f 6 6 6 c 
f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
. c 1 c f f 1 c 7 6 f 6 6 c c . 
. c c c c c c c c c c c c . . . 
`, SpriteKind.Enemy)
    bogey.setVelocity(-50, 0)
    bogey.setPosition(160, Math.randomRange(0, 120))
})
