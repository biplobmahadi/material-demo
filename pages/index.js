import Head from 'next/head';
import ButtonAppBar from '../components/ButtonAppBar';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import MainFooter from '../components/MainFooter';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
export default function Home() {
    return (
        <div>
            <Head>
                <title>Next App with Material-Ui</title>
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
            {/* <Carousel /> */}
            <Box
                style={{ backgroundColor: '#E6E6FA' }}
                mx={3}
                mt={12}
                p={2}
                borderRadius='borderRadius'
            >
                <Typography gutterBottom variant='h3'>
                    Toothbrush
                </Typography>
                <Divider variant='middle' />
                <Box my={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box
                style={{ backgroundColor: '#E6E6FA' }}
                mx={3}
                mt={4}
                p={2}
                borderRadius='borderRadius'
            >
                <Typography gutterBottom variant='h3'>
                    Toothbrush
                </Typography>
                <Divider variant='middle' />
                <Box my={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box
                style={{ backgroundColor: '#E6E6FA' }}
                mx={3}
                my={4}
                p={2}
                borderRadius='borderRadius'
            >
                <Typography gutterBottom variant='h3'>
                    Toothbrush
                </Typography>
                <Divider variant='middle' />
                <Box my={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box
                style={{ backgroundColor: '#E6E6FA' }}
                mx={3}
                my={4}
                p={2}
                borderRadius='borderRadius'
            >
                <Typography gutterBottom variant='h3'>
                    Tranding...
                </Typography>
                <Divider variant='middle' />
                <Box my={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                        <Grid item xs={12} sm>
                            <Card />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box
                style={{ backgroundColor: '#E6E6FA' }}
                mx={3}
                my={4}
                p={2}
                borderRadius='borderRadius'
            >
                <Typography gutterBottom variant='h3'>
                    Product...
                </Typography>
                <Divider variant='middle' />
                <Box my={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} sm>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} sm>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} sm>
                            <ProductCard />
                        </Grid>
                        <Grid item xs={12} sm>
                            <ProductCard />
                        </Grid>
                    </Grid>
                </Box>
            </Box>{' '}
            <Footer />
            <Box style={{ backgroundColor: '#E6E6FA' }} mt={4}>
                <MainFooter />
            </Box>
        </div>
    );
}
