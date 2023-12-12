import { Container, Grid } from "@mui/material";
import {InfoDiv} from '../../../Components/extrainfo'
import {MissionMain} from '../MissionText/style'
import {MissionData} from '../MissionText/data'
import Img from '../../../assets/bar_img01.jpg'
export const Mission = () => {
    return(
        <MissionMain>
            <Container  maxWidth="xl">
                <Grid container  >
                    <Grid item xs={'12'} md={'6'} >
                        {MissionData?.map((item, index) => {
                            return(
                            <InfoDiv key={index} data={item}  />
                            )
                        })}
                    </Grid>
                    <Grid xs={'12'} md={'6'}>
                        <div className="img-rght">
                            <img src={Img}  alt="img" />
                        </div>
                    </Grid>
                </Grid>
             </Container>
        </MissionMain>
    );
};