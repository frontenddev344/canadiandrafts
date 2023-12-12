import styled from "styled-components";
export const RestoMain = styled.section`
    padding:70px 0;
    h2{
        margin-bottom:60px;
        margin-top:0;
        text-align:center;
        position:relative;
        &:after{
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50%;
            width: 70px;
            height: 4px;
            background: #ffe500;
            transform: translateX(-50%);
        }
    }
`;