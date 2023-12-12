import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grid, List, ListItem } from '@mui/material';
import { HeaderMain } from '../Header/style'
import Logo  from '../../assets/logo.png'
import MenuIcon from '../../assets/menuIcon.png'
export const Header = () => {
    const [toggle, setToggle] = useState(0);
    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname === path;
    };
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
                   <Grid  xs={9} px={2} className='rightMenu'>
                   <img src={MenuIcon} className='toggle-btn' alt="menu icon" onClick={() => setToggle(1)}/>
                    <List sx={{textAlign:'right'}} className={toggle === 1 ? 'menu-items open' : 'menu-items'}>
                    <span className="close" onClick={() => setToggle(0)}>X</span>
                        <ListItem disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                            <a href={process.env.REACT_APP_BASE_URL} className={isLinkActive('/') ? 'active' : ''}>Maison</a>
                        </ListItem>
                        <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                            <a href={`${process.env.REACT_APP_BASE_URL}/hôtels`} className={isLinkActive('/hôtels') ? 'active' : ''}>Hôtels</a>
                        </ListItem>
                        <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                            <a href={`${process.env.REACT_APP_BASE_URL}/casinos`} className={isLinkActive('/casinos') ? 'active' : ''}>casinos</a>
                        </ListItem>
                        <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                            <a href={`${process.env.REACT_APP_BASE_URL}/barres`} className={isLinkActive('/barres') ? 'active' : ''}>Barres</a>
                        </ListItem>
                        <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                            <a href={`${process.env.REACT_APP_BASE_URL}/attractions`} className={isLinkActive('/attractions') ? 'active' : ''}>Attractions
</a>
                        </ListItem>
                        <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                            <a href={`${process.env.REACT_APP_BASE_URL}/à-propos`} className={isLinkActive('/à-propos') ? 'active' : ''}>À propos de nous</a>
                        </ListItem>
                        <ListItem  disablePadding sx={{ display:'inline-flex', width:'auto' }}>
                            <a href={`${process.env.REACT_APP_BASE_URL}/contactez-nous`} className={isLinkActive('/Contactez-nous') ? 'active' : ''}>Contactez-nous</a>
                        </ListItem>
                    </List>
                   </Grid>
                </Grid>
            </Container>
        </HeaderMain>
    );
};
