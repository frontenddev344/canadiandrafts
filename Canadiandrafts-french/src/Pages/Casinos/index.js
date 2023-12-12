import { Header } from "../Header";
import { Footer } from "../Footer";
import { SubBanner } from "../../Components/SubBanner";
import { CasinoInfo } from "./CasinoInfo";
import { CasinoAll } from "../Casinos/CasinoAll";
import { LastInfo } from "../Casinos/LastInfo";
import img from "../../assets/casino-banner.jpg";
import { Helmet } from "react-helmet";
export const Casinos = () => {
  return (
    <>
      <Helmet>
        <title>Casinos</title>
      </Helmet>
      <Header />
      <SubBanner img={img} title="Casinos" />
      <CasinoInfo />
      <CasinoAll />
      <LastInfo />
      <Footer />
    </>
  );
};
