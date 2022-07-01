import { BatteryModel, DisplayModel, PhoneModel } from "../models/models";
import { PhoneCall } from "./Call";

export class Phone implements PhoneModel {
  private _model: string;
  private _manufacturer: string;
  private _price: number;
  private _owner: string;
  private _battery: BatteryModel;
  private _display: DisplayModel;
  public performedCalls: any[];

  get model(): string {
    return this._model;
  }
  get manufacturer(): string {
    return this._manufacturer;
  }
  get price(): number {
    return this._price;
  }
  get owner(): string {
    return this._owner;
  }
  set owner(value: string) {
    this._owner = value;
  }

  get battery(): BatteryModel {
    return this._battery;
  }
  get display(): DisplayModel {
    return this._display;
  }

  constructor(
    model: string,
    manufacturer: string,
    price?: number,
    owner?: string,
    battery?: BatteryModel,
    display?: DisplayModel
  ) {
    this._model = model;
    this._manufacturer = manufacturer;
    this._price = price;
    this._owner = owner;
    this._battery = battery;
    this._display = display;
    this.performedCalls = [];
  }
  // Information for phone calls
  public phoneInfo(): string {
    let information = `Model: ${this._model}\nManufacturer:${this._manufacturer}`;
    if (this._price !== undefined || null) {
      information += `\nPrice: ${this._price}`;
    }
    if (this._owner !== undefined || null) {
      information += `\nOwner: ${this._owner}`;
    }
    if (this._battery !== undefined || null) {
      information += `\nBattery:\n Model: ${this._battery.model}\n hoursId: ${this._battery.hoursIdle}\n hoursTalk: ${this._battery.hoursTalk}`;
    }
    if (this._display !== undefined || null) {
      information += `\nDisplay:\n colors:${this._display.colors}\n size: ${this._display.size}`;
    }

    return information;
  }
  // Make a call
  public makeCall(): any {
    const date = new Date();
    const time = `${date.getHours()}:${
      date.getMinutes() < 10 ? "0" : ""
    }${date.getMinutes()}`;
    const phoneNumber = Math.floor(359880000000 + Math.random() * 900000);
    const duration = Math.floor(Math.random() * 1000);

    const newCall = new PhoneCall(date, time, phoneNumber, duration);
    const callHistoryObj = {
      date: newCall.date,
      time: newCall.time,
      phoneNumber: newCall.phoneNumber,
      duration: newCall.duration,
    };

    this.performedCalls.push(callHistoryObj);
    console.log(callHistoryObj);
  }
  // Adding calls
  public addPerformedCalls(actions: string): string[] {
    const Add = "Add";
    if (Add === actions) {
      this.performedCalls.push(this.performedCalls);
    }
    return this.performedCalls;
  }
  // Clear call history information
  public clearPerformedCalls(): void {
    this.performedCalls = [];
    console.log("Removed")
  }
  // Remove the last element from call history
  public deletPerformedCalls(params): any {
    this.addPerformedCalls(params).pop();
    return this.addPerformedCalls(params);
  }

  public totalPrice(): void{
    if(this.performedCalls.length < 1){
      console.log("No cals made by this phone")
      return 
    }
    const minutePrice = 0.50;
    let totalSec = 0;

    this.performedCalls.forEach((calls) => (totalSec += calls.duration));
    const finalSum = ((totalSec / 60) * minutePrice).toFixed(2);
    console.log(`Total Price in the calls is ${finalSum}lv`);
  }
}

