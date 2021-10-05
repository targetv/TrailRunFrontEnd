import styled from "styled-components";

export const Button = styled.a`

width: 150px;
padding: 12px 15px;
background-color: var(--blue);
text-align: center;
border-radius: 10px;
color: var(--yellow);


:hover{
    color: var(--blue);
    background-color: var(--yellow);
   
}




`


export const FormInput = styled.input`
    width: 80%;
    padding: 15px;
    font-size: 1.2rem;
    border-radius: 20px;
    border: 0.5px solid lightgrey;

    :focus{
        outline: none;
    }

`

export const Form = styled.form`
    display: grid;
    place-items: center;
    grid-template-rows: repeat(3, 50px);
    grid-gap: 30px;
    place-self: center;
    width: 100%;


`