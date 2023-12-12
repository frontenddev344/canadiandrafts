import { Header } from '../Header';
import { Footer } from '../Footer';
import { SubBanner } from '../../Components/SubBanner';
import img from '../../assets/bar-banner.jpg'
import {BarInfo} from '../Bars/BarInfo'
import {BarAll} from '../Bars/BarAll'
import {LastInfo} from '../Bars/LastInfo'
import { Helmet } from 'react-helmet';
export const Bars = () => {
    return(
        <>
        <Helmet>
        <title>Barres</title>
        </Helmet>
        <Header/>
        <SubBanner img={img} title="Barres"/>
        <BarInfo />
        <BarAll />
        <LastInfo />
        <Footer/>
        </>
    );
};