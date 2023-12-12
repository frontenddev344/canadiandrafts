import styled from "styled-components"
export const CardMain = styled.div`
 height: 100%;
.Crdmains {
    height: 100%;
    box-shadow: 5px 25px 42px #b1b1b13d;
    transition:all .3s ease-in;
    &:hover{
        box-shadow:none;
    }
    .MediaImg{
        overflow:hidden;
        img{
            height:300px;
            object-fit:cover;
            display:block;
        }
    }
} 

    

`;