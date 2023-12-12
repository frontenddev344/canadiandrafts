import { Container, Grid } from '@mui/material';
import { InfoText } from '../HotelInfo/style'
import {ToplInformaition } from '../../../Components/ToplInfo'
import {TopData} from '../HotelInfo/data'
export const HotelInfo = () => {
    return(
        <InfoText>
            <Container maxWidth='lg'>
                <Grid container >
                    {TopData?.map(( item ,index) =>{
                        return(
                            <Grid item xs={12}  className='Cardgrid'>
                                <ToplInformaition key={index} data={item} />
                            </Grid>
                        )  
                    })}
                </Grid>
            </Container>
        </InfoText>
    );
};