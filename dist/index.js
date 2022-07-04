"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phone_1 = require("./classes/Phone");
var models_1 = require("./models/models");
function main() {
  var phone = new Phone_1.Phone(
    "3310",
    "Nokia",
    100,
    "Kevin",
    {
      hoursIdle: 200,
      hoursTalk: 100,
      model: models_1.BatteryType.LiIon,
    },
    {
      size: 4,
      colors: 26,
    }
  );

  console.log(phone.phoneInfo());

  console.log("Make 2 calls:");
  phone.makeCall();
  phone.makeCall();

  phone.totalPrice();
  console.log("History:");

  phone.clearPerformedCalls();
  console.log("History:");

  console.log("Make 3 calls:");
  phone.makeCall();
  phone.makeCall();
  phone.makeCall();

  console.log("Add a call:");

  console.log("History:");
  phone.totalPrice();
}
main();
