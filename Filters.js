import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

function Filter({ options, label, value, onChange }) {
    return (
        <Box sx={{ minWidth: 120, marginBottom: 2 }}>
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    label={label}
                    onChange={onChange}
                >
                    {options.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Filter;
