import {Container, Grid, Typography } from '@mui/material';
import {AboutSecMain} from '../AboutSec/style'
import img from '../../../assets/about-right.jpg'
export const AboutSec = () => {
    return(
        <AboutSecMain>
            <Container maxWidth={'lg'}>
                <Grid container className='AbtRgt'>
                    <Grid md={'6'} px={2}>
                        <div className='textLft'>
                            <Typography>
                                At CanadianDrafts.com, we believe that every journey should be a remarkable one. That's why we meticulously curate our content, conducting thorough research and drawing upon our own travel experiences to bring you the most accurate and insightful information. Whether you're planning a weekend getaway, an epic road trip, or a bucket-list adventure, we strive to be your trusted guide, helping you create memories that will last a lifetime.
                            </Typography>
                            <Typography>
                                From the towering peaks of the Rocky Mountains to the vibrant streets of cosmopolitan cities, from the rugged coastlines of the Atlantic to the serene beauty of national parks, we invite you to explore Canada's hidden gems and iconic destinations through our engaging articles, detailed guides, and expert recommendations.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid md={'6'} px={2}>
                        <div className='imgRight'>
                            <img src={img} alt="img" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </AboutSecMain>
    );

}