import { Container, Grid, Typography } from "@mui/material";
import {ExtranalInfo} from '../extrainfo/style'
export const InfoDiv = ({data}) => {
    return(
        <ExtranalInfo>
            <Container maxWidth='lg'>
                <Grid conatiner spacing={2}>
                    <Grid item xs={12}> 
                        <div className="Infotext">
                            <Typography>{data.text}</Typography>
                        </div>
                    </Grid>
                  
                </Grid>
            </Container>
        </ExtranalInfo>
    );
};