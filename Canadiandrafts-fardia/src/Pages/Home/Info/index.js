import { Container, Grid, Typography, List, ListItem } from "@mui/material";
import {InfoMain} from '../Info/style'
export const Info = () => {
    return(
        <InfoMain>
            <Container maxWidth='lg'>
                <Grid conatiner spacing={2}>
                    <Grid item xs={12}> 
                        <div className="Infotext">
                            <Typography>
                            At CanadianDrafts.com, we understand that planning the perfect trip requires expert knowledge and local insights. Whether you're a curious traveler seeking hidden gems or a seasoned adventurer looking for new recommendations, we've got you covered. Our team of passionate explorers has scoured the vast expanse of Canada to bring you an expertly curated selection of destinations, accommodations, restaurants, and watering holes that embody the essence of Canadian hospitality
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                    <div className="ext-menu">
                        <List sx={{textAlign:'right'}}>
                            
                            <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                                <a href={`${process.env.REACT_APP_BASE_URL}/hotel`}>Hotels</a>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                                <a href={`${process.env.REACT_APP_BASE_URL}/casinos`}>Casinos</a>
                            </ListItem>
                            <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                                <a href={`${process.env.REACT_APP_BASE_URL}/bars`}>Bars</a>
                            </ListItem>
                        
                            <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                                <a href={`${process.env.REACT_APP_BASE_URL}/attrractions`}>Attrractions</a>
                            </ListItem>
                        </List>
                     </div>
                    </Grid>
                </Grid>
            </Container>
        </InfoMain>
    );
};