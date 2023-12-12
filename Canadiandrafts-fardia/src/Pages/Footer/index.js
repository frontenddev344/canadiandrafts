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
                      
                        <div className="FooterText mobile-non">
                            <Typography >
                            Your ultimate online destination for discovering the finest places to stay, visit, eat, and drink across the captivating landscapes of Canada. We are here to serve as your trusted guide, showcasing the country's diverse and remarkable offerings, and helping you curate unforgettable experiences.
                            </Typography>
                        </div>
                        <div className="FooterText mobile-show">
                            <Typography >
                            CanadianDrafts offers a selection of the finest sportsbooks, bookmakers, and betting platforms available in Canada. Every betting site featured on our platform prioritizes safety, security, and prompt payouts. We conduct thorough comparisons of top bookmakers, taking into account factors such as odds, bonuses, and game variety. Register today to enjoy an exclusive bonus with leading Canadian sportsbooks.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid xs={12} md={4} lg={3} px={2} className="mrtBtm">
                        <List>
                            <h4 style={theme.typography.h4} >
                             QUICK LINKS
                            </h4>
                            <ListItem>
                                <a href={ process.env.REACT_APP_BASE_URL }>Home </a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/hotel`}>Hotels</a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/casinos `}>Casinos </a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/bars`}>Bars</a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/contact`}>Contact Us</a>
                            </ListItem>
                            
                        </List>
                    </Grid>
                    <Grid xs={12} md={4} lg={3} px={2} className="mrtBtm">
                        <List>
                            <h4 style={theme.typography.h4} >
                             QUICK LINKS
                            </h4>
                            <ListItem>
                                <a href={`${process.env.REACT_APP_BASE_URL}/attrractions`}>Attrractions</a>
                            </ListItem>
                            <ListItem>
                                <a href={`${process.env.REACT_APP_BASE_URL}/about`}>About us </a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/privacy`}>Privacy Policy</a>
                            </ListItem>
                            <ListItem>
                                <a href={`${ process.env.REACT_APP_BASE_URL }/Terms`}>Terms and conditions</a>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid xs={12} md={4} lg={3} px={2} className="mrtBtm">
                         <h4 style={theme.typography.h4} > FOLLOW US</h4>
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
                    <Grid xs={12}>
                        <Typography>Copyright ©2023 All rights reserved</Typography>
                    </Grid>
                </Grid>
            </div>
        </FooterMain>
    );
};