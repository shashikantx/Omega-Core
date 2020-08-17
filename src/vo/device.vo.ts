import { AddressVo } from "./address.vo";
export interface DeviceVo {
  //new fields
validity: Date;
branch: string;
company: string;
location: AddressVo;
subscriptionDate: Date;
billingFrequency: string;
//new fields
  id: string;

  orgId: string;
  brId: string;
  userId: string;
  name: string;

  androidId: string;
  brand: string;

  os: string;
  osVer: string;
  appId: string;

  build: string;
  version: string;

  registerId: string;

  fcm: string;
  apns: string;
  token: string;

  active: boolean;
  status: string;  //DEVICE_STATUS - SYNC SYNC_PENDING

  mid: string;
  serialNumber: string;
  machineType: string;
  deviceId: string;
  userName: string;
  password: string;
  tid: string;

}
