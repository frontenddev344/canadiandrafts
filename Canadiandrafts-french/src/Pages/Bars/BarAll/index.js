import { Container, Grid } from '@mui/material';
import { BarAllmain } from './style'
import { Cards } from '../../../Components/Cards'
import { BarDataMain } from './data'
export const BarAll = () => {
    return(
        <BarAllmain>
            <Container maxWidth='lg'>
                <Grid container spacing={4}>
                   {BarDataMain?.map(( item ,index) =>{
                    return(
                        <Grid item xs={12} sm={6} md={4} className='Cardgrid'>
                            <Cards key={index} data={item} />
                        </Grid>
                    )   
                    })}
                    

                </Grid>
            </Container>
        </BarAllmain>
    );
};