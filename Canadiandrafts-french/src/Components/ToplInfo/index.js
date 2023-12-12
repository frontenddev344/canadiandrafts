import { Container, Grid, Typography } from '@mui/material';
import { ToplInfo } from '../ToplInfo/style'
export const ToplInformaition = ({data}) => {
    return(
        <ToplInfo>
            <Container maxWidth='lg' >
                <Grid container >
                    <Grid xs={12}>
                        <div className='TextCaption'>
                            <Typography>
                                     {data.text}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </ToplInfo>
    );
};