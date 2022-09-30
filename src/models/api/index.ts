/**======================
 * Application model that return from server
 *========================**/
export interface Application {
    logId: number;
    applicationId: number;
    applicationType: string;
    companyId: number;
    actionType: string;
    userId: number;
    ownerId: number;
    logInfo: string;
    creationTimestamp: string;
}
