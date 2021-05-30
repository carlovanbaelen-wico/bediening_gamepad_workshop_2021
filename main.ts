radio.onReceivedNumber(function (receivedNumber) {
    Item = receivedNumber
    if (Item == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (Item == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else if (Item == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    } else if (Item == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
    } else if (Item == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (Item == 5) {
        Color.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (Item == 6) {
        maqueen.servoRun(maqueen.Servos.S1, 60)
    } else if (Item == 7) {
        Color.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (Item == 8) {
        maqueen.servoRun(maqueen.Servos.S1, 120)
    } else if (Item == 9) {
        Color.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let Item = 0
let Color: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
Color = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
