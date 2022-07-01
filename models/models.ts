export interface PhoneModel {
  model: string;
  manufacturer: string;
  price: number;
  owner: string;
  battery: BatteryModel;
  display: DisplayModel;
  phoneInfo(): string;
  performedCalls: string | number [];
 
}

export interface BatteryModel {
  model: BatteryType;
  hoursIdle: number;
  hoursTalk: number;
}

export interface DisplayModel {
  size: number;
  colors: number;
}

export enum BatteryType {
  LiIon = "LI_ION",
  NiMH = "NIMH",
  NiCd = "NICD",
}

export interface Call {
  date: Date;
  time: string;
  phoneNumber: number;
  duration: number;
  
}
