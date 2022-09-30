import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { SearchFrom } from './SearchForm';
import { LoggerTable } from './LoggerTable';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { LoggerSearchForm } from '../../models/forms';
import { getCurrentMonth } from '../../helpers/date';

const initialValues: LoggerSearchForm = {
    employeeName: '',
    fromDate: getCurrentMonth().startOfMonth,
    toDate: getCurrentMonth().endOfMonth,
    applicationId: '',
    applicationType: '',
    actionType: '',
};

const SearchLogger = () => {
    const theme = useTheme();
    const [filters, setFilters] = useState<LoggerSearchForm>(initialValues);

    return (
        <div>
            <Breadcrumbs />
            <div
                style={{
                    height: 1,
                    background: theme.palette.divider,
                    marginBottom: theme.spacing(2),
                    marginTop: theme.spacing(2),
                }}
            />
            <SearchFrom filters={filters} setFilters={setFilters} />
            <div style={{ marginTop: 16 }}>
                <LoggerTable filters={filters} />
            </div>
        </div>
    );
};

export { SearchLogger };
