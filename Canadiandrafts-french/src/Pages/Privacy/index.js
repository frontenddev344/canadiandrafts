import { Header } from '../Header';
import { Footer } from '../Footer';
import { SubBanner } from '../../Components/SubBanner';
import img from '../../assets/privacy-policy-banner.jpg';
import {PrivacyInfo } from './PrivacyInfo';
import { PrivacyMain} from '../Privacy/PrivacyMain';
import { Helmet } from 'react-helmet';
export const Privacy = () => {
    return(
        <>
        <Helmet>
          <title>Politique de confidentialité</title>
        </Helmet>
        <Header/>
        <SubBanner className="Contact-sub" img={img} title="Politique de confidentialité"/>
        <PrivacyInfo />
        <PrivacyMain />
        <Footer/>
        </>
    );
};