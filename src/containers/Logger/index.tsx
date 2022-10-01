import React, { useState } from 'react';
import { SearchFrom } from './SearchForm';
import { LoggerTable } from './LoggerTable';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { LoggerSearchForm } from '../../models/forms';
import { getCurrentMonth } from '../../helpers/date';
import styles from './styles.module.css';

const initialValues: LoggerSearchForm = {
    employeeName: '',
    fromDate: getCurrentMonth().startOfMonth,
    toDate: getCurrentMonth().endOfMonth,
    applicationId: '',
    applicationType: '',
    actionType: '',
};

const SearchLogger = () => {
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
