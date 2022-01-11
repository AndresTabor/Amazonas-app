import styled from "styled-components";

export const BarraNav = styled.nav`
    width: 100vw;
    height: 64px;
    background-color: var(--primary-color);
    display: flex;
    padding: 0 24px;

    & img {
        height: 40px;
        align-self: center;
    }

    & button {
        border: none;
        background-color: var(--primary-color);
        color: #ffff;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {

            &:nth-child(1){
                font-family: Roboto;
                font-size: 0.7rem;
                margin-bottom: 0;
            }

        }
    }

    & ul {
        list-style: none;
        color: #ffff;
        display: inline-flex;
        height: 100%;
        width: 100%;
        margin: 0;        
        justify-content: space-between;

        svg{
            align-self: center;
        }
        li:hover{
            border: solid 1px #ffff;
          
        }

        li {
            
            &:nth-child(1){
                display: flex;
                padding-top: 11px;
                & button {
                    height: 40%;
                }
                
            }

        }
        li {
            &:nth-child(2){
                width: 60%;
                padding-top: 11px;
                border: none;
                & button{
                    background-color: #F3F3F3;
                    color: black;
                }
            }

        }
        li {
            &:nth-child(3){

                & p{
                    position: relative;
                    top: 9px;
                    left: 12px;
                    z-index: 1;
                }
            }

        }
        li {
            &:nth-child(4){
                display: flex;
                padding: 11px;
                & p {
                    font-family: Roboto;
                    font-size: 0.7rem;
                }
                & span {
                    font-size: 1rem;
                }
            }

        }
        li {
            &:nth-child(5){
                
                
                & a {
                    display: flex;
                    height: 100%;
                    p {
                        align-self: end;
                    } 
                }
                
            }

        }
    }

    & a {
        text-decoration: none;
        color: white;
    }
`
export const CardImage= styled.img` 
    height: 50%;
    object-fit: scale-down;

`
export const CardDescription = styled.p`
    -webkit-line-clamp: 4;    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;

`
/*Formulario*/
export const FormContainer = styled.div`
    margin: 20px auto;
    width: 20vw;

    & img {
        width: 50%;
        margin: 0 82px;
    }
    & form {
        padding: 14px 18px;
        border: 1px #ddd solid;
        border-radius: 4px;
    }
    & button {
        background-color: var(--yellow-color);
        border: none;
        color: black;
    }
    & button:hover{
        background-color: var(--orange-color);
    }
`