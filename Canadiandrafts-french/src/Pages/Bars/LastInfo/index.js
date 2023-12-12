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
                            Chez CanadianDrafts, nous comparons ces bars sportifs exceptionnels en fonction de plusieurs facteurs tels que l'atmosphère, la disponibilité des écrans, les options de menu, les sélections de boissons, les avis des clients et l'expérience globale. Notre équipe d'experts évalue méticuleusement chaque établissement pour s'assurer que nous vous apportons les meilleurs choix disponibles. Nous nous efforçons de vous fournir des informations complètes et impartiales, vous permettant de prendre des décisions éclairées et de choisir un bar sportif qui correspond parfaitement à vos préférences le jour du match.
                            </Typography>
                            <Typography>
                            Que vous soyez un fan inconditionnel, un observateur occasionnel ou que vous cherchiez simplement à passer du bon temps avec des amis, CanadianDrafts.com est votre ressource ultime pour trouver les meilleurs bars sportifs au Canada. Laissez-nous vous guider vers l'expérience sportive ultime, où le frisson du jeu rencontre la camaraderie des autres fans, le tout dans une atmosphère animée et accueillante.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </LastinfoMain>
    );
};