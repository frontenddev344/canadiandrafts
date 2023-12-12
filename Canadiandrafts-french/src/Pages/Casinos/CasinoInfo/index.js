import { Container, Grid } from '@mui/material';
import { CasinoText } from './style'
import {ToplInformaition} from '../../../Components/ToplInfo'
import {CasintopData} from '../CasinoInfo/data'
export const CasinoInfo = () => {
    return(
        <CasinoText>
            <Container maxWidth='lg'>
            <Grid container >
                    {CasintopData?.map(( item ,index) =>{
                        return(
                            <Grid item xs={12}  className='Cardgrid'>
                                <ToplInformaition key={index} data={item} />
                            </Grid>
                        )  
                    })}
                </Grid>
            </Container>
        </CasinoText>
    );
};