import styled from "styled-components";
export const HeaderMain = styled.header`
position: absolute;
    display: block;
    width: 100%;
    z-index: 9999;
    left: 0;
    right: 0;
    top: 0;
    background-color: #262727;
    padding:15px 0;
    .logoMian{
        width:150px;
        a{
            display:block;
            img{
                display:block;
                width:100%;
                @media screen and (max-width:767px){
                    width:120px;
                }
            }
        }
    }
.rightMenu {
    display:flex;
    justify-content:flex-end;
    align-items:center;
    ul{
        width:100%;
        li{
            list-style-type:none;
            &:last-child a{
                margin-right:0;
            }
        }
        a{
            font-size: 16px;
            line-height: 14px;
            color: #fff;
            font-weight: 400;
            text-align: center;
            margin-right: 30px;
            padding: 8px 0;
            border-bottom: 3px solid transparent;
            text-decoration:none;
            transition:all .3s;
            &:hover{
                color:#ffe500;
                border-color:#ffe500;
            }
        }
    }
    .close {
        text-align: right;
        display: none;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        &:hover{
          color: red;
    }
    
}
.active {
    font-weight: bold;
    color: rgb(255, 229, 0);
  }
.menu-items.open .close {
    display: block;
    color: #fff;
    }
    .menu-items {
        @media screen and (max-width:991px){
            display: none;
            width:0;
        }
    }
    .toggle-btn {
    width: 30px;
    display:none;
    @media screen and (max-width:991px){
        display: block;
        
    }
    }
    .menu-links.open {
    display: block;
    }
    
    .menu-items.open {
    display: block;
    position: fixed;
    right: 0;
    top: 0;
    width: 200px !important;
    background: #262727;
    height: 100%;
    padding: 20px;
    }
    
    .menu-items.open li {
    width: 100%;
    padding-bottom: 15px;
    }
    
    .menu-items.open .close:hover {
    color: #ffe500;
    }   
`;