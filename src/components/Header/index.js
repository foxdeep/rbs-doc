import React from 'react';
import Link from '@docusaurus/Link';

import { Stack } from '@mui/material';

import Login from '@site/static/img/illustration_login.svg';
import Translate from '@docusaurus/Translate';

export default function Header() {
    return (
        <Stack spacing={2} direction='row' m={2} alignItems='center'>
            <Stack spacing={2} alignItems='flex-start'>
                <h1><Translate id='header.title'>Effortless Resource Management, Seamless Efficiency with RBS!</Translate></h1>
                <p>
                    <Translate id='header.subTitle'>
                        RBS streamlines resource allocation and management, making your organization's operations smoother and more efficient than ever.
                    </Translate>
                </p>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    <Translate id='header.btn'>
                        Get Started
                    </Translate>
                </Link>
            </Stack>
            <Login />
        </Stack>
    )
}