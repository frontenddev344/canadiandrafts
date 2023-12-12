import { BannerMain } from './style'
import { Container, Grid, Box, Typography } from '@mui/material';
import theme from '../../../utils/theme';

export const Banners = () => {
    return(
       <BannerMain className='bannerBg'>
            <Container className='containerMain' maxWidth="xl">
                <Grid container maxWidth={"lg"} mx={'auto'} textAlign={'center'}>
                    <Grid item xs={12} sm={12} md={10} mx={'auto'}>
                        <h1  style={{color:theme.palette.Yellow.main, fontSize:theme.typography.h1.fontSize}} >Welcome to CanadianDrafts</h1>
                        <Typography style={theme.typography}>Your ultimate online destination for discovering the finest places to stay, visit, eat, and drink across the captivating landscapes of Canada. We are here to serve as your trusted guide, showcasing the country's diverse and remarkable offerings, and helping you curate unforgettable experiences.</Typography>
                    </Grid>
                </Grid>
            </Container>
       </BannerMain>
    );
};