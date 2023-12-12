import { Container, Grid } from "@mui/material";
import {BarsMain} from '../Bars/style'
import { Cards } from '../Cards'
import {BarData} from '../BarData'
export const Bars = () => {
    return(
        <BarsMain>
            <Container maxWidth='lg'>
                <h2 >Bars</h2>
                <Grid container spacing={2}>
                    {BarData?.map((item, index) => {
                        return(
                            <Grid item xs={'12'} sm={'6'} md={'4'}>
                                <Cards key={index} data={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </BarsMain>
    );
};