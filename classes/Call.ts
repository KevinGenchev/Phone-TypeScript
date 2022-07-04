import { Call } from "../models/models";

export class PhoneCall implements Call {
  private _date: Date;
  private _time: string;
  private _phoneNumber: number;
  private _duration: number;

  get date(): Date {
    return this._date;
  }
  get time(): string {
    return this._time;
  }
  get phoneNumber(): number {
    return this._phoneNumber;
  }
  get duration(): number {
    return this._duration;
  }

  constructor(date: Date, time: string, phoneNumber: number, duration: number) {
    this._date = date;
    this._time = time;
    this._phoneNumber = phoneNumber;
    this._duration = duration;
  }
}
