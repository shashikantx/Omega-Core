/**
 * for UI - show list of saved source
 */
export interface Receipt {
    merchantName: string;
    date: string;
    time: string;
    merchantID: string;
    merchantAddress: string;
    terminalID: string;
    RRN: string;
    batchNum: string;
    transaction_option: string;
    cardScheme: string;
    authCode: string;
    PAN: string;
    cardEntryMethod: string;
    totalAmount: string;
    result: string;
    mode: string;
    CVM: string;
    AID: string;
    TVR: string;
    IAD: string;
    ARC: string;
    ApplicationLabel: string;
    networkName: string;
    Tags: string;
}
