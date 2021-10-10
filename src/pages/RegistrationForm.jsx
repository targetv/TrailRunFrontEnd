import React, { useState } from 'react';
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
    grid-gap: 10px;
}

.radioContainer{
    border: 1px solid lightgrey;
    padding: 20px;
    border-radius: 10px;
    

    h4{
        font-size: 1.2rem;
    }
}

.tshirtRadio{
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
}



`

function RegistrationForm() {

    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        dob: "",
        address: "",
        postcode: "",
        telephonenumber: "",
        gender: "",
        ageonraceday: "",
        shirtsize: "",
        clubmember: false,
        signature: "test"
    })

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setForm({...form, [name]: value})

    }


    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://localhost:3030/register", {
            credentials: "include",
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(form)
        }).then(resp => {
            if(resp.ok){
                console.log("success")
                setForm({
                    firstname: "",
                    lastname: "",
                    email: "",
                    dob: "",
                    address: "",
                    postcode: "",
                    telephonenumber: "",
                    gender: "",
                    ageonraceday: "",
                    shirtsize: "",
                    clubmember: false,
                    signature: "test"
              
            })

            }
            else if (resp.status === 501){
                console.log("User already exists")
            
            }
            else{
                console.log(resp)
            }
        })

    }
 


    return (
        <FormBackGround>
        <FormContainer className="container80">
            <h3>Coxhoe Trail Run Registration</h3>
            <RegisterForm onSubmit={handleSubmit}>
                <FormInput  placeholder="First Name" className="width50" name="firstname" required type="text" onChange={handleChange}/>
                <FormInput  placeholder="Last Name" className="width50" name="lastname" required type="text" onChange={handleChange}/>
                <FormInput className="width50" type="email" name="email" required placeholder="Email" onChange={handleChange}/>

           
                <div className="ColInputs width50">
                <label for="dob">D.O.B</label>
                <FormInput  type="date" name="dob" onChange={handleChange}/>
                </div>
                <FormInput className="width50" type="text" name="address" required placeholder="Address" onChange={handleChange}/>
                <FormInput className="width50" type="text" name="postcode" required placeholder="Post Code" onChange={handleChange}/>
                <FormInput className="width50" type="tel" name="telephonenumber" required placeholder="Telephone Number" onChange={handleChange}/>
                <div className="twoInputCol">
                <div className="radioContainer">
                <h4 >Are You</h4>
                <div className="radioButtons">
                <FormInput type="radio" name="gender" value="male" onChange={handleChange}/>
                <label htmlFor="male">Male</label>
                <FormInput type="radio" name="gender" value="female" onChange={handleChange}/>
                <label htmlFor="female">Female</label>
                </div>
                </div>
                <div className="radioContainer">
                <h4>T-shirt Size</h4>
                <div className="tshirtRadio">
                <FormInput type="radio" name="shirtsize" value="S" onChange={handleChange} />
                <label htmlFor="S">S</label>
                <FormInput type="radio" name="shirtsize" value="M" onChange={handleChange} />
                <label htmlFor="M">M</label>
                <FormInput type="radio" name="shirtsize" value="L" onChange={handleChange} />
                <label htmlFor="L">L</label>
                <FormInput type="radio" name="shirtsize" value="XL" onChange={handleChange} />
                <label htmlFor="XL">Xl</label>
                <FormInput type="radio" name="shirtsize" value="XXL" onChange={handleChange} />
                <label htmlFor="XXL">XXL</label>
                </div>
                </div>
                </div>
                <FormInput type="text" name="ageonraceday" placeholder="Age On Race Day" className="width50" onChange={handleChange}/>
                <Button onClick={handleSubmit}>Submit</Button>
                
            </RegisterForm>

        </FormContainer>
        </FormBackGround>
    );
}

export default RegistrationForm;