import { Container, Grid } from '@mui/material';
import {RestoMain} from '../Resto/style'
import { Cards } from '../Cards'
import {RestoData} from '../RestoData'
import theme from '../../../utils/theme';
export const Resto = () => {
    return(
        <RestoMain>
            <Container maxWidth="lg">
                <h2 style={theme.typography.h2}>Restaurants</h2>
                <Grid container spacing={2}>
                    {RestoData?.map((item , index) => {
                        return(
                            <Grid item xs={12} sm={6} md={4}>
                                <Cards key={index} data={item} />
                            </Grid>
                        )
                    })}

                    
                </Grid>
            </Container>
        </RestoMain>
    );
};