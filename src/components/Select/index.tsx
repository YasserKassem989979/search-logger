import React from 'react';
import {
    Select as MuiSelect,
    InputLabel,
    MenuItem,
    SelectProps as MuiSlectProps,
} from '@mui/material';

type Item = {
    value: string | number;
    title: string;
};

interface SelectProps extends MuiSlectProps {
    items: Item[];
}

const Select = (props: SelectProps) => {
    return (
        <div>
            {!!props.title && <InputLabel id={props.labelId}>{props.title}</InputLabel>}
            <MuiSelect {...props}>
                {props.items.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.title}
                    </MenuItem>
                ))}
            </MuiSelect>
        </div>
    );
};

export { Select };
