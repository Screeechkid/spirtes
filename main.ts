input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
let Player: game.LedSprite = null
basic.showIcon(IconNames.Heart)
let Enemy = game.createSprite(0, 0)
Player = game.createSprite(1, 0)
basic.forever(function () {
    if (Enemy.isTouching(Player)) {
        basic.showIcon(IconNames.Skull)
        music.playMelody("C5 B A G F E D C ", 120)
        Enemy = game.createSprite(randint(0, 10), randint(0, 10))
    }
})
