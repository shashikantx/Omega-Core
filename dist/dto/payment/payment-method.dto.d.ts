import { SignatureCords } from "./signature-cords";
import { S4ReceiptElement } from "./s4-receipt-element";
import { Receipt } from "./receipt";
/**
 * for UI - show list of saved source
 */
export interface PaymentMethodDto {
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
    id: string;
    gatewayCustId: string;
    object: string;
    tokId: string;
    name: string;
    first4: string;
    last4: string;
    cardType: string;
    expMonth: string;
    expYear: string;
    defaultSource: boolean;
    rawSource: any;
}
