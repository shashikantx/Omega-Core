import { AddressVo } from '../address.vo';
import { CompanyVo } from './company.vo';
import { MerchantVo } from './merchant.vo';
import { BankVo } from './bank.vo';
import { OrgBrVo } from './org-br.vo';
import { PosOrgVo } from "../pos";
export interface OrgVo {
    modifiedDate: Date;
    createdDate: Date;
    // company: CompanyVo;
    companySince: string;
    companyEmail: string;
    companyPhn: string;
    companyFax: string;
    companyTitle: string;
    companyfName: string;
    companymName: string;
    companylName: string;
    //  merchant: MerchantVo;
    adminName: string;
    adminEmail: string;
    adminPassword: string;
    merchantCategoryCode: string;
    merchantName: string;
    merchantAddress: AddressVo;
    merchantPhn: string;
    merchantEmail: string;
    merchantDob: string;
    //bank: BankVo;
    bankName: string;
    accountNo: string;
    routingNo: string;
    accountType: string;
    bankAddress: AddressVo;
    address: AddressVo;
    //paymentType:  string[]; 
    Visa: string;
    Mastercard: string;
    AmericanExpress: string;
    Discovery: string;
    DinersClub: string;
    JCB: string;
    Maestro: string;
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
    service: boolean;
    serviceUnderCompany: Array<{ item_id: number, item_text: string }>;
    storeUnderCompanyNo: string;
    deviceno: string;
    virtualUsername: string;
    virtualPassword: string;
    noOfLocations: string;
    registrationDate: Date;
    mid: string;
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
    masterBr: OrgBrVo;
    brMap: OrgBrVo;
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


    //new fields
    desc: string;
    dbaName: string;
    websiteDetails: string;
    branchTax: string;
    branchType : string;
    
    adminfName: string;
    adminlName: string;

    openingHoursmon: string,
    closingHoursmon:  string,
    

    openingHourstue: string;
    closingHourstue: string;

    openingHourswed: string;
    closingHourswed: string;

    openingHoursthu: string;
    closingHoursthu: string;

    openingHoursfri: string;
    closingHoursfri: string;

    openingHourssat: string;
    closingHourssat: string;

    openingHourssun: string;
    closingHourssun: string;

    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    sameAddress: boolean,
}
