import React from 'react';
import { SearchFrom } from './SearchForm';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const SearchLogger = () => {
    const theme = useTheme();

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    };

    return (
        <div>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="primary" href="/">
                        Home
                    </Link>
                    <Link underline="hover" color="primary" href="/">
                        Administation
                    </Link>
                    <Typography color="text.primary">Logger Search</Typography>
                </Breadcrumbs>
                <div
                    style={{
                        height: 1,
                        background: theme.palette.divider,
                        marginBottom: theme.spacing(2),
                        marginTop: theme.spacing(2),
                    }}
                />
            </div>
            <SearchFrom />

            {true && (
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
            )}
        </div>
    );
};

export { SearchLogger };
