import React from 'react';
import { OutlinedInput, InputLabel, OutlinedInputProps } from '@mui/material';

const TextInput = (props: OutlinedInputProps): JSX.Element => {
    return (
        <div>
            {!!props.title && <InputLabel htmlFor={props.id}>{props.title}</InputLabel>}
            <OutlinedInput {...props} />
        </div>
    );
};

export { TextInput };
