import { AddressVo } from "../address.vo";

/**
 *
 Suite/Floor/etc
 Zip City State
 Phone
 Email
 Fax Number
 */
export interface CompanyVo { 
    billingAddress:AddressVo;
    shippingAddress:AddressVo;
    name:string;
    registrationDate:Date;
    dba: string;
    companySince: string;
    subType: string;
    companyfName: string;
    companylName: string;
    companyPhn: string;
    companyEmail: string;
    socialSecurityNo: string;
    merchantCategoryCode: string;
    serviceUnderCompany:Array<{ item_id: number, item_text: string }>;
    taxpayerId: string;
    noOfLocations: string;
    storeUnderCompanyNo:string;
    deviceno:string;
    ph: string;
    email: string;
    domain: string;
    companyFax: string;
    contactName: string;
    sameAddress: boolean;
    contactPhone: string;
    bankName:string;
    accountNo:string;
    accountType:string;
    mid1:string;
    terminalId: string;
    bankId: string;
    industryCodeNo: string;
    timeZone:string;
    dayLightSaving: string;
    accquirer: string;
    accquirerContact: string;
    accquirerPhn: string;
    currencyCode: string;
    merchantInnowiCheckoutCode: string;
    countryCode: string;
    branch: string;
    chain: string;
    Visa:string;
    Mastercard:string;
	AmericanExpress:string;
	Discovery:string;
	DinersClub:string;
	JCB:string;
    Maestro:string;
    Cash:string;
    ACH_SEVICES:string;
    maxTicketAmt: string;
    maxMonthVolume: string;
    virtualUsername: string;
    virtualPassword: string;
    id: string;
}
