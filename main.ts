sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    count += 1
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    otherSprite.startEffect(effects.smiles, 200)
    if (count > 10 + level) {
        level += 1
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        startLevel()
    } else {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    }
})
function startLevel () {
    tiles.setCurrentTilemap(tilemap`level4`)
    mySprite.setBounceOnWall(true)
    count = 0
    for (let index = 0; index <= 10 + level; index++) {
        food1 = sprites.create(img`
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
            `, SpriteKind.Food)
        food1.setPosition(randint(20, 140), randint(20, 100))
    }
    mySprite.sayText("Level" + level, 1000, true)
    info.startCountdown(30)
}
let food1: Sprite = null
let count = 0
let mySprite: Sprite = null
let level = 0
game.splash("Hurry up!", "Kill the Wicked Witch of the West!")
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
startLevel()
