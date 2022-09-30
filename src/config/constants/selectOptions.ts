import { AppicationType, ActionType } from '../../models/forms';

/**======================
 * Application Type Options
 *========================**/
type ApplicationTypeOption = { title: string; value: AppicationType };
export const applicationTypeOptions: ApplicationTypeOption[] = [
    {
        value: 'ADD_COMPANY_EMPLOYEE',
        title: 'Add Company Employee',
    },
    {
        value: 'CERT_PROP_OWNERSHIP',
        title: 'Cert Prop Ownership',
    },
];

/**======================
 * Action Type Options
 *========================**/
type ActionTypeOption = { title: string; value: ActionType };
export const actionTypeOptions: ActionTypeOption[] = [
    {
        value: 'ADD_EMPLOYEE',
        title: 'Add Employee',
    },
    {
        value: 'DARI_APP_LOGIN',
        title: 'Dari App Login',
    },
    {
        value: 'DARI_REFRESH_TOKEN',
        title: 'Dari Refresh Token',
    },
    {
        value: 'INITIATE_APPLICATION',
        title: 'Initiate Application',
    },
    {
        value: 'SUBMIT_APPLICATION',
        title: 'Submit Application',
    },
];
