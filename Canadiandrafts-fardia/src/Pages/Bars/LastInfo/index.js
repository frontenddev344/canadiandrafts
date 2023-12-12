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
                            At CanadianDrafts, we compare these exceptional sports bars based on several factors such as the atmosphere, screen availability, menu options, drink selections, customer reviews, and overall experience. Our team of experts meticulously assesses each establishment to ensure that we bring you the top choices available. We strive to provide you with comprehensive and unbiased information, enabling you to make informed decisions and choose a sports bar that perfectly suits your game-day preferences.
                            </Typography>
                            <Typography>
                            Whether you're a die-hard fan, a casual observer, or simply looking to enjoy a great time with friends, CanadianDrafts.com is your ultimate resource for finding the best sports bars in Canada. Let us guide you to the ultimate sports-watching experience, where the thrill of the game meets the camaraderie of fellow fans, all within a lively and welcoming atmosphere.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </LastinfoMain>
    );
};