import styled from "styled-components"
export const SubBannerMain = styled.section`
background: url(${props => props.img});
background-repeat:no-repeat;
background-size:cover;
background-position:center center;
padding:70px 0 200px 0;
position:relative;
    &:after{
        position: absolute;
        content: "";
        inset: 0px;
        background: rgb(0, 0, 0);
        opacity: 0.5;
        width: 100%;
        height: 100%;
    }
    .contain{
        position:relative;
        z-index: 1;
            h1{
                color:#fff;
                text-align:center;
                margin:0;
            }
    }
    @media screen and (max-width:767px){
        h1{font-size: 2rem!important;}
    }
   
`;