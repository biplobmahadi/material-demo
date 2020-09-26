import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
});

export default function Footer() {
    const classes = useStyles();

    return (
        <Box textAlign='center'>
            <Grid container>
                <Grid container item xs={12} sm>
                    <Grid item xs={12} sm>
                        <Chip label='Full Refund' color='secondary' />
                    </Grid>
                    <Grid item xs={12} sm>
                        <Chip label='Happy Return' color='secondary' />
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm>
                    <Grid item xs={12} sm>
                        <Button
                            variant='contained'
                            size='small'
                            color='primary'
                        >
                            <Box px={3}>Advise</Box>
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Button
                            variant='contained'
                            size='small'
                            color='primary'
                        >
                            <Box px={3}>Complain</Box>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm>
                    <Grid item xs={12} sm>
                        <Chip label='Cash On Delivery' color='secondary' />
                    </Grid>
                    <Grid item xs={12} sm>
                        <Chip label='Delivery Tk. 50' color='secondary' />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
