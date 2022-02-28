scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (knotty_knotweed.vy == 0) {
        knotty_knotweed.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.melt)
})
let knotty_knotweed: Sprite = null
scene.setBackgroundColor(13)
knotty_knotweed = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . e e e e e . . . . . . . . 
    . . . e f e f e . . . . . . . . 
    . . . e e 4 e e . . . . . . . . 
    . . . e e e e e . . . . . . . . 
    . . . . . e . . . . . . . . . . 
    . . 8 8 8 8 8 8 8 . . . . . . . 
    . . 8 . 8 8 8 . 8 . . . . . . . 
    . . . . 8 8 8 . . . . . . . . . 
    . . . . 8 8 8 . . . . . . . . . 
    . . . . f f f . . . . . . . . . 
    . . . . f . f . . . . . . . . . 
    . . . . f . f . . . . . . . . . 
    . . . 8 8 . 8 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(knotty_knotweed, 100, 0)
tiles.setCurrentTilemap(tilemap`level2`)
knotty_knotweed.ay = 250
scene.cameraFollowSprite(knotty_knotweed)
