import Link from 'next/link';
import Head from 'next/head';
import ButtonAppBar from '../components/ButtonAppBar';
import Card from '../components/Card';
import ProductTable from '../components/ProductTable';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import MainFooter from '../components/MainFooter';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function MyOrders() {
    return (
        <div>
            {' '}
            <Head>
                <title>My Orders</title>
                <link rel='icon' href='/a.ico' />
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                ></meta>
            </Head>
            <ButtonAppBar />
            <Box
                mt={11}
                mx={3}
                p={2}
                borderRadius='borderRadius'
                style={{ backgroundColor: '#E6E6FA' }}
            >
                <Box
                    p={2}
                    boxShadow={1}
                    display='flex'
                    alignItems='center'
                    borderRadius='borderRadius'
                    style={{ backgroundColor: 'white' }}
                >
                    <Box height='100%' flexGrow={1}>
                        <Typography variant='h5'>
                            <strong>My Orders</strong>{' '}
                            <Chip
                                label={`Total ${12}`}
                                color='secondary'
                                size='small'
                            />
                        </Typography>
                    </Box>
                    <Box height='100%'>
                        <Button
                            variant='contained'
                            size='small'
                            color='secondary'
                        >
                            <Box px={3}>Track My Order</Box>
                        </Button>
                    </Box>
                </Box>
                <Box
                    p={2}
                    mt={3}
                    boxShadow={1}
                    borderRadius='borderRadius'
                    style={{ backgroundColor: 'white' }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <Link href='/my-order-details'>
                                <Box
                                    p={2}
                                    boxShadow={1}
                                    borderRadius='borderRadius'
                                    style={{ backgroundColor: '#E6E6FA' }}
                                >
                                    <Typography variant='h4'>
                                        Orders Briefly
                                    </Typography>
                                </Box>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box
                                p={2}
                                boxShadow={1}
                                borderRadius='borderRadius'
                                style={{ backgroundColor: '#E6E6FA' }}
                            >
                                <Typography variant='h4'>
                                    Orders Briefly
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box
                                p={2}
                                boxShadow={1}
                                borderRadius='borderRadius'
                                style={{ backgroundColor: '#E6E6FA' }}
                            >
                                <Typography variant='h4'>
                                    Orders Briefly
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box
                                p={2}
                                boxShadow={1}
                                borderRadius='borderRadius'
                                style={{ backgroundColor: '#E6E6FA' }}
                            >
                                <Typography variant='h4'>
                                    Orders Briefly
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box
                                p={2}
                                boxShadow={1}
                                borderRadius='borderRadius'
                                style={{ backgroundColor: '#E6E6FA' }}
                            >
                                <Typography variant='h4'>
                                    Orders Briefly
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box
                                p={2}
                                boxShadow={1}
                                borderRadius='borderRadius'
                                style={{ backgroundColor: '#E6E6FA' }}
                            >
                                <Typography variant='h4'>
                                    Orders Briefly
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box style={{ backgroundColor: '#E6E6FA' }} mt={4}>
                <MainFooter />
            </Box>
        </div>
    );
}
