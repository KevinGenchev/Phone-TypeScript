import { Phone } from "./classes/Phone";
import { BatteryType } from "./models/models";

function main() {
  const phone: Phone = new Phone(
    "3310",
    "Nokia",
    100,
    "Kevin",
    {
      hoursIdle: 200,
      hoursTalk: 100,
      model: BatteryType.LiIon,
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
  phone.addCalls();

  console.log("History:");
  phone.totalPrice();
}
main();
