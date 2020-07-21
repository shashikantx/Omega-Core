import {AddressVo} from '../address.vo';

export interface OrgBrVo { 
  //new fields
  branchLocation: string;
  adminfName: string;
  adminlName: string;
  adminTitle: string;
  dbaName: string;
  serviceUnderCompany: string;
  branchLogo: string;
  branchTax: string;
  deviceSerialNo: string;
  deviceName: string;
  deviceId: string;
  websiteDetails: string;
  adminName: string;
  adminEmail: string;
  adminPassword: string
  billingAddress: AddressVo;
  shippingAddress: AddressVo;
  bankName:string;
  accountNo:string;
  accountType:string;
  bankAddress:AddressVo;
  fromTime: string;
  toTime: string;
   //new fields
  id: string; //brId  for master branch id=master

  orgId: string; //TODO no need

  name: string; // Branch Name
  type: string; // Branch type
  address: AddressVo;

  ph: string;
  email: string;
  desc: string;

  // master: boolean;

  status: string; //Branch Status
  del: boolean;

}
