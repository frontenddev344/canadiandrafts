import { Container, Grid, Typography } from '@mui/material';
import {ContactMain} from '../ContactSec/style'
import theme from '../../../utils/theme';
import Facebook from '@mui/icons-material/Facebook';
import YouTube  from "@mui/icons-material/YouTube";
import { Instagram, Twitter } from "@mui/icons-material";
import img from '../../../assets/contact-right.jpg'
export const ContactSec = () => {
    return(
        <ContactMain>
            <Container maxWidth={'lg'}>
                <Grid container className='ForBg'>
                    <Grid md={6} px={2}>
                        <div className='Contactleft' >
                            <h3 style={ theme.typography.h3 }>We look forward to hearing from you and being a part of your Canadian adventures!</h3>
                            <Typography>
                                 Please note that due to the high volume of messages we receive, our response time may vary. We appreciate your patience and assure you that your feedback is important to us
                            </Typography>
                            <Typography className='ForSpace'>
                                <h4> Email:</h4> 
                                info@canadiandrafts.com
                            </Typography>
                            <div className='Social'>
                                <h4> Follow Us</h4> 
                                <div className="socialMedia">
                                    <a  href="/"><Facebook /></a>
                                    <a  href="/"><YouTube /></a>
                                    <a  href="/"><Twitter /></a>
                                    <a  href="/"><Instagram /></a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid md={6} px={2}>
                        <div className='conatrgt-img'>
                            <img src={img} alt="img" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </ContactMain>
    );
};