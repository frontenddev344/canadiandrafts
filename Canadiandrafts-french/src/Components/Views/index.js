import { Grid, Typography } from '@mui/material';
import {ViewMain} from '../Views/style'
import theme from '../../utils/theme';
export const Views = ({data}) => {
    return(
        <ViewMain className='Vsection'>
            <Grid container className='ViewEvens'>
                <Grid item xs={'12'}  md={'5'} px={2}>
                    <div className='ViewImg'><img src={data?.img} alt="img" /></div>
                </Grid>
                <Grid item xs={'12'}  md={'7'} px={2}>
                    <div className='ViewContent'>
                        {data?.heading ? (<h3 style={theme.typography.h3} >{data?.heading}</h3>) : null }
                        <Typography>
                            {data?.text}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </ViewMain>
    );
}