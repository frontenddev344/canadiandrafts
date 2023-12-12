import { Header } from '../Header';
import { Footer } from '../Footer';
import {SubBanner} from '../../Components/SubBanner'
import img from '../../assets/attraction-banner.jpg'
import {AttractionInfo} from '../Attrractions/AttractionInfo'
import {ViewsPlaces} from '../Attrractions/ViewsPlaces'
import {LastInfo} from '../Attrractions/LastInfo'
import { Helmet } from 'react-helmet';
export const Attrractions = () => {
    return(
        <>
        <Helmet>
            <title>Casinos</title>
        </Helmet>
        <Header/>
        <SubBanner img={img} title="Attractions"/>
        <AttractionInfo />
        <ViewsPlaces />
        <LastInfo />
        <Footer/>
        </>
    );
};