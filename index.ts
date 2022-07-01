import { PhoneCall } from "./classes/Call";
import { Phone } from "./classes/Phone";
import { BatteryType, Call } from "./models/models";

function main() {
  // const call: PhoneCall = new PhoneCall()
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
  // console.log(phone.owner);

  console.log(phone.phoneInfo());
  phone.makeCall()
  phone.makeCall()
  phone.makeCall()
  phone.makeCall()

  // phone.addPerformedCalls();

  phone.clearPerformedCalls();
  console.log("removed?");
  phone.makeCall()
  console.log("////////////////////////////");
  
  console.log ("+++++++++++++++++++++++")

  // console.log(phone.phoneInfo());
  // phone.makeCall();
  // phone.makeCall();
  // phone.makeCall();
  // phone.makeCall();
  // console.log(phone.addPerformedCalls());
  // console.log(phone.deletPerformedCalls())
  // phone.clearPerformedCalls();
  // console.log("removed?");
  // phone.makeCall();
  // console.log(phone.addPerformedCalls());
  // console.log("////////////////////////////");
  // console.log("+++++++++++++++++++++++");
  
  
}

main();