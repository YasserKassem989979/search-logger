import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useApplicationsApi } from '../../hooks/apiHooks';
import { Size, useWindowSize } from '../../hooks/useWindowSize';
import { createApplicationRow } from '../../helpers/table';
import { LoggerSearchForm } from '../../models/forms';

//constants
const CELL_HEIGHT = 52;
const PAGE_SIZE = 10;
const TABLE_HEIGHT = CELL_HEIGHT * (PAGE_SIZE + 2);

//interface
interface LoggerTableProps {
    filters: LoggerSearchForm;
}
const LoggerTable = ({ filters }: LoggerTableProps): JSX.Element => {
    const { data, isLoading } = useApplicationsApi(filters);
    const size: Size = useWindowSize();

    //columns of table
    const COLUMN_WIDTH = size.width ? size.width / 6 : 130;
    const columns: GridColDef[] = React.useMemo(
        () => [
            { field: 'logId', headerName: 'Log Id', width: COLUMN_WIDTH },
            { field: 'applicationType', headerName: 'Application Type', width: COLUMN_WIDTH },
            { field: 'applicationId', headerName: 'Application ID', width: COLUMN_WIDTH },
            { field: 'action', headerName: 'Action', width: COLUMN_WIDTH },
            { field: 'actionDetails', headerName: 'Action Details', width: COLUMN_WIDTH },
            { field: 'dateTime', headerName: 'Date:Time', width: COLUMN_WIDTH, type: 'date' },
        ],
        [COLUMN_WIDTH],
    );

    const rows = !isLoading ? data.map((item) => createApplicationRow(item)) : [];

    if (isLoading) {
        return (
            <Box
                sx={{
                    flexDirection: 'column',
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'center',
                    flex: 1,
                    padding: '16px',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <div style={{ height: TABLE_HEIGHT, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={PAGE_SIZE}
                rowsPerPageOptions={[PAGE_SIZE]}
            />
        </div>
    );
};

export { LoggerTable };
