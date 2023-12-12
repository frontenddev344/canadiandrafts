import styled from "styled-components";
export const ViewMain = styled.div`
    padding:40px 0; 
    &:nth-child(even) {
        .ViewEvens{
         flex-direction: row-reverse;
        }
    }
    .ViewEvens {
        align-items: center;

        h3{
            margin-top:0;
        }
    }
    @media screen and (max-width:1199px){
        h3{
            font-size: 1.5rem!important;
        }
    }
    @media screen and (max-width:899px){
        .ViewContent {
            margin-top: 40px;
        }
    }
`;