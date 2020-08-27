import { SignatureCords } from "./signature-cords";
import { S4ReceiptElement } from "./s4-receipt-element";
import { Receipt } from "./receipt";

/**
 * for UI - show list of saved source
 */
export interface PaymentMethodDto {
  //new fields for stroing NMI response
  Status: number;
  cardholdername: string;
  acquirer: string;
  AuthCode: string;
  processor: string;
  lastfourdigit: string;
  transactionId: string;
  token: string;
  baseTransactionId: string;
  respText: string;
 // cardType: string;
  voiceReferralPhoneNumber: string;
  approvedAmount: string;
  emvResponse: string;
  availablebalance: number;
  batchId: string;
  PhoneNumber: string;
  loyaltyTrack1: string;
  loyaltyTrack2: string;
  loyaltyTrack3: string;
  mTipAmountPrompt: string;
  signature: Array<SignatureCords>;
  receiptList: Array<S4ReceiptElement>;
  receiptData: Receipt;
universalToken: string;
saleCount: string;
saleAmount: string;
refundCount: string;
refundAmount: string;
netCount: string;
netAmount: string;
accessToken: string;
loginPin: string;
cardExpiryDate: string;
panEntryMode: string;
cardLastFourDigits: string;
orgId:string;
brId:string;
branchId:string;
   //new fields for stroing NMI response

  id: string; //sourceId card_xxxx
  gatewayCustId: string;
  object: string; //object type - card, ach/bank etc.
  tokId:string;

  // fName: string; //CardHolderName
  // lName: string;
  name: string; //CardHolderName

  first4: string;
  last4: string;
  cardType: string; // brand
  // expirationDate: string; //YYYY-MM
  expMonth: string;
  expYear: string;

  defaultSource: boolean;

  rawSource: any;

}