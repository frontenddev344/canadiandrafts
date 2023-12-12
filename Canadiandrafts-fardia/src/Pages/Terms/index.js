import { Header } from '../Header';
import { Footer } from '../Footer';
import { SubBanner } from '../../Components/SubBanner';
import{ TermsInfo } from '../Terms/TermsInfo'
import {TermsSec } from '../Terms/TermsSec'
import img from '../../assets/contact-banner.jpg';
import { Helmet } from 'react-helmet';
export const Terms = () => {
    return(
        <>
        <Helmet>
          <title>Terms and conditons</title>
        </Helmet>
        <Header/>
        <SubBanner className="Contact-sub" img={img} title="Terms & Conditions"/>
        <TermsInfo />
        <TermsSec />
        <Footer/>
        </>
    );
};