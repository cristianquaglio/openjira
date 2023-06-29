import { Typography } from '@mui/material';
import { NextPage } from 'next';

import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
    return (
        <Layout>
            <Typography variant='h1' color='primary'>
                Hola Mundo
            </Typography>
        </Layout>
    );
};

export default HomePage;
