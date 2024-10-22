basic.forever(function () {
    basic.showString("CO2" + SCD40.get_co2())
    basic.pause(100)
    basic.showString("Temperatur" + SCD40.get_temperature(SCD40.SCD40_T_UNIT.C))
    basic.pause(100)
    basic.showString("Luftfeuchtigkeit" + SCD40.get_relative_humidity())
    basic.pause(100)
})
