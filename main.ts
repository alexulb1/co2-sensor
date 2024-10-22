let zaehler = 1
basic.forever(function () {
    basic.pause(5000)
    if (zaehler < 10) {
        zaehler += 1
    } else {
        zaehler = 1
    }
})
