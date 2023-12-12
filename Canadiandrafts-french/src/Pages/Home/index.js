import { Banners } from './BannerDiv'
import { Header } from '../Header'
import { Footer } from '../Footer'
import {Info} from '../Home/Info'
import {Mission} from '../Home/MissionText'
import { Helmet } from 'react-helmet'
export const Home = () => {
    return (
        <>
        <Helmet>
            <title>Masion</title>
        </Helmet>
        <Header />
        <Banners />
        <Info/>
        < Mission/>
        <Footer />
        
        </>
    );
};
