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
`;