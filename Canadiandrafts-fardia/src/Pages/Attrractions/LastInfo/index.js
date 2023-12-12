import { Container, Grid, Typography } from '@mui/material';
import {LastinfoMain} from '../LastInfo/style'
export const LastInfo = () => {
    return(
        <LastinfoMain>
            <Container maxWidth='lg'>
                <Grid conatiner spacing={2}>
                    <Grid item xs={12}>
                        <div className='AllInfo'>
                            <Typography>
                            At CanadianDrafts.com, we compare these remarkable attractions based on various factors such as natural beauty, historical significance, cultural value, accessibility, customer reviews, and overall experience. Our team of experts meticulously evaluates each attraction to ensure that we bring you the top choices available. We strive to provide you with comprehensive and unbiased information, enabling you to plan your itinerary and explore the best that Canada has to offer.
                            </Typography>
                            <Typography>
                            Whether you seek awe-inspiring natural landscapes, immersive historical sites, or vibrant urban experiences, CanadianDrafts.com is your ultimate resource for discovering the best attractions in Canada. Let us guide you through a journey of wonder and discovery, where every step unveils a new facet of this magnificent country.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </LastinfoMain>
    );
};