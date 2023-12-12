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
                            Chez CanadianDrafts.com, nous croyons que chaque voyage devrait être remarquable. C'est pourquoi nous organisons méticuleusement notre contenu, en menant des recherches approfondies et en nous appuyant sur nos propres expériences de voyage pour vous apporter les informations les plus précises et les plus pertinentes. Que vous planifiez une escapade d'un week-end, un road trip épique ou une aventure inoubliable, nous nous efforçons d'être votre guide de confiance, vous aidant à créer des souvenirs qui dureront toute une vie.
                            </Typography>
                            <Typography>
                            Des sommets imposants des montagnes Rocheuses aux rues animées des villes cosmopolites, des côtes accidentées de l'Atlantique à la beauté sereine des parcs nationaux, nous vous invitons à explorer les joyaux cachés et les destinations emblématiques du Canada à travers nos articles captivants, nos guides détaillés, et recommandations d'experts.
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