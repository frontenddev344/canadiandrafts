import { Container, Grid, Typography } from '@mui/material';
import {LastinfoMain} from '../LastInfo/style'
export const LastInfo = () => {
    return(
        <LastinfoMain className='mobile-none'>
            <Container maxWidth='lg'>
                <Grid conatiner spacing={2}>
                    <Grid item xs={12}>
                        <div className='AllInfo'>
                            <Typography>
                             At CanadianDrafts , we compare these exceptional casinos based on various factors such as gaming options, entertainment offerings, amenities, customer reviews, and overall experience. Our team of experts thoroughly assesses each casino to ensure that we bring you the top choices available. We strive to provide you with comprehensive and unbiased information, enabling you to make informed decisions and choose a casino that suits your preferences and gaming style.
                            </Typography>
                            <Typography>
                             Whether you're seeking high-stakes excitement, live entertainment, or a vibrant nightlife scene, CanadianDrafts.com is your ultimate resource for finding the best casinos in Canada. Let us guide you to unforgettable gaming experiences, where every roll of the dice and spin of the wheel will leave you on the edge of your seat.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </LastinfoMain>
    );
};