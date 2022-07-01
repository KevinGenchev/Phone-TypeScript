"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phone_1 = require("./classes/Phone");
var models_1 = require("./models/models");
function main() {
    // const call: PhoneCall = new PhoneCall()
    var phone = new Phone_1.Phone("3310", "Nokia", 100, "Kevin", {
        hoursIdle: 200,
        hoursTalk: 100,
        model: models_1.BatteryType.LiIon,
    }, {
        size: 4,
        colors: 26,
    });

    console.log(phone.phoneInfo());
    phone.makeCall();
    phone.makeCall();
    phone.makeCall();
    phone.makeCall();
    console.log(phone.addPerformedCalls());
    console.log(phone.deletPerformedCalls())
    phone.clearPerformedCalls();
    console.log("removed?");
    phone.makeCall();
    console.log(phone.addPerformedCalls());
    console.log("////////////////////////////");
    console.log("+++++++++++++++++++++++");

    phone.totalPrice()
}
main();
