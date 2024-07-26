namespace SpriteKind {
    export const tree = SpriteKind.create()
    export const item = SpriteKind.create()
    export const drink = SpriteKind.create()
    export const zombie = SpriteKind.create()
    export const pot = SpriteKind.create()
    export const invisible = SpriteKind.create()
    export const spider = SpriteKind.create()
    export const warden = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const warden_block = SpriteKind.create()
    export const dote = SpriteKind.create()
    export const husk = SpriteKind.create()
    export const villager = SpriteKind.create()
    export const dote2 = SpriteKind.create()
    export const taking_villager = SpriteKind.create()
    export const crop = SpriteKind.create()
    export const illager = SpriteKind.create()
    export const dote_3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tree, function (sprite, otherSprite) {
    otherSprite.destroy()
    item.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 1 . 1 
        . . b b b b b b b b b b b 1 1 1 
        . . b 1 1 1 1 1 1 1 1 1 b . . 1 
        . . b 1 e e e e e d d 1 b . . 1 
        . . b 1 e e e e e d e 1 b . . . 
        . . b 1 e e e e e d e 1 b . . . 
        . . b 1 e e e e e d e 1 b . . . 
        . . b 1 e e e e e d e 1 b . . . 
        . . b 1 e e e e e d d 1 b . . . 
        . . b 1 1 1 1 1 1 1 1 1 b . . . 
        . . b b b b b b b b b b b . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    sword = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . e e . 
        . . . . . . . . . . . e e e e . 
        . . . . . . . . . e e e e e . . 
        e e . . . . . . e e e e e . . . 
        . e e . . . . e e e e e . . . . 
        . . e e . . e e e e . . . . . . 
        . . . e e e e e e . . . . . . . 
        . . . . e e e e . . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . e e e e . e e . . . . . . . 
        . e e e e . . . e e . . . . . . 
        e e e e . . . . . e e . . . . . 
        `, mySprite, 0, 100)
})
sprites.onDestroyed(SpriteKind.warden, function (sprite) {
    portal = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.portal)
    animation.runImageAnimation(
    portal,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        `,img`
        . 8 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 8 . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        8 . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        `,img`
        . 8 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 8 . . . 
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 . . 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        8 . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 . . . . . 
        `],
    500,
    true
    )
    tiles.placeOnRandomTile(portal, sprites.castle.tileDarkGrass2)
})
sprites.onOverlap(SpriteKind.husk, SpriteKind.villager, function (sprite, otherSprite) {
    villager.setKind(SpriteKind.husk)
    villager.setImage(img`
        d d d d c c b b c d d d d d d d 
        d d c b b b b b b d d d d d d d 
        d d b b b b b b b b c c d d d d 
        c b b b b b b b b b b b b b c c 
        b b b b b b b b b b b b b b b b 
        b b b f f f b b b b f f f b b b 
        b b b f f f b b b b f f f b b b 
        b b b b b b c c c c b b b b b b 
        b b b b b b c c c c b b b b b b 
        b b b b c c b b b b c c b b b b 
        b b b b c c b b b b c c b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.warden, function (sprite, otherSprite) {
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.dote, function (sprite, otherSprite) {
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    sword = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . e e . 
        . . . . . . . . . . . e e e e . 
        . . . . . . . . . e e e e e . . 
        e e . . . . . . e e e e e . . . 
        . e e . . . . e e e e e . . . . 
        . . e e . . e e e e . . . . . . 
        . . . e e e e e e . . . . . . . 
        . . . . e e e e . . . . . . . . 
        . . . e e e e e . . . . . . . . 
        . . e e e e . e e . . . . . . . 
        . e e e e . . . e e . . . . . . 
        e e e e . . . . . e e . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.crop, function (sprite, otherSprite) {
    let _20 = 0
    if (info.life() == _20) {
        otherSprite.destroy()
    } else {
        crops = sprites.create(img`
            ....................
            .......77...........
            ....7.c7c7.77.7.....
            ..77c77c666c67cc7...
            ...767777c776776c7..
            ..776c666677667677..
            ....76776c77767767..
            ....77777766c7677...
            ...7c77677e6777777..
            ..77677677677e6777..
            ..7666766e67767767..
            ..7777e766e767676...
            ....67ee776e76e677..
            ....6667676e77f.77..
            ...777.e766eff7..6..
            ..66....e6eee76...7.
            ...76.....6....6..6.
            ....6...77....7....6
            ...67...6.....76..7.
            ....................
            `, SpriteKind.crop)
        tiles.placeOnRandomTile(crops, assets.tile`myTile`)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.spider, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.husk, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.husk, SpriteKind.taking_villager, function (sprite, otherSprite) {
    villager.setKind(SpriteKind.husk)
    villager.setImage(img`
        d d d d c c b b c d d d d d d d 
        d d c b b b b b b d d d d d d d 
        d d b b b b b b b b c c d d d d 
        c b b b b b b b b b b b b b c c 
        b b b b b b b b b b b b b b b b 
        b b b f f f b b b b f f f b b b 
        b b b f f f b b b b f f f b b b 
        b b b b b b c c c c b b b b b b 
        b b b b b b c c c c b b b b b b 
        b b b b c c b b b b c c b b b b 
        b b b b c c b b b b c c b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.item, function (sprite, otherSprite) {
    item_2.destroy()
    item_22.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c . . . . . . . 
        . . . . . . . c e c . . . . . . 
        . . . . . . . c e c . . . . . . 
        . . . . . . . c e c . . . . . . 
        . . . . . . . c e e c . . . . . 
        . . . . . . . c e e c . . . . . 
        . . . . . . . c e e c . . . . . 
        . . . . . c c e e e c c . . . . 
        . . . c c e e e c e e c . . . . 
        . c c e e e c c c e e c . . . . 
        c e e e c c . . . c e c . . . . 
        e e e c . . . . . . c e c . . . 
        e c c . . . . . . . c e c . . . 
        c . . . . . . . . . . c c . . . 
        `)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.illager, function (sprite, otherSprite) {
    sprite.destroy()
    villager.destroy()
    evil()
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass3)
    tiles.placeOnRandomTile(ilager, sprites.castle.tileGrass1)
    ilager.sayText("Hrmm", 5000, true)
    _ = sprites.create(img`
        7 
        `, SpriteKind.dote_3)
    tiles.placeOnRandomTile(_, sprites.castle.tileGrass2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.illager, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
})
info.onCountdownEnd(function () {
    mySprite.setKind(SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.pot, function (sprite, otherSprite) {
    mySprite.setKind(SpriteKind.invisible)
    pause(100)
    game.splash(game.ask("I'm invisible now i ", "better hurry up before it "), game.ask("wears off"))
    info.startCountdown(10)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.warden_block, function (sprite, otherSprite) {
    otherSprite.destroy()
    pause(1.7)
    WardeN1.follow(mySprite, 1.7)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.villager, function (sprite, otherSprite) {
    game.splash("(you) dude! I know you speak English")
    animate = false
    villager.setKind(SpriteKind.taking_villager)
    _2.destroy()
    pause(5000)
    villager.follow(mySprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.drink, function (sprite, otherSprite) {
    drink.destroy()
    if (game.ask("stay", "get more further?")) {
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
        controller.moveSprite(mySprite, 1, 100)
        mySprite3 = sprites.create(img`
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b 7 b b b b 7 7 b b b b 7 b b 
            b b c 7 7 7 7 7 7 7 b 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 f f f 7 7 7 7 f f f 7 7 7 
            7 7 7 f f f 7 7 7 7 f f f 7 7 7 
            7 7 7 7 7 7 b b b b 7 7 7 7 7 7 
            7 7 7 7 7 7 7 b b 7 7 7 7 c 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 
            7 7 c 7 c 7 7 7 7 7 7 7 7 7 c 7 
            7 7 7 7 7 7 7 7 7 7 c 7 7 7 7 7 
            7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 
            7 7 7 c 7 7 7 7 7 7 c 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
            `, SpriteKind.zombie)
        mySprite3.follow(mySprite, 30.96)
        tiles.placeOnRandomTile(mySprite3, assets.tile`myTile5`)
        magic = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e . . . . . . . . 
            . . . . . a 9 9 a . . . . . . . 
            . . . . . 9 9 a 9 . . . . . . . 
            . . . . . 9 a 9 a . . . . . . . 
            . . . . . a 9 a 9 . . . . . . . 
            . . . . . 9 9 9 9 . . . . . . . 
            . . . . . 9 a 9 a . . . . . . . 
            `, SpriteKind.pot)
        tiles.placeOnRandomTile(magic, assets.tile`myTile5`)
        spider = sprites.create(img`
            2 2 2 f f f f f f f f f f 2 2 2 
            2 2 2 f f f f f f f f f f 2 2 2 
            2 2 2 f f f f f f f f f f 2 2 2 
            f f f 2 2 2 f f f f 2 2 2 f f f 
            f f f 2 2 2 f f f f 2 2 2 f f f 
            f f f 2 2 2 f f f f 2 2 2 f f f 
            f f f f f f f f f f f f f f f f 
            2 2 f f 2 2 2 2 2 2 2 2 f f 2 2 
            2 2 f f 2 2 2 2 2 2 2 2 f f 2 2 
            2 2 f f 2 2 2 2 2 2 2 2 f f 2 2 
            2 2 f f 2 2 2 2 2 2 2 2 f f 2 2 
            f f f f 2 2 2 2 2 2 2 2 f f f f 
            f f f f f f f f f f f f f f f f 
            f f b b b f f b b f f b b b f f 
            f f b b b f f b b f f b b b f f 
            f f b b b f f b b f f b b b f f 
            `, SpriteKind.spider)
        tiles.placeOnRandomTile(spider, assets.tile`myTile5`)
        spider.follow(mySprite, 30.96)
        WardeN1 = sprites.create(img`
            66666666......6666666..
            66666666......66666666.
            6666..............66666
            6666..............66666
            6666666666666666666666.
            .666666666666666666666.
            ..6666666666666666666..
            ...66666666666666666...
            ...6666666666666666....
            ...6666666666666666....
            ...6666666666666666....
            ...6666666666666666....
            ...666ccccccccc6666....
            ...666caaaaaaac6666....
            ...666caaaaaaac6666....
            ...666caaaaaaac6666....
            ...666ccccccccc6666....
            ...6666666666666666....
            ...6666666666666666....
            ...6666666666666666....
            `, SpriteKind.warden)
        tiles.placeOnRandomTile(WardeN1, assets.tile`myTile6`)
        wardenblock = sprites.create(img`
            6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 8 
            6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 8 
            6 6 8 6 6 6 6 6 6 6 6 6 6 6 8 6 
            6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 
            6 6 8 6 8 8 8 8 8 8 8 6 8 6 6 6 
            6 6 6 8 8 6 6 6 6 6 8 8 8 6 6 6 
            6 6 8 8 6 6 6 6 6 6 6 6 8 8 6 6 
            6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 
            6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 
            6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 
            6 6 8 6 6 6 6 6 6 6 6 6 6 8 6 6 
            6 6 8 8 6 6 6 6 6 6 6 6 8 8 6 6 
            6 6 8 8 8 8 8 8 8 8 8 8 8 8 6 6 
            6 6 8 6 6 6 6 6 6 6 6 6 6 8 8 6 
            6 8 8 6 6 6 6 6 6 6 6 6 6 6 8 8 
            8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 
            `, SpriteKind.warden_block)
        tiles.placeOnRandomTile(wardenblock, sprites.castle.tileDarkGrass2)
    } else {
        game.splash("nope")
    }
})
sprites.onDestroyed(SpriteKind.villager, function (sprite) {
    ilager = sprites.create(img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b f f f f b b b b f f f f b b 
        b b f f f f b b b b f f f f b b 
        b b b b f f b b b b f f b b b b 
        b b b b 1 c b b b b c 1 b b b b 
        b b b b 1 c b b b b c 1 b b b b 
        b b b b b b f c c f b b b b b b 
        b b b b b f f c c f f b b b b b 
        b b b b b b f c c f b b b b b b 
        b b b b b b b c c b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.illager)
})
function evil () {
    villager.destroy()
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.husk, function (sprite, otherSprite) {
    otherSprite.destroy()
    villager = sprites.create(img`
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d f f f f f f f f f f f f d d 
        d d f f f f f f f f f f f f d d 
        d d d d d d d d d d d d d d d d 
        d d d d 1 7 d d d d 7 1 d d d d 
        d d d d 1 7 d d d d 7 1 d d d d 
        d d d d d d f e e f d d d d d d 
        d d d d d f f e e f f d d d d d 
        d d d d d d f e e f d d d d d d 
        d d d d d d d e e d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        `, SpriteKind.villager)
    villager.sayText("Hrmm", 5000, true)
    villager.follow(_2, 1.9)
    _2 = sprites.create(img`
        d 
        `, SpriteKind.dote2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.follow(mySprite, 100)
})
function mob () {
    pause(1000)
    info.changeLifeBy(-3)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.taking_villager, function (sprite, otherSprite) {
    villager.follow(mySprite, 12)
    scene.cameraFollowSprite(villager)
    game.splash("(villager) hi.. sorry. thank you so much!! for saving", "us we will follow you")
    villager.setKind(SpriteKind.taking_villager)
    _2.destroy()
    pause(1000)
    scene.cameraFollowSprite(mySprite)
    game.splash("(you) hi.. um. ok sorry.. Its ok", "if you follow me")
    pause(100)
    scene.cameraFollowSprite(villager)
    game.splash("(villager) hit me with your sword", "i will not die")
    pause(100)
    scene.cameraFollowSprite(mySprite)
    game.splash("(you) um why?")
    pause(100)
    scene.cameraFollowSprite(villager)
    game.splash("(villager) it will open a portal to my village")
    pause(100)
    scene.cameraFollowSprite(mySprite)
    game.splash("(you) ok?")
    villager.setKind(SpriteKind.illager)
})
info.onLifeZero(function () {
    game.splash(game.ask("your dead"))
    pause(1000)
    info.setScore(0)
    game.over(false)
})
sprites.onOverlap(SpriteKind.villager, SpriteKind.dote2, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(_2, assets.tile`myTile8`)
    villager.follow(_2)
    pause(100)
})
sprites.onOverlap(SpriteKind.illager, SpriteKind.dote_3, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(_, assets.tile`myTile16`)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeLifeBy(-3)
    pause(1)
    info.changeLifeBy(3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spider, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    mySprite = sprites.create(img`
        d d d d d d d d d d d d d d d d 
        d d 1 1 d d d d d d d d 1 1 d d 
        d d 1 f 8 8 8 8 8 8 8 8 f 1 d d 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 d d d d d d d d 8 8 8 8 
        8 8 8 8 d f f f f f f d 8 8 8 8 
        8 8 8 8 d d d d d d d d 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        2 8 2 2 8 8 8 8 8 8 8 8 2 2 8 2 
        2 8 2 2 2 2 2 2 2 2 2 2 2 2 8 2 
        2 8 8 2 2 2 2 2 2 2 2 2 2 8 8 2 
        2 2 8 2 2 2 2 2 2 2 2 2 2 8 2 2 
        2 2 8 2 2 2 2 2 2 2 2 2 2 8 2 2 
        2 2 8 2 2 2 2 2 2 2 2 2 8 8 2 2 
        2 2 8 2 2 2 2 2 2 2 2 2 8 8 2 2 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 100)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile8`)
    tiles.setCurrentTilemap(tilemap`level3`)
    _3 = sprites.create(img`
        d 
        `, SpriteKind.dote)
    tiles.placeOnRandomTile(_3, assets.tile`myTile9`)
    mySprite.follow(_3, 99999)
    Husk = sprites.create(img`
        d d d d c c b b c d d d d d d d 
        d d c b b b b b b d d d d d d d 
        d d b b b b b b b b c c d d d d 
        c b b b b b b b b b b b b b c c 
        b b b b b b b b b b b b b b b b 
        b b b f f f b b b b f f f b b b 
        b b b f f f b b b b f f f b b b 
        b b b b b b c c c c b b b b b b 
        b b b b b b c c c c b b b b b b 
        b b b b c c b b b b c c b b b b 
        b b b b c c b b b b c c b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, SpriteKind.husk)
    tiles.placeOnRandomTile(Husk, assets.tile`myTile10`)
    Husk.follow(mySprite, 10.1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.warden, function (sprite, otherSprite) {
    info.changeLifeBy(-4)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile12`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.zombie, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.zombie, function (sprite, otherSprite) {
    mySprite3.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    animation.runImageAnimation(
    creeper,
    [img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 f f f 7 7 7 f f f 7 7 7 7 
        7 7 7 f f f 7 7 7 f f f 7 7 7 7 
        7 7 7 f f f 7 7 7 f f f 7 7 7 7 
        7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
        7 7 7 7 f f f f f f f 7 7 7 7 7 
        7 7 7 7 f f f f f f f 7 7 7 7 7 
        7 7 7 7 f f f f f f f 7 7 7 7 7 
        7 7 7 7 f f 7 7 7 f f 7 7 7 7 7 
        7 7 7 7 f f 7 7 7 f f 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 b 1 1 1 1 1 1 b 1 1 1 1 
        1 1 b 1 1 1 1 b 1 1 1 1 1 1 b 1 
        1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 
        1 1 1 f f f 1 1 1 f f f 1 1 1 1 
        1 1 1 f f f 1 1 1 f f f 1 1 1 b 
        1 1 1 f f f 1 1 1 f f f 1 1 1 1 
        1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
        1 b 1 1 f f f f f f f 1 1 1 1 1 
        1 1 1 1 f f f f f f f 1 1 1 1 1 
        1 1 1 1 f f f f f f f 1 1 b 1 1 
        1 1 1 1 f f 1 1 1 f f 1 1 1 1 1 
        1 1 1 1 f f 1 1 1 f f 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 b 
        1 1 b 1 1 1 1 1 b 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 f f f 7 7 7 f f f 7 7 7 7 
        7 7 7 f f f 7 7 7 f f f 7 7 7 7 
        7 7 7 f f f 7 7 7 f f f 7 7 7 7 
        7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
        7 7 7 7 f f f f f f f 7 7 7 7 7 
        7 7 7 7 f f f f f f f 7 7 7 7 7 
        7 7 7 7 f f f f f f f 7 7 7 7 7 
        7 7 7 7 f f 7 7 7 f f 7 7 7 7 7 
        7 7 7 7 f f 7 7 7 f f 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `,img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 b 1 1 1 1 1 1 b 1 1 1 1 
        1 1 b 1 1 1 1 b 1 1 1 1 1 1 b 1 
        1 1 1 1 1 1 1 b b 1 1 1 1 1 1 1 
        1 1 1 f f f 1 1 1 f f f 1 1 1 1 
        1 1 1 f f f 1 1 1 f f f 1 1 1 b 
        1 1 1 f f f 1 1 1 f f f 1 1 1 1 
        1 1 1 1 1 1 f f f 1 1 1 1 1 1 1 
        1 b 1 1 f f f f f f f 1 1 1 1 1 
        1 1 1 1 f f f f f f f 1 1 1 1 1 
        1 1 1 1 f f f f f f f 1 1 b 1 1 
        1 1 1 1 f f 1 1 1 f f 1 1 1 1 1 
        1 1 1 1 f f 1 1 1 f f 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 b 1 1 b 
        1 1 b 1 1 1 1 1 b 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `,img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 f f f 7 7 7 f f f 7 7 7 7 
        7 7 7 f f f 7 7 7 f f f 7 7 7 7 
        7 7 7 f f f 7 7 7 f f f 7 7 7 7 
        7 7 7 7 7 7 f f f 7 7 7 7 7 7 7 
        7 7 7 7 f f f f f f f 7 7 7 7 7 
        7 7 7 7 f f f f f f f 7 7 7 7 7 
        7 7 7 7 f f f f f f f 7 7 7 7 7 
        7 7 7 7 f f 7 7 7 f f 7 7 7 7 7 
        7 7 7 7 f f 7 7 7 f f 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `],
    500,
    false
    )
    pause(1000)
    mob()
})
let Husk: Sprite = null
let _3: Sprite = null
let wardenblock: Sprite = null
let spider: Sprite = null
let magic: Sprite = null
let mySprite3: Sprite = null
let _2: Sprite = null
let animate = false
let WardeN1: Sprite = null
let _: Sprite = null
let ilager: Sprite = null
let crops: Sprite = null
let villager: Sprite = null
let portal: Sprite = null
let sword: Sprite = null
let drink: Sprite = null
let item_22: Sprite = null
let item_2: Sprite = null
let item: Sprite = null
let creeper: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    d d d d d d d d d d d d d d d d 
    d d 1 1 d d d d d d d d 1 1 d d 
    d d 1 f 8 8 8 8 8 8 8 8 f 1 d d 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 d d d d d d d d 8 8 8 8 
    8 8 8 8 d f f f f f f d 8 8 8 8 
    8 8 8 8 d d d d d d d d 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    2 8 2 2 8 8 8 8 8 8 8 8 2 2 8 2 
    2 8 2 2 2 2 2 2 2 2 2 2 2 2 8 2 
    2 8 8 2 2 2 2 2 2 2 2 2 2 8 8 2 
    2 2 8 2 2 2 2 2 2 2 2 2 2 8 2 2 
    2 2 8 2 2 2 2 2 2 2 2 2 2 8 2 2 
    2 2 8 2 2 2 2 2 2 2 2 2 8 8 2 2 
    2 2 8 2 2 2 2 2 2 2 2 2 8 8 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
info.setLife(20)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
creeper = sprites.create(assets.image`creeper`, SpriteKind.Enemy)
creeper.follow(mySprite, 6)
tiles.placeOnRandomTile(creeper, sprites.castle.tileGrass2)
let mySprite2 = sprites.create(assets.image`tree`, SpriteKind.tree)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile1`)
item = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.item)
item.setFlag(SpriteFlag.RelativeToCamera, true)
item.setPosition(87, 90)
item_2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c . . . . . . . 
    . . . . . . . c e c . . . . . . 
    . . . . . . . c e c . . . . . . 
    . . . . . . . c e c . . . . . . 
    . . . . . . . c e e c . . . . . 
    . . . . . . . c e e c . . . . . 
    . . . . . . . c e e c . . . . . 
    . . . . . c c e e e c c . . . . 
    . . . c c e e e c e e c . . . . 
    . c c e e e c c c e e c . . . . 
    c e e e c c . . . c e c . . . . 
    e e e c . . . . . . c e c . . . 
    e c c . . . . . . . c e c . . . 
    c . . . . . . . . . . c c . . . 
    `, SpriteKind.item)
item_22 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.item)
item_22.setFlag(SpriteFlag.RelativeToCamera, true)
item_22.setPosition(74, 90)
tiles.placeOnRandomTile(item_2, assets.tile`myTile3`)
drink = sprites.create(assets.image`drink`, SpriteKind.drink)
tiles.placeOnRandomTile(drink, sprites.castle.tileGrass2)
sword = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . e e . 
    . . . . . . . . . . . e e e e . 
    . . . . . . . . . e e e e e . . 
    e e . . . . . . e e e e e . . . 
    . e e . . . . e e e e e . . . . 
    . . e e . . e e e e . . . . . . 
    . . . e e e e e e . . . . . . . 
    . . . . e e e e . . . . . . . . 
    . . . e e e e e . . . . . . . . 
    . . e e e e . e e . . . . . . . 
    . e e e e . . . e e . . . . . . 
    e e e e . . . . . e e . . . . . 
    `, SpriteKind.Player)
sword.setFlag(SpriteFlag.RelativeToCamera, true)
sword.setPosition(61, 90)
