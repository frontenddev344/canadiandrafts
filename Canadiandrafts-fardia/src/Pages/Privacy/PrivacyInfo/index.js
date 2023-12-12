import { Container, Grid } from '@mui/material';
import { PrivacyText } from './style'
import {ToplInformaition} from '../../../Components/ToplInfo'
import {PrivacyData} from './data'
export const PrivacyInfo = () => {
    return(
        <PrivacyText>
            <Container maxWidth='lg'>
            <Grid container >
                    {PrivacyData?.map(( item ,index) =>{
                        return(
                            <Grid item xs={12}  className='Cardgrid'>
                                <ToplInformaition key={index} data={item} />
                            </Grid>
                        )  
                    })}
                </Grid>
            </Container>
        </PrivacyText>
    );
};