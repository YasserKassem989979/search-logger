import { createTheme } from '@mui/material/styles';

/**======================
 * default theme provided to MUI
 *========================**/
export const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: '8px 16px',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'black',
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                },
            },
        },
        MuiPagination: {
            styleOverrides: {
                root: {
                    width: '100%',
                },
                ul: {
                    width: '100%',
                    justifyContent: 'center',
                },
            },
        },
    },
});
