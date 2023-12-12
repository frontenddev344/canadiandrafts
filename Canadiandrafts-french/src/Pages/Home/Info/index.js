import { Container, Grid, Typography, List, ListItem } from "@mui/material";
import { InfoMain } from "../Info/style";
export const Info = () => {
  return (
    <InfoMain>
      <Container maxWidth="lg">
        <Grid conatiner spacing={2}>
          <Grid item xs={12}>
            <div className="Infotext">
              <Typography>
                Chez CanadianDrafts.com, nous comprenons que la planification du
                voyage parfait nécessite des connaissances spécialisées et des
                connaissances locales. Que vous soyez un voyageur curieux à la
                recherche de trésors cachés ou un aventurier chevronné à la
                recherche de nouvelles recommandations, nous avons ce qu'il vous
                faut. Notre équipe d'explorateurs passionnés a parcouru la vaste
                étendue du Canada pour vous offrir une sélection de
                destinations, d'hébergements, de restaurants et de points d'eau
                soigneusement sélectionnés qui incarnent l'essence de
                l'hospitalité canadienne.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="ext-menu">
              <List sx={{ textAlign: "right" }}>
                <ListItem
                  disablePadding
                  sx={{ display: "inline-flex", width: "auto" }}
                >
                  <a href={`${process.env.REACT_APP_BASE_URL}/hôtels`}>Hôtels</a>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ display: "inline-flex", width: "auto" }}
                >
                  <a href={`${process.env.REACT_APP_BASE_URL}/casinos`}>
                    Casinos
                  </a>
                </ListItem>
                <ListItem
                  disablePadding
                  sx={{ display: "inline-flex", width: "auto" }}
                >
                  <a href={`${process.env.REACT_APP_BASE_URL}/barres`}>Barres</a>
                </ListItem>

                <ListItem
                  disablePadding
                  sx={{ display: "inline-flex", width: "auto" }}
                >
                  <a href={`${process.env.REACT_APP_BASE_URL}/attractions`}>
                    Attractions
                  </a>
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Container>
    </InfoMain>
  );
};
