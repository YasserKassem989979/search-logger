import useSWR from 'swr';
import { fetchData } from '../api/applications';
import { Application } from '../models/api';
import { LoggerSearchForm } from '../models/forms';

export function useApi(filters: LoggerSearchForm) {
    const { data, error } = useSWR(`applications`, (url) => fetchData(url, filters));

    const applications: Application[] = data?.auditLog;

    return {
        data: applications,
        isLoading: !error && !data,
        isError: error,
    };
}
