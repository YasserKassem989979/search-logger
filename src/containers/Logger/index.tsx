import React, { useState } from 'react';
import { SearchFrom } from './SearchForm';
import { LoggerTable } from './LoggerTable';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { LoggerSearchForm } from '../../models/forms';
import { getCurrentMonth } from '../../helpers/date';
import styles from './styles.module.css';
import { useQuery } from '../../hooks/useQuery';

//initial values passed to form
const initialValues: LoggerSearchForm = {
    employeeName: '',
    fromDate: getCurrentMonth().startOfMonth,
    toDate: getCurrentMonth().endOfMonth,
    applicationId: '',
    applicationType: '',
    actionType: '',
};

const SearchLogger = () => {
    // to get query parmas
    let query = useQuery();
    //update initial state with query params
    for (let key in initialValues) {
        if (query.has(key)) {
            initialValues[key as keyof LoggerSearchForm] = query.get(key) as string;
        }
    }

    //state
    const [filters, setFilters] = useState<LoggerSearchForm>(initialValues);

    return (
        <div>
            <Breadcrumbs />
            <div className={styles.line} />
            <SearchFrom filters={filters} setFilters={setFilters} />
            <div style={{ marginTop: 16 }}>
                <LoggerTable filters={filters} />
            </div>
        </div>
    );
};

export { SearchLogger };
