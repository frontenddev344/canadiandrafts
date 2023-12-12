import styled from "styled-components";
export const ContactMain = styled.section`
    padding:90px 0;
    .ForBg {
        background: #f7f7f7;
        padding-top: 20px;
        padding-bottom: 20px;
        .ForSpace {
            margin-top: 30px;
            margin-bottom: 20px;
        }
        h4{
            margin-bottom:5px;
        }
        .Social {
            h4{
             margin-bottom:15px;
             }
        }   
         .socialMedia {
       
            a {
                color: rgb(255, 229, 0);
                display: inline-flex;
                width: 30px;
                height: 30px;
                background: rgb(102, 102, 102);
                margin-right: 10px;
                -webkit-box-align: center;
                align-items: center;
                -webkit-box-pack: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease 0s;
                svg{
                    width: 16px;
                    height: 16px;
                }
                &:hover{
                    color: #666;
                    background: #ffe500;
                }
            }
         }
         .conatrgt-img {
            height: 100%;
            img{
                height:100%;
                object-fit:cover;
            }
        }
     
    }
    @media screen and (max-width:899px){
        h3{
             font-size: 1.5rem!important;
        }
        .Social {
            margin-bottom: 40px;
        }
    }
`;