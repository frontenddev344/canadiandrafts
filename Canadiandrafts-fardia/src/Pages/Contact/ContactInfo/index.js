import { Container, Grid } from '@mui/material';
import { ContactText } from './style'
import {ToplInformaition} from '../../../Components/ToplInfo'
import {ContactData} from '../ContactInfo/data'
export const ContactInfo = () => {
    return(
        <ContactText>
            <Container maxWidth='lg'>
            <Grid container >
                    {ContactData?.map(( item ,index) =>{
                        return(
                            <Grid item xs={12}  className='Cardgrid'>
                                <ToplInformaition key={index} data={item} />
                            </Grid>
                        )  
                    })}
                </Grid>
            </Container>
        </ContactText>
    );
};