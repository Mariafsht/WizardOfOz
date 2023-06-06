function startlevel () {
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite.setBounceOnWall(true)
    count = 0
    for (let index = 0; index <= 10 + level; index++) {
        mySprite2 = sprites.create(img`
            . . . . . . f f f . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . f f f f f f f f f f f f f . . 
            . . . . 7 7 f 7 f 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . 7 7 7 f f f 7 . . . . . 
            . . . . 7 7 7 3 7 7 7 . . . . . 
            . . . . 7 7 7 7 7 7 7 1 . 1 . . 
            . . . . . . f f f . . . . . 1 . 
            . . . . 7 f f f f f 7 . 1 . . . 
            . . . 7 7 f f f f f 7 7 . 5 . 1 
            . . 7 7 f f f f f f f 7 7 e . . 
            . 7 7 f f f f f f f f . 7 e . . 
            . . . f f f f f f f f f . e . . 
            . . f f f f f f f f f f f . . . 
            `, SpriteKind.Enemy)
    }
    mySprite2.setPosition(randint(20, 140), randint(20, 100))
    mySprite.sayText("Level" + level, 1000, false)
    info.startCountdown(15)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    let othersprite: Sprite = null
    count += 1
    info.changeScoreBy(1)
    othersprite.startEffect(effects.fountain, 200)
    if (count > 10 + level) {
        level += 1
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        startlevel()
    } else {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    }
})
let mySprite2: Sprite = null
let count = 0
let mySprite: Sprite = null
let level = 0
game.splash("Hurry up!", "Escape from the Wicked Witch!")
level = 1
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 d 4 4 4 . . . . . 
    . . . 4 4 d f d f d 4 4 . . . . 
    . . . 4 4 d d d d d 4 4 . . . . 
    . . . 4 4 d d 3 d d 4 4 . . . . 
    . . . 4 4 d d d d d 4 4 . . . . 
    . . . 4 4 d 9 d 9 d 4 4 . . . . 
    . . . 9 9 9 d 9 d 9 9 9 . . . . 
    . . d 4 4 d 8 1 8 d 4 4 d . . . 
    . . d d d 1 8 8 1 8 d d d . . . 
    . . . . 1 8 1 1 8 1 8 . . . . . 
    . . . . 9 9 9 9 9 9 9 9 . . . . 
    . . . 8 1 8 8 1 8 8 1 8 . . . . 
    . . . . . d . . . d . . . . . . 
    . . . . 2 2 . . . 2 2 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 70, 70)
startlevel()
