import { Container, Grid } from "@mui/material";
import {HotelMain} from '../Hotels/style'
import { Cards } from '../Cards'
import {CardBox} from '../HotelData'
import theme from "../../../utils/theme";
export const Hotels = () => {
    return(
        <HotelMain>
           <Container maxWidth='lg'>
             <h2 style={theme.typography.h2}>Hôtel</h2>
             <Grid container spacing={2}  >
                {CardBox?.map((item, index) => {
                    return(
                        <Grid item xs={'12'} sm={'6'} md={'4'}>
                            <Cards key={index} data={item}/>
                        </Grid>
                    )
                })}
             </Grid>
           </Container>
        </HotelMain>
    );
};