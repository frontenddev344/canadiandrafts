import { Container, Grid } from '@mui/material';
import  { Fqa } from '../../../Components/Faq'
import { DataFaq } from '../../../Components/Faq/data'
import theme from '../../../utils/theme'
import { FaqDiv } from '../FaqSec/style'
export const FaqSec= () => {
    return(
        <FaqDiv>
            <Container>
                <Grid Container>
                    <h2 style={theme.typography.h2}>FAQ</h2>
                    <Grid xs={'12'}>
                        <div className="AccodionMain">
                            {DataFaq?.map((item, index) => {
                                return(
                                    <Fqa key={index} acc_id={`acc_${index}`} data={item} />           
                                )
                            })}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </FaqDiv>
    );
};