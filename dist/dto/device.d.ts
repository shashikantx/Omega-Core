/**
 * Device
 */
export interface Device {
    name: string;
    serialNo: string;
    validity: Date;
    branch: string;
    location: string;
    status: boolean;
    subscriptionDate: Date;
    billingFrequency: string;
    id: number;
    uid: number;
    type: string;
    os: string;
    osVer: string;
    appId: string;
    build: number;
    version: string;
}
