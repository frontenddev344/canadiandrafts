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
                            Chez CanadianDrafts.com, nous comparons ces attractions remarquables en fonction de divers facteurs tels que la beauté naturelle, l'importance historique, la valeur culturelle, l'accessibilité, les avis des clients et l'expérience globale. Notre équipe d'experts évalue méticuleusement chaque attraction pour s'assurer que nous vous proposons les meilleurs choix disponibles. Nous nous efforçons de vous fournir des informations complètes et impartiales, vous permettant de planifier votre itinéraire et d'explorer le meilleur que le Canada a à offrir.
                            </Typography>
                            <Typography>
                            Que vous recherchiez des paysages naturels impressionnants, des sites historiques immersifs ou des expériences urbaines dynamiques, CanadianDrafts.com est votre ressource ultime pour découvrir les meilleures attractions au Canada. Laissez-vous guider à travers un voyage d'émerveillement et de découverte, où chaque pas dévoile une nouvelle facette de ce magnifique pays.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </LastinfoMain>
    );
};