let Wert = 0
let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
let list = [0]
let zaehler = 1
let werte = 0
basic.setLedColors(0x000000, 0x000000, 0x00ff00)
basic.forever(function () {
    basic.pause(6000)
    if (zaehler < 11) {
        list.push(SCD40.get_co2())
        werte += list[zaehler]
        zaehler += 1
    } else {
        Wert = werte / 10
        zaehler = 1
        werte = 0
        if (Wert < 800) {
            basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
        } else if (Wert < 1400) {
            basic.setLedColors(0xff8000, 0xff8000, 0xff8000)
        } else {
            basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
        }
        list = [0]
        _4digit.show(Wert)
    }
})
