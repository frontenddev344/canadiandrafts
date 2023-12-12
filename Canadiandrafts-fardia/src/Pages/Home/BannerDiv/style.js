import styled from 'styled-components'
import BG from "../../../assets/banner.jpg"
export const BannerMain = styled.section`
    background:url(${BG}) ;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding:100px 0;
    position:relative;
    &:after{
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
        opacity: 0.5;
        width: 100%;
        height: 100%;
        z-index: 99;
    }
    .containerMain{z-index:999;position:relative;}
    h1{
        margin-top:0;
        text-align:center;
        margin-bottom:20px;

    }
    @media  screen and (max-width:767px){
       .containerMain{

        h1{
            font-size: 2rem!important;
        }
        p{
            font-size:16px!important;
        }
    }
    }
  
`;