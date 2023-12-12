import {SubBannerMain} from './style'
import { Container, Grid } from '@mui/material';
import theme from '../../utils/theme'
export const SubBanner = ({className, img, title}) => {
    return(
        <SubBannerMain className={className} img={img}>
            <Container maxWidth="xl" className='contain'>
                <Grid container > 
                    <Grid xs={'12'}>
                        <div className='BannerCaption'>
                            <h1 style={theme.typography.h1}>{title}</h1>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </SubBannerMain>
    );
};