import { Container, Grid } from '@mui/material';
import { AboutInfotext } from './style'
import {ToplInformaition} from '../../../Components/ToplInfo'
import {AboutData} from '../AboutInfo/data'
export const AboutInfo = () => {
    return(
        <AboutInfotext>
            <Container maxWidth='lg'>
            <Grid container >
                    {AboutData?.map(( item ,index) =>{
                        return(
                            <Grid item xs={12}  className='Cardgrid'>
                                <ToplInformaition key={index} data={item} />
                            </Grid>
                        )  
                    })}
                </Grid>
            </Container>
        </AboutInfotext>
    );
};