import useSWR from 'swr';
import { fetchData } from '../api/applications';
import { Application } from '../models/api';

export function useApplicationsApi() {
    const { data, error } = useSWR(`applications`, fetchData);

    const applications: Application[] = data?.auditLog;

    return {
        data: applications,
        isLoading: !error && !data,
        isError: error,
    };
}
