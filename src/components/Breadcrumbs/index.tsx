import React from 'react';
import {
    Breadcrumbs as MuiBreadcrumbs,
    BreadcrumbsProps as MuiBreadcrumbsProps,
    Link,
    Typography,
} from '@mui/material';

interface BreadcrumbsProps extends MuiBreadcrumbsProps {
    links?: { title: string; link: string | null }[];
}

const mockLinks = [
    { title: 'Home', link: '/' },
    { title: 'Administation', link: '/Administation' },
    { title: 'Logger Search', link: null },
];

const Breadcrumbs = ({ links = mockLinks }: BreadcrumbsProps): JSX.Element => {
    return (
        <MuiBreadcrumbs aria-label="breadcrumb">
            {links.map((link) => {
                if (link.link === null) {
                    return (
                        <Typography key={link.title} color="text.primary">
                            Logger Search
                        </Typography>
                    );
                } else {
                    return (
                        <Link
                            key={link.link + link.title}
                            underline="hover"
                            color="primary"
                            href={link.link}
                        >
                            {link.title}
                        </Link>
                    );
                }
            })}
        </MuiBreadcrumbs>
    );
};

export { Breadcrumbs };
