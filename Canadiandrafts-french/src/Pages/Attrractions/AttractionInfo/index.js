import { Container, Grid } from '@mui/material';
import { AttractionInfotext } from './style'
import {ToplInformaition} from '../../../Components/ToplInfo'
import {AttractionData} from '../AttractionInfo/data'
export const AttractionInfo = () => {
    return(
        <AttractionInfotext>
            <Container maxWidth='lg'>
            <Grid container >
                    {AttractionData?.map(( item ,index) =>{
                        return(
                            <Grid item xs={12}  className='Cardgrid'>
                                <ToplInformaition key={index} data={item} />
                            </Grid>
                        )  
                    })}
                </Grid>
            </Container>
        </AttractionInfotext>
    );
};