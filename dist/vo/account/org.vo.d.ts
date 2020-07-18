import { AddressVo } from '../address.vo';
import { OrgBrVo } from './org-br.vo';
import { PosOrgVo } from "../pos";
export interface OrgVo {
    id: string;
    name: string;
    type: string;
    subType: string;
    taxpayerId: string;
    logo: string;
    cover: string;
    address: AddressVo;
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
    brMap: {
        string: OrgBrVo;
    };
    descBiz: string;
    service: {
        string: boolean;
    };
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
