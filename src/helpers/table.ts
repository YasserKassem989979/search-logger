import { Application } from '../models/api';

// to create row data
export function createApplicationRow(item: Application) {
    return {
        id: item.logId,
        logId: item.logId,
        applicationType: item.applicationType
            ? item.applicationType.replaceAll('_', ' ').toLowerCase()
            : '---',
        applicationId: item.applicationId,
        action: item.actionType ? item.actionType.replaceAll('_', ' ').toLowerCase() : '---',
        actionDetails: '---',
        dateTime: item.creationTimestamp,
    };
}
