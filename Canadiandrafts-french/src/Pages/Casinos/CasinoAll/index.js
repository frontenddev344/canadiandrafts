import { Container, Grid } from '@mui/material';
import { CasinoAllmain } from './style'
import { Cards } from '../../../Components/Cards'
import { CasinoDataMain } from './data'
export const CasinoAll = () => {
    return(
        <CasinoAllmain>
            <Container maxWidth='lg'>
                <Grid container spacing={4}>
                   {CasinoDataMain?.map(( item ,index) =>{
                    return(
                        <Grid item xs={12} sm={6} md={4} className='Cardgrid'>
                            <Cards key={index} data={item} />
                        </Grid>
                    )   
                    })}
                    

                </Grid>
            </Container>
        </CasinoAllmain>
    );
};