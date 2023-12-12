import { Container, Grid } from '@mui/material';
import { HeaderMain } from '../Header/style'
import Logo  from '../../assets/logo.png'
export const Header = () => {
    return(
        <HeaderMain>
            <Container maxWidth="xl">
                <Grid container maxWidth={'xl'} mx={'auto'}>
                    <Grid xs={3} px={2} display={'flex'} alignItems={'center'}>
                        <div className="logoMian">
                            <a href={ process.env.REACT_APP_BASE_URL }>
                                <img src={Logo} alt="img"  />
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </HeaderMain>
    );
};
