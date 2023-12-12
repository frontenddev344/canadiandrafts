import { Container, Grid } from '@mui/material';
import { TermsText } from './style'
import {ToplInformaition} from '../../../Components/ToplInfo'
import {TermsData} from './data'
export const TermsInfo = () => {
    return(
        <TermsText>
            <Container maxWidth='lg'>
            <Grid container >
                    {TermsData?.map(( item ,index) =>{
                        return(
                            <Grid item xs={12}  className='Cardgrid'>
                                <ToplInformaition key={index} data={item} />
                            </Grid>
                        )  
                    })}
                </Grid>
            </Container>
        </TermsText>
    );
};