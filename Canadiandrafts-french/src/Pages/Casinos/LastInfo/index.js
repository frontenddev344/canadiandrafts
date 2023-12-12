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
                            Chez CanadianDrafts, nous comparons ces casinos exceptionnels en fonction de divers facteurs tels que les options de jeu, les offres de divertissement, les commodités, les avis des clients et l'expérience globale. Notre équipe d'experts évalue soigneusement chaque casino pour s'assurer que nous vous proposons les meilleurs choix disponibles. Nous nous efforçons de vous fournir des informations complètes et impartiales, vous permettant de prendre des décisions éclairées et de choisir un casino qui correspond à vos préférences et à votre style de jeu.
                            </Typography>
                            <Typography>
                            Que vous recherchiez de l'excitation à enjeux élevés, des divertissements en direct ou une vie nocturne animée, CanadianDrafts.com est votre ressource ultime pour trouver les meilleurs casinos au Canada. Laissez-nous vous guider vers des expériences de jeu inoubliables, où chaque lancer de dés et tour de roue vous laissera sur le bord de votre siège.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </LastinfoMain>
    );
};