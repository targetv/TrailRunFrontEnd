import React from 'react';
import styled from 'styled-components';
import { FormInput, Button } from '../components/Button';

const FormContainer = styled.section`
display: grid;
background-color: white;
width: 50%;
height: 80%;
overflow: scroll;
grid-template-rows: auto;
grid-gap: 20px;

h3{
    place-self: center;
    font-size: 1.5rem;
    padding-top: 20px;
    color: var(--blue);
}
 
   

`

const FormBackGround = styled.div`
background-color: lightgrey;
height: calc(100vh - 175px);
display: grid;
place-items: center;


`


const RegisterForm = styled.form`
padding: 20px;
display: grid;
grid-template-rows: repeat(6, minmax(50px, 1fr));
grid-gap: 20px;
justify-items: center;




.width50{
    width: 50%;
    height: 50px;
}

.ColInputs{
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-gap: 10px;
    place-items: center;

   
    
}

.radioButtons{
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    place-items: start;

}

.twoInputCol{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
}

.radioContainer{
    border: 1px solid lightgrey;
    padding: 20px;
    border-radius: 10px;
    

    h4{
        font-size: 1.2rem;
    }
}




`

function RegistrationForm(props) {
    return (
        <FormBackGround>
        <FormContainer className="container80">
            <h3>Coxhoe Trail Run Registration</h3>
            <RegisterForm>
                <FormInput  placeholder="First Name" className="width50" name="firstname" required type="text"/>
                <FormInput  placeholder="Last Name" className="width50" name="lastname" required type="text"/>
                <FormInput className="width50" type="email" name="email" required placeholder="Email"/>

           
                <div className="ColInputs">
                <label for="dob">D.O.B</label>
                <FormInput  type="date" name="dob"/>
                </div>
                <FormInput className="width50" type="text" name="address" required placeholder="Address"/>
                <FormInput className="width50" type="text" name="postcode" required placeholder="Post Code"/>
                <FormInput className="width50" type="tel" name="phonenumbe" required placeholder="Telephone Number"/>
                <div className="twoInputCol">
                <div className="radioContainer">
                <h4 >Are You</h4>
                <div className="radioButtons">
                <FormInput type="radio" name="gender" value="male"/>
                <label htmlFor="male">Male</label>
                <FormInput type="radio" name="gender" value="female"/>
                <label htmlFor="female">Female</label>
                </div>
                </div>
                <FormInput type="text" name="AgeOnRaceDay" placeholder="Age On Race Day" />
                </div>
                <Button>Submit</Button>
                
            </RegisterForm>

        </FormContainer>
        </FormBackGround>
    );
}

export default RegistrationForm;