import { Container, Grid } from '@mui/material';
import { BarInfotext } from './style'
import {ToplInformaition} from '../../../Components/ToplInfo'
import {BartopData} from '../BarInfo/data'
export const BarInfo = () => {
    return(
        <BarInfotext>
            <Container maxWidth='lg'>
            <Grid container >
                    {BartopData?.map(( item ,index) =>{
                        return(
                            <Grid item xs={12}  className='Cardgrid'>
                                <ToplInformaition key={index} data={item} />
                            </Grid>
                        )  
                    })}
                </Grid>
            </Container>
        </BarInfotext>
    );
};