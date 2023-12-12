import styled from "styled-components";
export const FaqMain = styled.div`
        margin-bottom: 20px;
        .AccordNew {
            box-shadow: none;
            background: #666666;
            border-radius: 0!important;
              &:hover{
                background:rgb(28 28 28);
             }
            .accordhead {
                color: #fff;
                border-bottom:1px solid rgb(255 255 255 / 33%);
                p{
                    font-size:20px;
                    font-weight:500;
                }
                path{
                    color:#fff;
                }
            }
            .accorddata{
                color:#fff;
                text-align:left;
            }
        }
`;