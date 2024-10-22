let index = 0
basic.forever(function () {
    index += 1
    datalogger.includeTimestamp(FlashLogTimeStampFormat.None)
    datalogger.log(
    datalogger.createCV("index", index),
    datalogger.createCV("CO2", SCD40.get_co2()),
    datalogger.createCV("Temperatur", SCD40.get_temperature(SCD40.SCD40_T_UNIT.C)),
    datalogger.createCV("Luftfeuchtigkeit", SCD40.get_relative_humidity())
    )
    datalogger.mirrorToSerial(true)
    basic.pause(5000)
})
