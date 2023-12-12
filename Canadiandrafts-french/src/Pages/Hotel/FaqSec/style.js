import styled from "styled-components"

export const FaqDiv = styled.section`
    padding:70px 0;
    h2{
        margin-bottom: 60px;
        margin-top: 0px;
        text-align: center;
        position: relative;
        &:after{
            content: "";
            position: absolute;
            bottom: -20px;
            left: 50%;
            width: 70px;
            height: 4px;
            background: rgb(255, 229, 0);
            transform: translateX(-50%);
        }
    }

`;