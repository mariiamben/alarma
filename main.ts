radio.onReceivedNumber(function (receivedNumber) {
    alarmaa = receivedNumber
})
let alarmaa = 0
radio.setGroup(120)
basic.forever(function () {
    if (alarmaa == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (alarmaa == 1) {
        basic.showIcon(IconNames.Sad)
    }
})
