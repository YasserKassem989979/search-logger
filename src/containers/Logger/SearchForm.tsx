import React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Button, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { InputLabel } from '@mui/material';
import { useFormik } from 'formik';
import { Select } from '../../components/Select';
import { TextInput } from '../../components/TextInput';
import { LoggerSearchForm } from '../../models/forms';
import { DateFormats, getCurrentMonth } from '../../helpers/date';
import moment, { Moment } from 'moment';

const initialValues: LoggerSearchForm = {
    employeeName: '',
    fromDate: getCurrentMonth().startOfMonth,
    toDate: getCurrentMonth().endOfMonth,
    applicationId: '',
    applicationType: '',
    actionType: '',
};

const SearchFrom = () => {
    const form = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleChangeDate = (name: string, newValue: Moment | null) => {
        console.log('newValue', newValue);
        const event = {
            target: {
                name,
                value: newValue?.format(DateFormats['YYYY-MM-DD']),
            },
        };
        form.handleChange(event);
    };

    return (
        <form onSubmit={form.handleSubmit}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <TextInput
                    name="employeeName"
                    onBlur={form.handleBlur}
                    error={!!form.errors.employeeName}
                    onChange={form.handleChange}
                    value={form.values.employeeName}
                    placeholder="eg. Joe"
                    id="employeeName"
                    title="Employee Name"
                />
                <Select
                    onChange={form.handleChange}
                    name="actionType"
                    value={form.values.actionType}
                    sx={{ minWidth: 200 }}
                    title="Action Type"
                    labelId="actionType"
                    items={[{ value: 'value', title: 'title' }]}
                />
                <Select
                    onChange={form.handleChange}
                    name="actionType"
                    value={form.values.actionType}
                    sx={{ minWidth: 200 }}
                    title="Action Type"
                    labelId="actionType"
                    items={[{ value: 'value', title: 'title' }]}
                />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <div>
                        <InputLabel htmlFor="fromDate">From Date</InputLabel>
                        <DesktopDatePicker
                            value={form.values.fromDate}
                            onChange={(value) => handleChangeDate('fromDate', moment(value))}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    id="fromDate"
                                    name="fromDate"
                                    onChange={form.handleChange}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <InputLabel htmlFor="toDate">To Date</InputLabel>
                        <DesktopDatePicker
                            value={form.values.toDate}
                            onChange={(value) => handleChangeDate('toDate', moment(value))}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    id="toDate"
                                    name="toDate"
                                    onChange={form.handleChange}
                                />
                            )}
                        />
                    </div>
                </LocalizationProvider>
                <TextInput
                    name="applicationId"
                    onBlur={form.handleBlur}
                    error={!!form.errors.applicationId}
                    onChange={form.handleChange}
                    value={form.values.applicationId}
                    placeholder="eg. 2345/2022"
                    id="applicationId"
                    title="Application Id"
                />
                <Button sx={{ alignSelf: 'end' }} variant="contained" type="submit">
                    Search
                </Button>
            </div>
        </form>
    );
};

export { SearchFrom };
