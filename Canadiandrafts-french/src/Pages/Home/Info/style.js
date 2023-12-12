import styled from "styled-components";
export const InfoMain = styled.section`
padding: 70px 0px;
background: rgb(255, 254, 246);
    .Infotext{
        text-align:center;
    }
    .ext-menu{
        ul{
            text-align: center;
            margin-top: 30px;
            li{
                margin: 0 15px;
                a{
                    color: #666;
                    text-decoration: none;
                    transition: all .3s;
                    padding: 5px 10px;
                    background: rgb(255, 229, 0);
                    border-radius: 5px;
                    font-weight: 500;
                    margin-bottom: 10px;
                    &:hover{
                        text-decoration:underline;
                    }
                }
            }
        }
    }
`;