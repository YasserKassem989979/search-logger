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
import { DateFormats } from '../../helpers/date';
import moment, { Moment } from 'moment';
import { actionTypeOptions, applicationTypeOptions } from '../../config/constants/selectOptions';

interface SearchFormProps {
    filters: LoggerSearchForm;
    setFilters: React.Dispatch<React.SetStateAction<LoggerSearchForm>>;
}

function SearchFrom({ filters, setFilters }: SearchFormProps): JSX.Element {
    const form = useFormik({
        initialValues: filters,
        onSubmit: (values) => {
            setFilters(values);
        },
    });

    function handleChangeDate({ name, newValue }: { name: string; newValue: Moment | null }): void {
        const event = {
            target: {
                name,
                value: newValue?.format(DateFormats['YYYY-MM-DD']),
            },
        };
        form.handleChange(event);
    }

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
                    items={actionTypeOptions}
                />
                <Select
                    onChange={form.handleChange}
                    name="applicationType"
                    value={form.values.applicationType}
                    sx={{ minWidth: 200 }}
                    title="Application Type"
                    labelId="applicationType"
                    items={applicationTypeOptions}
                />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <div>
                        <InputLabel htmlFor="fromDate">From Date</InputLabel>
                        <DesktopDatePicker
                            value={form.values.fromDate}
                            onChange={(value) =>
                                handleChangeDate({ name: 'fromDate', newValue: moment(value) })
                            }
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
                            onChange={(value) =>
                                handleChangeDate({ name: 'toDate', newValue: moment(value) })
                            }
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
}

export { SearchFrom };
