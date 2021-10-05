import React from 'react';
import styled from 'styled-components';
import { FormInput, Button, Form } from './Button';
import {AiOutlineClose} from "react-icons/ai"

const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(130, 130,130, 0.8);
    position: fixed;
    display: grid;
    z-index: 100;
`


const ModalContainer = styled.section`
width: 500px;
height: 400px;
background-color: white;
display: grid;
border-radius: 10px;
position: relative;
place-self: center;

.iconButton{
    font-size: 1.8rem;
    
    position: absolute;
    top: 10px;
    right: 10px;

    .icon{
        fill: var(--yellow);
    }
    

}



`




function Modal({modalOn, setModal}) {

    return (
        <ModalBackground>
        <ModalContainer>
            <a className="iconButton" onClick={() => setModal(false)}><AiOutlineClose className="icon"/></a>
            <Form>
                <FormInput placeholder="Email" type="email"/>
                <FormInput placeholder="Password" type="password"/>
                <Button>Sign In</Button>
            </Form>
        </ModalContainer>
        </ModalBackground>
    )
}

export default Modal;