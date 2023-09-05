function Si () {
    basic.showIcon(IconNames.Yes)
    music.play(music.tonePlayable(659, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
}
function No () {
    basic.showIcon(IconNames.No)
    music.play(music.tonePlayable(175, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(147, music.beat(BeatFraction.Double)), music.PlaybackMode.InBackground)
}
basic.showIcon(IconNames.SmallDiamond)
PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Card)
basic.showIcon(IconNames.Square)
basic.forever(function () {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.ruler) || (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.clock) || PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.apple))) {
        Si()
    } else if (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.dog) || (PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.umbrella) || PlanetX_AILens.otherCard(PlanetX_AILens.otherCards.cup))) {
        No()
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
    basic.pause(1000)
})
