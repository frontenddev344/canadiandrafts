import styled from "styled-components";

export const HotelsSec = styled.section`
    .item{
        padding: 20px 10px;
    }
    .Brand-Img{
        background:#000;
        padding:10px;
        height: 70px;
        object-fit: contain;
        max-width: 200px;
        width: 100%;

    }
    .card-carousel{
        .owl-prev span, .owl-next span{
            font-size:50px;
            color: var(--primary-color);
            &:hover{
                color:var(--secondary-color);
                background:none !important;
            }
            &:focus{
                background:none !important;
            }
        }
        button.owl-prev {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left:-20px;
            &:hover{
                background:none;
            }
        }
        .owl-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right:-20px;
            &:hover{
                background:none;
            }
        }
    }
`;

export const BrandsWrapper = styled.section`
    img{
        width:100%;
        max-width:200px;
        display:block;
        
        @media screen and (max-width:575px){
            margin-left: auto;
             margin-right: auto;
        }
    }
    .stars{
        max-width:150px;
        margin: 20px 0 0;
        @media screen and (max-width:575px){
            max-width:110px;
            margin: 10px auto 0 auto;
        }
    }
    .MainContainer {
        padding: 0;
    }
    .brand-row{
        background: rgb(249, 252, 255);
        padding:20px;
        border-radius:10px;
        margin-bottom:30px;
        box-shadow:rgb(179 179 179 / 40%) 0px 0px 15px 3px;
        div{
            .WidthClass {
                width: 50%;
                text-align: center;
                .more{
                    padding: 10px 15px;
    display: block;
    width: 100%;
    max-width: 100px;
    margin-left: auto;
    margin-right: auto;
    background: #ffe500;
    text-decoration: none;
                }
            }
            .moreimg {
                background: transparent;
                padding: 0;color: #000;
                display: block;
                text-decoration:none;
            }
            @media screen and (max-width:991px){
            padding: 0 5px;
            }
            @media screen and (max-width:600px){
                padding: 0 5px;
            }
        }
        @media screen and (max-width:991px){
           padding: 20px 5px;
        }
        @media screen and (max-width:575px){
        .NameMain {
            font-size: 16px;
            text-align: center;
            font-weight: bold;
        }
        .AddressMain {
            text-align: center;
            font-size: 16px!important;
            font-weight: 500;
        }
    }
    }
    .score-sec{
        .title{
            text-align:center;
            @media screen and (max-width:991px){
                text-align: left;
                font-size: 14px;
             }
             @media screen and (max-width:991px){
                  text-align: center;
                  font-size: 13px;
             }
        }
    }
    .score {
        text-align: center;
        font-size: 50px;
        font-weight: 700;
        line-height: 10px;
        @media screen and (max-width:991px){
            text-align: left;
            font-size: 20px;
        }
        @media screen and (max-width:575px){
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            margin: 6px auto;
        }
    }
    .disclaimer{
        font-size: 16px;
        text-align: center;
        padding-bottom: 26px;
        font-weight:600;
    }
`;

export const Link = styled.a`
    position:relative;
    background:var(--primary-color);
    display:inline-block;
    text-align:center;
    padding:10px 0;
    width:auto;
    padding:10px 30px;
    max-width:100%;
    margin-right:0;
    margin-left:auto;
    color: var(--white);
    font-weight:600;
    transition: .5s;
    &:hover{
        color: var(--white);
        background: var(--secondary-color);
    }
    @media screen and (max-width:991px){
        font-size:14px;
        padding: 10px 15px;
    }
    @media screen and (max-width:767px){
        font-size:12px;
        padding:10px;
    }
`;
export const Address = styled.div`
    b{
        display:block;
        margin-bottom:5px;
    }
    font-size:18px;
    p{
        margin:0;
        font-size:16px;
        line-height:22px;
        @media screen and (max-width:767px){
            font-size:14px;
        }

    }
`;