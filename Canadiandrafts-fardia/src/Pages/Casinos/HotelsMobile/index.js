import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { Data } from "./data";

import { BrandsWrapper, HotelsSec, Address, Link } from "./style";


export const HotelsMobile = () => {
 
  return (
    <HotelsSec className="Holets-Mobile">
      <Container>
        <h2>Online Betting Sites Canada</h2>
        <BrandsWrapper>
          <Container className="MainContainer">
            {Data?.map((item, index) => {
              return (
                <div className="brand-row">
                <Grid container spacing={3} alignItems="center">
                  <Grid sm={3}  xs={6} className="WidthClass">
                    <div >
                    <Link href={item?.link} className="moreimg"><img src={item.brand} alt="Brand logo" className="Brand-Img" /></Link>
                      <img src={item?.img} alt="Rating" className="stars"/>
                    </div>
                  </Grid>
                  <Grid sm={4} xs={6} className="WidthClass">
                    <p className="bonus-main">Free Bonus</p>
                  < Address>
                  <Link href={item?.link} className="moreimg"> <b className="NameMain">{item.name}</b>
                        <p className="AddressMain">{item?.address}</p></Link>
                    </Address>
                  </Grid>
                  <Grid sm={2} xs={6} className="WidthClass">
                    <div class="score-sec">
                        <p className="score">Ranking {item?.score}</p>
                        <p className="title">Votes (795)</p>
                    </div>
                  </Grid>
                  <Grid md={3} textAlign="right" className="WidthClass">
                   <Link href={item?.link} className="more">Sign In</Link>
                  </Grid>
                  <Grid sm={12} xs={12}>
                    <p class="disclaimer">{item?.disclaimer}</p>
                  </Grid>
                </Grid>
                </div>
              );
            })}
          </Container>
        </BrandsWrapper>
      </Container>
    </HotelsSec>
  );
};
