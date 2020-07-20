import { AddressVo } from '../address.vo';
export interface OrgBrVo {
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
    adminPassword: string;
    id: string;
    orgId: string;
    name: string;
    type: string;
    address: AddressVo;
    ph: string;
    email: string;
    desc: string;
    status: string;
    del: boolean;
}
