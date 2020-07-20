import { AddressVo } from '../address.vo';
import { CompanyVo } from './company.vo';
import { MerchantVo } from './merchant.vo';
import { BankVo } from './bank.vo';
import { OrgBrVo } from './org-br.vo';
import { PosOrgVo } from "../pos";
export interface OrgVo {
    company: {
        string: CompanyVo;
    };
    merchant: {
        string: MerchantVo;
    };
    bank: {
        string: BankVo;
    };
    address: AddressVo;
    paymentType: string[];
    maxTicketAmt: string;
    maxMonthVolume: string;
    driverLicenseNo: string;
    driverLicenseState: string;
    socialSecurityNo: string;
    terminalId: string;
    bankId: string;
    industryCodeNo: string;
    timeZone: string;
    dayLightSaving: string;
    accquirer: string;
    accquirerContact: string;
    accquirerPhn: string;
    currencyCode: string;
    merchantInnowiCheckoutCode: string;
    countryCode: string;
    branch: string;
    chain: string;
    debit: string;
    credit: string;
    billingAddress: AddressVo;
    shippingAddress: AddressVo;
    service: {
        string: boolean;
    };
    storeUnderCompanyNo: string;
    deviceno: string;
    virtualUsername: string;
    virtualPassword: string;
    id: string;
    name: string;
    type: string;
    subType: string;
    taxpayerId: string;
    logo: string;
    cover: string;
    domain: string;
    tagline: string;
    dba: string;
    dbaAddress: AddressVo;
    title: string;
    fName: string;
    mName: string;
    lName: string;
    doB: Date;
    gender: string;
    ownership: number;
    ph: string;
    email: string;
    masterBr: {
        string: OrgBrVo;
    };
    brMap: {
        string: OrgBrVo;
    };
    descBiz: string;
    status: string;
    del: boolean;
    modifiedBy: string;
    createdBy: string;
    modified: Date;
    created: Date;
    stripeCustId: string;
    payntCustId: string;
    stripeExpressAc: string;
    veteran: boolean;
    guncard: boolean;
    backgroundCheck: boolean;
    experience: number;
    cellManager: string;
    dispatch: string;
    otherLicense: boolean;
    dress: {
        string: boolean;
    };
    lang: {
        string: boolean;
    };
    pos: PosOrgVo;
}
