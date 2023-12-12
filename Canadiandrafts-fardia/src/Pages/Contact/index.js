import { Header } from '../Header';
import { Footer } from '../Footer';
import { SubBanner } from '../../Components/SubBanner';
import img from '../../assets/contact-banner.jpg'
import {ContactInfo} from '../Contact/ContactInfo'
import {ContactSec} from '../Contact/ContactSec'
import { Helmet } from 'react-helmet';
export const Contact = () => {
    return(
        <>
        <Helmet>
          <title>Contact Us</title>
        </Helmet>
        <Header/>
        <SubBanner className="Contact-sub" img={img} title="Contact Us"/>
        <ContactInfo />
        <ContactSec />
        <Footer/>
        </>
    );
};