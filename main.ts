basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showString("welcome")
        pins.analogWritePin(AnalogPin.P1, 1)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(100)
    }
})
