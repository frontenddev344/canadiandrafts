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
                            Chez CanadianDrafts, nous comparons ces hôtels exceptionnels en fonction de divers facteurs tels que l'emplacement, les commodités, les commentaires des clients et l'expérience globale. Notre équipe d'experts évalue méticuleusement chaque propriété pour s'assurer que nous vous proposons les meilleures options disponibles. Nous nous efforçons de vous fournir des informations complètes et impartiales, vous permettant de prendre des décisions éclairées et de choisir des hébergements qui correspondent à vos préférences et désirs.
                            </Typography>
                            <Typography>
                            Que vous recherchiez des retraites de montagne luxueuses, une sophistication urbaine, un charme côtier ou une immersion culturelle, CanadianDrafts est votre ressource incontournable pour trouver l'hôtel parfait au Canada. Laissez-nous vous guider dans un voyage d'hospitalité inégalée, où chaque détail est conçu pour créer un séjour extraordinaire et une expérience canadienne inoubliable.
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </LastinfoMain>
    );
};