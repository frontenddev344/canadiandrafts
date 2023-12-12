import { Container, Grid } from '@mui/material';
import { HotelAllmain } from '../HotelsAll/style'
import { Cards } from '../../../Components/Cards'
import { DataMain } from '../HotelsAll/data'
export const HotelsAll = () => {
    return(
        <HotelAllmain>
            <Container maxWidth='lg'>
                <Grid container spacing={4}>
                   {DataMain?.map(( item ,index) =>{
                    return(
                        <Grid item xs={12} sm={6} md={4} className='Cardgrid'>
                            <Cards key={index} data={item} />
                        </Grid>
                    )
                        
                    })}
                    

                </Grid>
            </Container>
        </HotelAllmain>
    );
};