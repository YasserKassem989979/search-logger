enum ActionType {
    'DARI_REFRESH_TOKEN',
    'DARI_APP_LOGIN',
    'INITIATE_APPLICATION',
    'SUBMIT_APPLICATION',
    'ADD_EMPLOYEE',
}

enum AppicationType {
    'ADD_COMPANY_EMPLOYEE',
    'CERT_PROP_OWNERSHIP',
}

export interface LoggerSearchForm {
    employeeName: string;
    actionType: ActionType | '';
    applicationType: AppicationType | '';
    fromDate: string;
    toDate: string;
    applicationId: number | string;
}
