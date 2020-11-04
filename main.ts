scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.over(false, effects.dissolve)
})
let mySprite = sprites.create(img`
    f...f.fff.f.f..ff.f.f.ff.
    .f.f..f.f.f.f..f..f.f.f..
    ..f...f.f.f.f..ff.f.f.ff.
    ..f...f.f.f.f...f.f.f..f.
    ..f...f.f.f.f...f.f.f..f.
    ..f...fff.fff..ff.fff.ff.
    .........................
    .......fff....fff........
    ......f767f..f767f.......
    .......f766ff667f........
    ........fff767ff.........
    ...........f7f...........
    ...........f7f...........
    ........ffffffff.........
    .......f44444444f........
    ......f4444444444f.......
    .....f444444444444f......
    .....ffffff4444444ffff...
    ....f999911f444444f44f...
    ....f999999f444444f44f...
    ....f119999f444444f44f...
    .....ffffff4444444f44f...
    .....f444444444444f44f...
    .....f444444444444f44f...
    .....f4444ffff4444f44f...
    .....f444f....f444ffff...
    .....f444f....f444f......
    .....f444f....f444f......
    .....f444f....f444f......
    ......fff......fff.......
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`2000200002050502020202020202020202020202020202020202020202020202020202020201010101010101010101010101010101010101010101010101010101010102020101010101010101010101010101010101010101010101010101010101010202010102020202020202020202020202020202020101010101010101010101020201010202010101010101010101010101010102010101010101010101010102020101020201010101010101010101010101010201010101010101010101010202010102020101020202020202020202010101020101010101010101010101020201010202010102010101010102010101010102010101010101010101010102020101020201010201010101010201010101010201010101010101010101010202010102020101020101020101020101010202020101010101010101010101020201010202010102010102010102010101010102010101010101010101010102020101020201010201010202020201010101010201010101010101010101010202010102020101020101020101010202010101020101010101010101010101020201010202010102010102010101010101010102010101010101010101010102020101020201010201010101010101010101020201010101010101010101010202010102020101020101010101010101010101020202020101010101010101020201010202020202020202020202010101010102010101010101010101010102020101020101010101010101010101010201010201010101010101010101010202010102010101010101010101010101020101020101010101010101010101020201010201010202020202020201010102010102010101010101010101010102020101020101020101020101010101010201010201010101010101010101010202010102010102010102010101010101020101020101010101010101010101020201010201010201010201010202020202010102010101010101010102010102020101020101020101020101020101010101010202010101010101010201010202010102010102010102010102010101010101010201010101010101020101020201010201010201010201010201010201010202020101010101010102010102020101020101020101020101020101020101010102010101010101010201010202010102010102010102010102010102010101010201010101010101020101020201010202020201010202020202020202020101020202020202020202010102020101020101010101010101010101010101010101010101010101010101010202060702010101010101010101010101010101010101010101010101010101010202020202020202020202020202020202020202020202020202020101030401`, img`
    2..22222222222222222222222222222
    2..............................2
    2..............................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2...........................2
    2..2............................
    222222222222222222222222222.....
    `, [myTiles.transparency16,sprites.dungeon.floorLight2,sprites.dungeon.floorDark2,myTiles.tile1,myTiles.tile2,myTiles.tile4,myTiles.tile3,myTiles.tile5], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, myTiles.tile1)
