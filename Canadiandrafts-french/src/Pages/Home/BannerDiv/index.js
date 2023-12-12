import { BannerMain } from "./style";
import { Container, Grid, Box, Typography } from "@mui/material";
import theme from "../../../utils/theme";

export const Banners = () => {
  return (
    <BannerMain className="bannerBg">
      <Container className="containerMain" maxWidth="xl">
        <Grid container maxWidth={"lg"} mx={"auto"} textAlign={"center"}>
          <Grid item xs={12} sm={12} md={10} mx={"auto"}>
            <h1
              style={{
                color: theme.palette.Yellow.main,
                fontSize: theme.typography.h1.fontSize,
              }}
            >
              Bienvenue sur CanadianDrafts
            </h1>
            <Typography style={theme.typography}>
              Votre destination en ligne
              ultime pour découvrir les meilleurs endroits où séjourner,
              visiter, manger et boire à travers les paysages captivants du
              Canada. Nous sommes ici pour vous servir de guide de confiance,
              mettant en valeur les offres diverses et remarquables du pays et
              vous aidant à organiser des expériences inoubliables.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </BannerMain>
  );
};
