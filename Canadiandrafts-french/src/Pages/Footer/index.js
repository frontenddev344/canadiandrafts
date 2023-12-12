import { Container, Grid, List, ListItem, Typography} from "@mui/material";
import { FooterMain } from './style'
import theme from "../../utils/theme";
import Facebook from '@mui/icons-material/Facebook';
import YouTube  from "@mui/icons-material/YouTube";
import { Instagram, Twitter } from "@mui/icons-material";
export const Footer = () => {
    return(
        <FooterMain>
            <Container maxWidth={'xl'}>
                <Grid container>
                    <Grid xs={12} md={12} lg={3} px={2}>
                      
                        <div className="FooterText">
                            <Typography >
                            Votre destination en ligne ultime pour découvrir les meilleurs endroits où séjourner, visiter, manger et boire à travers les paysages captivants du Canada. Nous sommes ici pour vous servir de guide de confiance, mettant en valeur les offres diverses et remarquables du pays et vous aidant à organiser des expériences inoubliables.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} md={4} lg={3} px={2} className="mrtBtm">
                        <List>
                            <h4 style={theme.typography.h4} >
                              LIENS RAPIDES
                            </h4>
                            <ListItem>
                                <a href={ process.env.REACT_APP_BASE_URL }>Maison </a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/hôtels`}>Hôtels</a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/casinos `}>Casino </a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/barres`}>barres</a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/contactez-nous`}>Contactez-nous</a>
                            </ListItem>
                            
                        </List>
                    </Grid>
                    <Grid sm={12} md={4} lg={3} px={2}>
                        <List>
                            <h4 style={theme.typography.h4} >
                            LIENS RAPIDES
                            </h4>
                            <ListItem>
                                <a href={`${process.env.REACT_APP_BASE_URL}/attractions`}>Attractions</a>
                            </ListItem>
                            <ListItem>
                                <a href={`${process.env.REACT_APP_BASE_URL}/à-propos`}>À propos de nous</a>
                            </ListItem>
                            <ListItem>
                            <a href={`${process.env.REACT_APP_BASE_URL}/politique-de-confidentialité`}>Politique de confidentialité</a>
                            </ListItem>
                            <ListItem>
                            <a href={`${process.env.REACT_APP_BASE_URL}/termes-et-conditions`}>Termes et conditions</a>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid sm={12} md={4} lg={3} px={2}>
                         <h4 style={theme.typography.h4} >Suivez-nous</h4>
                        <div className="socialMedia">
                            <a  href="/"><Facebook /></a>
                            <a  href="/"><YouTube /></a>
                            <a  href="/"><Twitter /></a>
                            <a  href="/"><Instagram /></a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className="CopySec">
                <Grid container>
                    <Grid md={12}>
                        <Typography>Copyright ©2023 All rights reserved</Typography>
                    </Grid>
                </Grid>
            </div>
        </FooterMain>
    );
};