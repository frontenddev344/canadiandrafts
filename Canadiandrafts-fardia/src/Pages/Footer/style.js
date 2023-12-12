import styled from "styled-components";
export const FooterMain = styled.footer`
    padding:70px 0 0 0;
    background: #f7f7f7;

    h4{
        margin-top:0px;
        margin-bottom:15px;
    }
    .FooterLogo{
        width:150px;
        margin-bottom:20px;
        a{
            display:block;
            img{
                display:block;
                width:100%;
            }

        }
    }
    ul{
        padding:0;
        max-width: 200px;
        margin-left: auto;
        margin-right: auto;
        li{
            padding-left:0;
            padding-right:0;
            a{
                transition:all .3s;
                text-decoration: none;
                text-align:left;
                color: #666;
                &:hover{
                    color:#ffe500;
                }
                
            }
            
        }

    }
    .socialMedia a {
        color: #ffe500;
        display: inline-flex;
        width: 30px;
        height: 30px;
        background: #666;
        margin-right: 10px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all .3s;
        svg {
            width: 16px;
            height: 16px;
        }
        &:hover{
            color: #666;
            background: #ffe500;
        }
        &:last-child {
            margin-right:0;
        }
       
    }
    .CopySec {
        border-top: 1px solid #ddd;
        margin-top: 70px;
        background: #8f8f8fa3;
        padding: 20px;
        color: #fff;
        text-align:center;
    }
    @media only screen and (max-width:1199px){
        .FooterText{
            margin-bottom:30px;
        }
        ul{
            max-width:100%;
        }
    }
    @media only screen and (max-width:899px){
        .FooterText {
            text-align: center;
        }
        .mrtBtm {
            margin-bottom:30px;
            text-align:center;
            ul{
                text-align: center;
                li{
                    display: inline-block;
                    width: auto;
                    margin-right: 15px;
                    text-align: center;
                }
            }
        }
    }
    @media screen and (max-width:575px){
        .mrtBtm {
            ul{
                li{
                    a{font-size: 14px;}
                }
            }
            
        }
    }
`;
    