import React from 'react';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Button, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { InputLabel } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useFormik } from 'formik';
import moment, { Moment } from 'moment';
import { actionTypeOptions, applicationTypeOptions } from '../../config/constants/selectOptions';
import { TextInput } from '../../components/TextInput';
import { LoggerSearchForm } from '../../models/forms';
import { DateFormats } from '../../helpers/date';
import { Select } from '../../components/Select';
import styles from './styles.module.css';

interface SearchFormProps {
    filters: LoggerSearchForm;
    setFilters: React.Dispatch<React.SetStateAction<LoggerSearchForm>>;
}

function SearchFrom({ filters, setFilters }: SearchFormProps): JSX.Element {
    //form
    const form = useFormik({
        initialValues: filters,
        onSubmit: (values) => {
            setFilters(values);
        },
        onReset: (values) => {
            setFilters(values);
        },
    });

    const handleChangeDate = ({
        name,
        newValue,
    }: {
        name: string;
        newValue: Moment | null;
    }): void => {
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
            <div className={styles.formContainer}>
                <div className={styles.flexOne}>
                    <TextInput
                        className={styles.width90}
                        name="employeeName"
                        error={!!form.errors.employeeName}
                        onChange={form.handleChange}
                        value={form.values.employeeName}
                        placeholder="eg. Joe"
                        id="employeeName"
                        title="Employee Name"
                    />
                </div>
                <div className={styles.flexOne}>
                    <Select
                        className={styles.width90}
                        onChange={form.handleChange}
                        name="actionType"
                        value={form.values.actionType}
                        title="Action Type"
                        labelId="actionType"
                        items={actionTypeOptions}
                    />
                </div>
                <div className={styles.flexOne}>
                    <Select
                        className={styles.width90}
                        onChange={form.handleChange}
                        name="applicationType"
                        value={form.values.applicationType}
                        title="Application Type"
                        labelId="applicationType"
                        items={applicationTypeOptions}
                    />
                </div>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <div className={styles.flexOne}>
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
                                    className={styles.width90}
                                />
                            )}
                        />
                    </div>
                    <div className={styles.flexOne}>
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
                                    className={styles.width90}
                                />
                            )}
                        />
                    </div>
                </LocalizationProvider>
                <div className={styles.flexOne}>
                    <TextInput
                        className={styles.width90}
                        name="applicationId"
                        error={!!form.errors.applicationId}
                        onChange={form.handleChange}
                        value={form.values.applicationId}
                        placeholder="eg. 2345/2022"
                        id="applicationId"
                        title="Application Id"
                    />
                </div>
                <Button sx={{ alignSelf: 'end' }} variant="contained" type="submit">
                    Search
                </Button>
            </div>
            {form.dirty && (
                <div className={styles.restFilters}>
                    <Chip
                        label="Clear Filters"
                        onClick={() => form.resetForm({})}
                        onDelete={() => form.resetForm({})}
                    />
                </div>
            )}
        </form>
    );
}

export { SearchFrom };
