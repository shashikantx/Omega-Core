import {AddressVo} from '../address.vo';
import {OrgBrVo} from './org-br.vo';
import {PosOrgVo} from "../pos";

// Organization / Enterprise / Merchant / Business
export interface OrgVo {
  id: string;// orgId

  // Corporate Legal Information
  name: string; // Legal Name
  type: string; // Type of Business
  subType: string; //affiliationType --> BLACK_CAR | FLEET | TAXI | GIG |

  taxpayerId: string //taxpayer Id

  logo: string;
  cover: string;

  address: AddressVo;

  domain: string;
  tagline: string;//Business Tagline

// DBA Information
  dba: string; // DBA Name - Doing Business As / Trade Name
  dbaAddress: AddressVo;

  // Admin Information
  title: string;
  fName: string;//First Name
  mName: string;//Middle Name
  lName: string;//Last Name
  doB: Date;
  gender: string;
  ownership: number; //% Ownership

  ph: string;
  email: string;

  // countStore: number;
  // masterOrgBr: OrgBrVo;
  masterBr: OrgBrVo;
  brMap: { string: OrgBrVo }; //for master key will be master

  // Business Details
  descBiz: string;//Business Description
  service: { string: boolean };

  status: string; //affiliation/status - NOT_APPROVED, IN_PROGRESS (Application submit for review), APPROVED/REJECT (by Admin), LIVE/DEAD (by Admin), ACTIVE/INACTIVE (by org)
  del: boolean;

  modifiedBy: string;
  createdBy: string;
  modified: Date;
  created: Date;

  //Payment
  stripeCustId: string; // cus_ and in strip_customer collection >> id >> copr_<corpId>
  payntCustId: string;

  stripeExpressAc: string;

  // Limo specific field
  // TODO Transfer to the limo specific object
  veteran: boolean;
  guncard: boolean;
  backgroundCheck: boolean;
  experience: number;
  cellManager: string;
  dispatch: string;

  otherLicense: boolean;
  dress: { string: boolean };
  lang: { string: boolean };

  // POS specific field
  pos: PosOrgVo;
  //ride: RideOrgVo;
}
