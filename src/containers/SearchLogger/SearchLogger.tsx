import React from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { InputLabel } from '@mui/material';
import { Select } from '../../components/Select';
import { TextInput } from '../../components/TextInput';

const SearchLogger = () => {
    const [value, setValue] = React.useState<any>('2022-09-29');

    const handleChange = (newValue: any) => {
        setValue(newValue);
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <TextInput placeholder="placeholder" id="name" title="title" />
            <Select
                sx={{ minWidth: 200 }}
                title="select"
                labelId="labelid"
                items={[{ value: 'value', title: 'title' }]}
            />
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <div>
                    <InputLabel htmlFor={'props.id'}>{'select date'}</InputLabel>
                    <DateTimePicker
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} id="props.id" />}
                    />
                </div>
            </LocalizationProvider>
        </div>
    );
};

export default SearchLogger;
