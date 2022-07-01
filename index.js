"use strict";
exports.__esModule = true;
var Phone_1 = require("./classes/Phone");
var models_1 = require("./models/models");
function main() {
    // const call: PhoneCall = new PhoneCall()
    var phone = new Phone_1.Phone("3310", "Nokia", 100, "Kevin", {
        hoursIdle: 200,
        hoursTalk: 100,
        model: models_1.BatteryType.LiIon
    }, {
        size: 4,
        colors: 26
    });
    // console.log(phone.owner);
    console.log(phone.phoneInfo());
    phone.removePerformedCalls();
}
main();
