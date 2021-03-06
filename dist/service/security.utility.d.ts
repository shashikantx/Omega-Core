import { Role } from '../enums';
import { AclVo } from "../vo/auth";
export declare class SecurityUtility {
    static userHighestRoleInSchool(schoolId: number, croles: Array<string>): Role;
    static showOrgSetupLink(rootRole: Role, orgId: string, orgStatus: string): boolean;
    static isOrgStatusIsInProgress(orgStatus: string): boolean;
    private static _affiliationApplicationInprogress;
    static isUserSuperAdminStr(role: string): boolean;
    static isUserSuperAdmin(role: Role): boolean;
    static isUserOrgAdminStr(role: string): boolean;
    static isUserOrgAdmin(role: Role): boolean;
    static hasConsumerAccessOnly(role: Role): boolean;
    static hasEitherOrgOrBrAccess(role: Role): boolean;
    static hasReadOnlyCapability(role: Role): boolean;
    static hasRideOrPosSupportAccess(role: Role): boolean;
    static hasRideOrPosSupportOrOrgOrBrEmployeeAccess(role: Role): boolean;
    static hasItrSupportAccess(role: Role): boolean;
    static hasCareerSupportAccess(role: Role): boolean;
    static hasEduSupportAccess(role: Role): boolean;
    static hasEduSupportOrOrgOrBrEmployeeAccess(role: Role): boolean;
    static hasPosSupportAccess(role: Role): boolean;
    static hasPosSupportOrOrgOrBrEmployeeAccess(role: Role): boolean;
    static hasRideSupportAccess(role: Role): boolean;
    static hasRideSupportOrOrgOrBrEmployeeAccess(role: Role): boolean;
    static getAcl(crole: string): AclVo;
    static anonymousAcl(): AclVo;
    static getAccessPersonIds(croles: Array<string>): Array<number>;
    static getAccessSchoolIds(croles: Array<string>, onlyStaffAccess: boolean): Array<number>;
    static hasRole(authorizedRoles: string[], userRoles: string[]): boolean;
    private static _getAclList;
    private static _getAcl;
    private static _getAccessPersonIds;
    private static _getAccessSchoolIds;
    private static _anonymousAcl;
}
