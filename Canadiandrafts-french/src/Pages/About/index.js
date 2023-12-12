import { Header } from '../Header';
import { Footer } from '../Footer';
import { SubBanner } from '../../Components/SubBanner';
import img from '../../assets/about-us-banner.jpg'
import {AboutInfo} from '../About/AboutInfo'
import {AboutSec} from '../About/AboutSec'
import { Helmet } from 'react-helmet';
export const About = () => {
    return(
        <>
        <Helmet>
        <title>About</title>
        </Helmet>
        <Header/>
        <SubBanner img={img} title="À propos de nous"/>
        <AboutInfo />
        <AboutSec />
        <Footer/>
        </>
    );
};