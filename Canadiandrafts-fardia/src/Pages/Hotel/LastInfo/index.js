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
                            At CanadianDrafts, we compare these exceptional hotels based on various factors such as location, amenities, customer reviews, and overall experience. Our team of experts meticulously evaluates each property to ensure that we bring you the very best options available. We strive to provide you with comprehensive and unbiased information, enabling you to make informed decisions and choose accommodations that align with your preferences and desires.
                            </Typography>
                            <Typography>
                            Whether you seek luxurious mountain retreats, urban sophistication, coastal charm, or cultural immersion, CanadianDrafts is your go-to resource for finding the perfect hotel in Canada. Let us guide you on a journey of unparalleled hospitality, where every detail is crafted to create an extraordinary stay and an unforgettable Canadian experience.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </LastinfoMain>
    );
};