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
                mx={3}
                mt={12}
                p={2}
                borderRadius='borderRadius'
                style={{ backgroundColor: '#E6E6FA' }}
            >
                <Box
                    p={2}
                    borderRadius='borderRadius'
                    style={{ backgroundColor: 'white' }}
                >
                    <Typography variant='h4'>Tranding Now</Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <Card />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <Card />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <Card />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <Card />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <Card />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box
                mx={3}
                my={4}
                p={2}
                borderRadius='borderRadius'
                style={{ backgroundColor: '#E6E6FA' }}
            >
                <Box
                    p={2}
                    borderRadius='borderRadius'
                    style={{ backgroundColor: 'white' }}
                >
                    <Typography variant='h4'>Footwear Product</Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box
                mx={3}
                my={4}
                p={2}
                borderRadius='borderRadius'
                style={{ backgroundColor: '#E6E6FA' }}
            >
                <Box
                    p={2}
                    borderRadius='borderRadius'
                    style={{ backgroundColor: 'white' }}
                >
                    <Typography variant='h4'>Footwear Product</Typography>
                </Box>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box
                            style={{ backgroundColor: 'white' }}
                            p={3}
                            mt={2}
                            borderRadius='borderRadius'
                        >
                            <ProductCard />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Footer />
            <Box style={{ backgroundColor: '#E6E6FA' }} mt={4}>
                <MainFooter />
            </Box>
        </div>
    );
}

{
    /* <Box
m={3}
p={2}
textAlign='center'
borderRadius='borderRadius'
style={{ backgroundColor: '#E6E6FA' }}
>
<Grid container spacing={2}>
    <Grid item xs={12} sm={7}>
        <Box
            p={2}
            borderRadius='borderRadius'
            style={{ backgroundColor: 'white' }}
        >
            <Typography variant='h4'>
                Product Details
            </Typography>
        </Box>
    </Grid>
    <Grid item xs={12} sm>
        <Box
            p={2}
            borderRadius='borderRadius'
            style={{ backgroundColor: 'white' }}
        >
            <Typography variant='h4'>Youtube Review</Typography>
        </Box>
    </Grid>
</Grid>
</Box> */
}
