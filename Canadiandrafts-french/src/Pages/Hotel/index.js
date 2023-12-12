import { Header } from '../Header';
import { Footer } from '../Footer';
import { SubBanner } from '../../Components/SubBanner';
import { HotelInfo } from '../Hotel/HotelInfo'
import { HotelsAll } from '../Hotel/HotelsAll'
import { LastInfo } from '../Hotel/LastInfo'
import img from '../../assets/Hotel-banner.jpg'
import { Helmet } from 'react-helmet';
export const Hotel = () => {
    return (
        <>
            <Helmet>
                <title>Hôtels</title>
            </Helmet>
            <Header/>
            <SubBanner img={img} title="Hôtels"/>
            <HotelInfo />
            <HotelsAll />
            <LastInfo />
            <Footer/>
        </>
    );
};
