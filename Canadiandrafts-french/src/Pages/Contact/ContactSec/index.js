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
                            <h3 style={ theme.typography.h3 }>Nous avons hâte d'avoir de vos nouvelles et de faire partie de vos aventures canadiennes !</h3>
                            <Typography>
                            Veuillez noter qu'en raison du volume élevé de messages que nous recevons, notre temps de réponse peut varier. Nous apprécions votre patience et vous assurons que vos commentaires sont importants pour nous.
                            </Typography>
                            <Typography className='ForSpace'>
                                <h4> Courriel:</h4> 
                                info@canadiandrafts.com
                            </Typography>
                            <div className='Social'>
                                <h4>Suivez-nous</h4> 
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